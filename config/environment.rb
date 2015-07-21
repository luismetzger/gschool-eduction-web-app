# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
GschoolEducationApp::Application.initialize!

if Rails.env == "development"
	Paperclip.options[:command_path] = "D:/ImageMagick-6.6.5-1"
end
WHITE_LIST_FOR_IMAGE = ["image/jpeg","image/jpg", "image/JPEG", "image/pjpeg", "application/x-shockwave-flash"]