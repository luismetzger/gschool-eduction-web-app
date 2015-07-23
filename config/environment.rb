# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
GschoolEducationApp::Application.initialize!

Paperclip.options[:command_path] = "D:/ImageMagick-6.6.5-1"