class Category < ApplicationRecord
  validates :name, presence: true, uniqueness: { scope: :user_id }, length: { maximum: 20 }

  has_many :post_categories, dependent: :destroy
  has_many :posts, through: :post_categories
  belongs_to :user
end
