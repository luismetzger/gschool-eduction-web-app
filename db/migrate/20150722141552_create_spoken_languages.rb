class CreateSpokenLanguages < ActiveRecord::Migration
  def change
    create_table :spoken_languages do |t|
      t.string :name
      t.integer :user_id
      t.timestamps
    end
  end
end
