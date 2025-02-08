class Post < ApplicationRecord
  validates :title, presence: true, length: { maximum: 255 }
  validates :comment, length: { maximum: 255 }
  validates :url, presence: true, length: { maximum: 255 }

  belongs_to :user
end
