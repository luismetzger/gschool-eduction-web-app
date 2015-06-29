class PasswordResetsController < ApplicationController
  layout "main_layout"
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user 
      user.send_password_reset 
      msg =  "Email sent with password reset instructions."
    else
      msg =  "No user found"
    end  
    redirect_to root_url, :notice => msg
  end
  
  def edit
    @user = User.find_by_password_reset_token!(params[:id])
  end
  
  def update
    params.permit!
    @user = User.find_by_password_reset_token!(params[:id])
    if @user.password_reset_sent_at < 2.hours.ago
      redirect_to new_password_reset_path, :alert => "Password reset has expired."
    elsif @user.update_attributes(params[:user])
      redirect_to root_url, :notice => "Password has been reset!"
    else
      render :edit
    end
  end

  def user_params
    params.require(:user).permit(:password, :password_confirmation)
  end
end
