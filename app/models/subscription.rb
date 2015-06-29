class Subscription < ActiveRecord::Base
  belongs_to :plan
  validates_presence_of :plan_id
  validates_presence_of :email
  
  attr_accessor :stripe_card_token
  
  def save_with_payment
    if valid?
      customer = Stripe::Customer.create(email: email, card: stripe_card_token)

      self.stripe_customer_token = customer.id
      Stripe::Charge.create customer: customer.id,
                          amount: 50,
                          description: "sandeep",
                          currency: 'usd'

      save!
    end
  rescue Stripe::InvalidRequestError => e
   logger.error "Stripe error while creating customer: #{e.message}"
   errors.add :base, "There was a problem with your credit card."
   false
  end
end
