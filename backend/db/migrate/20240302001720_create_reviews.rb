class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :comment_text
      t.references :user, foreign_key: { to_table: :users }
      t.references :residence, foreign_key: { to_table: :residencies }

      t.timestamps
    end
  end
end
