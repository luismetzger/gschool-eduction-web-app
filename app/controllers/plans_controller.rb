class PlansController < ApplicationController
  layout "main_layout"
  def index
    @plans = Plan.order("price")
  end
end
