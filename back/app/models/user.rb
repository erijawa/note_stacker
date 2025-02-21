class User < ApplicationRecord
  validates :name, presence: true, length: { maximum: 30 }
  validates :provider, presence: true, length: { maximum: 30 }
  validates :provider_id, presence: true, length: { maximum: 255 }

  has_many :posts, dependent: :destroy
  has_many :categories, dependent: :destroy
end
