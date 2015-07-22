class User < ActiveRecord::Base
  has_secure_password

  has_one :subscription
  has_one :plan, :through => :subscription
  
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  validates :email, :presence => true, :uniqueness => true, :format => EMAIL_REGEX 

  has_many :images, :as => :event, :dependent => :destroy, finder_sql: proc { "select DISTINCT b.* FROM images b INNER JOIN
users v ON b.event_id = v.id WHERE b.event_type ='User' AND b.event_id = #{self.id} and b.lock_version <> -1"}

  has_many :spoken_languages
  accepts_nested_attributes_for :spoken_languages, :allow_destroy => true

  def send_password_reset
    generate_token(:password_reset_token)
    self.password_reset_sent_at = Time.zone.now
    save!
    UserMailer.password_reset(self).deliver
  end

  def generate_token(column)
    begin
      self[column] = SecureRandom.urlsafe_base64
    end while User.exists?(column => self[column])
  end
  
end
