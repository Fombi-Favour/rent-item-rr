class CreateResidencies < ActiveRecord::Migration[7.1]
  def change
    create_table :residencies do |t|
      t.string :name
      t.string :location
      t.string :category
      t.text :description
      t.integer :price
      t.references :user, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
