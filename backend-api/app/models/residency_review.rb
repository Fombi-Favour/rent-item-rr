class ResidencyReview < ApplicationRecord
  belongs_to :residency
  belongs_to :user
end
