class UsersController < ApplicationController
  layout "main_layout"
  def new
    @user = User.new
  end

  def create
    params.permit!
    @user = User.new(params[:user])
    if params[:add_spoken_language]
      # add empty language associated with @user
      @user.spoken_languages.build
    elsif params[:remove_spoken_language]
      # nested model that have _destroy attribute = 1 automatically deleted by rails
    else
      if @user.save
        session[:user_id] = @user.id
        redirect_to root_url, notice: "Thank you for signing up!" and return
      # else
      end
    end
    render "new"  
  end

  def edit
    @user = User.find(params[:id])
    @user.spoken_languages.build if @user.spoken_languages.blank?
  end
    
  def show
    @user = current_user
  end

  def update
    params.permit!
    @user = current_user
    if params[:add_spoken_language]
      # rebuild the spoken_language attributes that doesn't have an id
      unless params[:user][:spoken_languages_attributes].blank?
          for attribute in params[:user][:spoken_languages_attributes]
            @user.spoken_languages.build(attribute.last.except(:_destroy)) unless attribute.last.has_key?(:id)
          end
      end
      # add one more empty spoken language attribute
      @user.spoken_languages.build
      render "edit"
    elsif params[:remove_spoken_language]
      # collect all marked for delete spoken_language ids
      removed_spoken_languages = params[:user][:spoken_languages_attributes].collect { |i, att| att[:id] if (att[:id] && att[:_destroy].to_i == 1) }
      # physically delete the spoken languages from database
      SpokenLanguage.delete(removed_spoken_languages)
      flash[:notice] = "spoken_languages removed."
      for attribute in params[:user][:spoken_languages_attributes]
        # rebuild spoken_language attributes that doesn't have an id and its _destroy attribute is not 1
        @user.spoken_languages.build(attribute.last.except(:_destroy)) if (!attribute.last.has_key?(:id) && attribute.last[:_destroy].to_i == 0)
      end
      render "edit"
    else
        flash[:notice] = @user.update_attributes(params[:user]) ? "Profile Successfully updated" : "Problem with profile update"
        images = @user.images
        if images.length > 0
          @image = images[0]
          @image.update_attributes(:photo => params[:photo]) if params[:photo]
        else
          @image = Image.create(:photo => params[:photo], :event_type => @user.class.to_s, :event_id => @user.id) if params[:photo]
        end
        render "show"
     end   
     
  end
    
  def profile
    @user = current_user
    render layout: "dashboard_layout"
  end  
  
  def account
    @user = current_user
    render layout: "dashboard_layout"
  end  

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation,:first_name,:last_name, :company_name, :about_you, :country, :location, :billing_address, :highest_education, :open_for_work, :school_name, :job_title, :github_account, :dribble_account, :linkedin_account, :twitter_account, :facebook_account, :google_account, :reddit_account, :website_url)
  end

end
