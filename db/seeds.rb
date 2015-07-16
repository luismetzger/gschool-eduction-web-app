# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
 User.create(email: 'testuser1@gmail.com', password: 'test123',password_confirmation: 'test123')
 User.create(email: 'testuser2@gmail.com', password: 'test123',password_confirmation: 'test123')
 Plan.create!(:name => "Basic plan", :price => 10, :description => "Basic gschool plan")
 Plan.create!(:name => "Pro plan", :price => 15, :description => "Pro gschool plan")
 Plan.create!(:name => "Advance", :price => 49, :description => "advance gschool plan")
