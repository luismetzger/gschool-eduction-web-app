class UsersController < ApplicationController
  layout "main_layout"
  def new
    @user = User.new
  end

  def create
    params.permit!
    @user = User.new(params[:user])
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_url, notice: "Thank you for signing up!"
    else
      render "new"
    end
  end

  def user_profile
    @user = current_user
  end

  def update
    params.permit!
    @user = current_user
    flash[:notice] = @user.update_attributes(params[:user]) ? "Profile Successfully updated" : "Problem with profile update"
    images = @user.images
    if images.length > 0
      @image = images[0]
      @image.update_attributes(:photo => params[:photo]) if params[:photo]
    else
      @image = Image.create(:photo => params[:photo], :event_type => @user.class.to_s, :event_id => @user.id) if params[:photo]
    end
    render "user_profile"
  end
    
  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation,:first_name,:last_name, :company_name, :about_you, :country, :location, :billing_address, :highest_education, :open_for_work, :school_name, :job_title, :github_account, :dribble_account, :linkedin_account, :twitter_account, :facebook_account, :google_account, :reddit_account, :website_url)
  end

end
