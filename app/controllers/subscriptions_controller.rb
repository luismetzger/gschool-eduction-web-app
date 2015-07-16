class SubscriptionsController < ApplicationController
  layout "main_layout"
  def new
    plan = Plan.find(params[:plan_id])
    @subscription = plan.subscriptions.build
  end

  def create
    params.permit!
    @user = User.new(:email => params[:subscription][:email],:password => params[:password],:password_confirmation => params[:password], :first_name => params[:subscription][:first_name], :last_name => params[:subscription][:last_name], :company_name => params[:subscription][:company_name], :age => params[:subscription][:age])
    if @user.save
      @subscription =  @user.build_subscription(params[:subscription])
      # @subscription = Subscription.new(params[:subscription])
      if @subscription.save_with_payment
        redirect_to @subscription, :notice => "Thank you for subscribing!"
      else
        render :new
      end
   else
      @subscription = Subscription.new(params[:subscription])
      render :new
   end   
  end

  def show
    @subscription = Subscription.find(params[:id])
  end

  def subscription_params
    params.require(:subscription).permit(:email, :plan_id, :stripe_card_token,:first_name,:last_name,:company_name, :age)
  end

end

