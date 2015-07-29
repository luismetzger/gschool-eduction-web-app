class HomeController < ApplicationController
  def index
  	if current_user
  		  redirect_to :action=>'dashboard'
  	else
	  	render layout: "main_layout"
  	end
  end

  def dashboard
  	render layout: "dashboard_layout"
  end
end
