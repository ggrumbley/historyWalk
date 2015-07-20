class CreateExhibits < ActiveRecord::Migration
  def change
    create_table :exhibits do |t|
      t.integer :exNum
      t.string :artist
      t.string :title
      t.integer :year
      t.text :script
      t.string :audio
      t.string :image

      t.timestamps null: false
    end
  end
end
