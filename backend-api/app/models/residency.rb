class Residency < ApplicationRecord
  has_many :reservations, dependent: :destroy
  has_many :residency_reviews, dependent: :destroy

  belongs_to :user

  validates :name, :description, :location, :category, :image, presence: true
  validates :price, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
