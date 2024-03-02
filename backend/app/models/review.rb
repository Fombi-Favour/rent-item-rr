class Review < ApplicationRecord
  belongs_to :user
  belongs_to :residency

  validates :rating, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
