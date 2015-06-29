class SubscriptionsController < ApplicationController
  layout "main_layout"
  def new
    plan = Plan.find(params[:plan_id])
    @subscription = plan.subscriptions.build
  end

  def create
    params.permit!
    @subscription = Subscription.new(params[:subscription])
    if @subscription.save_with_payment
      redirect_to @subscription, :notice => "Thank you for subscribing!"
    else
      render :new
    end
  end

  def show
    @subscription = Subscription.find(params[:id])
  end

  def subscription_params
    params.require(:subscription).permit(:email, :plan_id, :stripe_card_token)
  end

end

