class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
	    t.integer  "lock_version",         default: 0, null: false
	    t.datetime "created_at"
	    t.datetime "updated_at"
	    t.string   "photo_file_name"
	    t.string   "photo_content_type"
	    t.integer  "photo_file_size"
	    t.integer  "event_id"
	    t.string   "event_type"
    end
  end
end
