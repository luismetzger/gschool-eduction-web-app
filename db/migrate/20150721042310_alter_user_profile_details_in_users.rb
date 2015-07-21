class AlterUserProfileDetailsInUsers < ActiveRecord::Migration
  def change
  	add_column :users, :about_you, :text
    add_column :users, :country, :string
    add_column :users, :location, :string
    add_column :users, :billing_address, :text

    add_column :users, :highest_education, :string
    add_column :users, :open_for_work, :string
    add_column :users, :school_name, :string
    add_column :users, :job_title, :string

	add_column :users, :github_account, :string
    add_column :users, :dribble_account, :string
    add_column :users, :linkedin_account, :string
    add_column :users, :twitter_account, :string    

    add_column :users, :facebook_account, :string
    add_column :users, :google_account, :string
    add_column :users, :reddit_account, :string
    add_column :users, :website_url, :string    
  end
end
