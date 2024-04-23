class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :residency

  validates :check_in_date, :check_out_date, presence: true
end
