class CreateResidencies < ActiveRecord::Migration[7.1]
  def change
    create_table :residencies do |t|
      t.string :name
      t.string :image
      t.text :description
      t.string :location
      t.integer :price
      t.string :category
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
