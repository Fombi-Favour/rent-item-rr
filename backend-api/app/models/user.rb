class User < ApplicationRecord
  has_secure_password
  has_many :residencies, dependent: :destroy
  has_many :reservations, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_one :residency_review, dependent: :destroy

  validates :name, presence: true
  validates :email, presence: true
  validates :password, presence: true
end
