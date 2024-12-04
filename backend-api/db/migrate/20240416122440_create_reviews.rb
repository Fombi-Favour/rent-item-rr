class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.decimal :rating
      t.string :comment_text
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
