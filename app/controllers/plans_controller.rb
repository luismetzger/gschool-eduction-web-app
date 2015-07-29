class PlansController < ApplicationController
  layout "main_layout_old"
  def index
    @plans = Plan.order("price")
  end
end
