class Image < ActiveRecord::Base
 # require 'jcropper.rb' 
 #Deepak Joshi
 attr_accessor :crop_x, :crop_y, :crop_w, :crop_h
 # after_update :reprocess_photo, :if => :cropping?
 # attr_accessor :processing

    Paperclip::interpolates :eventtype do |attachment, style|
       attachment.instance.event_type.to_s
    end
    Paperclip::interpolates :eventid  do |attachment, style|
       attachment.instance.event_id
    end
  
  belongs_to :event, :polymorphic => :true

  has_attached_file :photo,
                    :url => "/file_handlers/attachments/:eventtype/:eventid/:attachment/:style.:extension",
                    :path => ":rails_root/public/file_handlers/attachments/:eventtype/:eventid/:attachment/:style.:extension",
                    :default_url=>"/images.jpeg", 
                    :styles => {:small  => "24x24", :medium => "32x32", :xmedium => "48x48", :minilarge => "64x64", :large => "78x78", :gs_135=> "145x143", :gs_170=>"170x170",:gs_190=>'190x190',:gs_235=>"235x227",:banner => "1060x90", :cropper=>"400x400" },
                    :processors => [:jcropper] 
                  
  validates_attachment_presence :photo, :message=>"Please select image"
  validates_attachment_size :photo, :less_than=>5.megabyte, :greater_than => 1.kilobyte, :message=>"Please upload image size between 1KB to 5MB"
  validates_attachment_content_type :photo, :content_type=> WHITE_LIST_FOR_IMAGE , :message=>"Please upload images of type jpeg"
  before_post_process :is_image?
  after_save :test

  before_create :prepend_timestamp_to_file
 
  def cropping?
  !crop_x.blank? && !crop_y.blank? && !crop_w.blank? && !crop_h.blank?
  end
  
  def photo_geometry(style =:original)
    @geometry ||= {}
    @geometry[style] ||= Paperclip::Geometry.from_file(photo.path(style))
  end
 
  
  # def reprocess_photo
  #   return unless (cropping? && !processing)
  #   self.processing = true
  #   photo.reprocess!
  #   self.processing = false
  # end

  def event
      event_type.constantize.find(:first,:conditions=>[ 'id= ?', event_id ])
  end
  
  def test 
    return self.id
  end
  # returns the file name
  def name
    self.photo_file_name
  end
  
  #returns the size
  def size
    self.photo_file_size
  end
  
  #returns the size in kb or mb instead of bytes
  def pretty_size
    FileHandler.human_size(self.size)
  end
  
  def self.human_size(size)
    if size < 1048576
      return (size.to_f/1024).round(2).to_s + " KB"
    else
      return (size.to_f/1048576).round(2).to_s + " MB"
    end
  end
  
  def error_messages
    errors=""
    self.errors.each do |attr, msg|
      errors+="#{msg}<br/>"
    end 
    errors
  end
  
  #saves the attachment and indexes it with solr
  def save_file
    if self.save
#      self.solr_save
      return true
    end
    return false
  end
  
  def update_file (updated_fields)
    path=self.complete_path
    if self.update_attributes(updated_fields)      
      return true
    end
    return false
  end
  
  def delete_physical_file (path="")
    path||=self.complete_path
    FileUtils.rm_rf(File.dirname(path)) if File::exists?( path )
  end
  
  
  # find file given file id
  def self.find_by_id file_id
    find(:first, :conditions=>["id = ?", file_id])
  end
  
  
  #builds the absolute path to a file on the system 
  def complete_path option=nil
    Rails.root+self.file_handler.path_to_file(option)
  end
  
  #returns a path to a default image for the case where a file is not present on the system not 
  def missing_file_path
    Rails.root+"/public/images.jpeg"
  end
  
  #alias to paperclip's url method you can use @enabler.file.url instead of @enabler.file.file.url
  #can also specify for the url to download a file @enabler.file.url(:dl) or thumbnails @enabler.file.url(:thumb) 
  def url style=nil
    if style==:dl
      url=["#{CONTEXT}", self.file.url(:attachment, false)].join("")
    else
      url=self.file.url(style)
    end
    url
  end
  
  # checks the that the attached file size is greater than 0 and less than the max file_size
  def attached_file_size
    if self.photo_file_size.nil?
      true
    else
      m_file_size= self.max_size.nil? ? (Vcorganization.max_file_size self.community_id) : self.max_size
      if (self.photo_file_size == 0)
        self.errors.add(:file, "size must be bigger than 0 bytes!") 
      elsif self.photo_file_size > m_file_size.megabytes
        self.errors.add(:file, "size must be smaller than #{m_file_size} Mb!")
      else
        true
      end  
    end
  end  
  
  # returns true if file is of type image
  def is_image?
    !(self.photo_content_type =~ /^image.*/).nil? 
  end

  ####
  #
  private

  # this method prepends timestamp to file names
  def prepend_timestamp_to_file
    # extension = File.extname(file_file_name).downcase
    self.photo.instance_write(:file_name, "#{Time.now.to_i}_#{photo_file_name}")
  end
  ####
  
end
