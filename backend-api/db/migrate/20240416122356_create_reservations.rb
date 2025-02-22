class CreateReservations < ActiveRecord::Migration[7.1]
  def change
    create_table :reservations do |t|
      t.date :check_in_date
      t.date :check_out_date
      t.integer :guest_number
      t.decimal :total_price
      t.references :user, foreign_key: true
      t.references :residency, foreign_key: true

      t.timestamps
    end
  end
end
