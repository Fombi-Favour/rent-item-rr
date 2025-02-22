class CreateResidencyReviews < ActiveRecord::Migration[8.0]
  def change
    create_table :residency_reviews do |t|
      t.string :content
      t.integer :rating
      t.references :residency, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
