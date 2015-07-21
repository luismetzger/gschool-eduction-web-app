module ApplicationHelper
	def display_user_image(user,size)
		if user && !user.images.empty?
			      ran2= user.images[0].updated_at.strftime("%Y%m%d%H%M%S") 
			      ran_img = user.images[0].photo.url(size)
			      ran_img = "#{ran_img}?#{ran2}" 
			      image_usrl = ran_img.encode('UTF-8', 'binary', invalid: :replace, undef: :replace, replace: '')
			      return "#{image_tag image_usrl,:class =>'usr_image',:title=>'',:height=>'50px', :width=>'50px',:style=>'min-height:36px',:alt=>"Img"}".html_safe
	    else
	    	return "#{image_tag asset_path('default-user-photo.jpg'),:height =>"50px",:width =>"50px",:class =>'usr_image'}".html_safe
	    end   
    end    
end
