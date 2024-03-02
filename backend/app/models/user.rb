class User < ApplicationRecord
  has_many :residencies, foreign_key: 'user_id', dependent: :destroy
  has_many :bookings, foreign_key: 'user_id', dependent: :destroy
  has_many :reviews, foreign_key: 'user_id', dependent: :destroy

  validates :name, presence: true
end
