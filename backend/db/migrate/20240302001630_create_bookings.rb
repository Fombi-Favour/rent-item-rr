class CreateBookings < ActiveRecord::Migration[7.1]
  def change
    create_table :bookings do |t|
      t.date :check_in_date
      t.date :check_out_date
      t.integer :guest_num
      t.integer :total_price
      t.references :user, foreign_key: { to_table: :users }
      t.references :residence, foreign_key: { to_table: :residencies }

      t.timestamps
    end
  end
end
