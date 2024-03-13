class Residency < ApplicationRecord
  belongs_to :user

  has_many :bookings, foreign_key: 'residency_id', dependent: :destroy
  has_many :reviews, foreign_key: 'user_id', dependent: :destroy

  validates :name, presence: true
  validates :location, presence: true
  validates :category, presence: true
  validates :photo, presence: true
  validates :description, presence: true
  validates :price, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
