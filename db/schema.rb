# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150722141552) do

  create_table "images", force: true do |t|
    t.integer  "lock_version",       default: 0, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.integer  "event_id"
    t.string   "event_type"
  end

  create_table "plans", force: true do |t|
    t.string   "name"
    t.decimal  "price",       precision: 10, scale: 0
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "spoken_languages", force: true do |t|
    t.string   "name"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "subscriptions", force: true do |t|
    t.integer  "plan_id"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "stripe_customer_token"
    t.integer  "user_id"
  end

  add_index "subscriptions", ["user_id"], name: "index_subscriptions_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_reset_token"
    t.datetime "password_reset_sent_at"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "company_name"
    t.string   "age"
    t.text     "about_you"
    t.string   "country"
    t.string   "location"
    t.text     "billing_address"
    t.string   "highest_education"
    t.string   "open_for_work"
    t.string   "school_name"
    t.string   "job_title"
    t.string   "github_account"
    t.string   "dribble_account"
    t.string   "linkedin_account"
    t.string   "twitter_account"
    t.string   "facebook_account"
    t.string   "google_account"
    t.string   "reddit_account"
    t.string   "website_url"
  end

end
