class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :residency

  validates :check_in_date, presence: true
  validates :check_out_date, presence: true
  validates :guest_num, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :total_price, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  def total
    @total = Booking.guest_num * Residency.price
  end
end
