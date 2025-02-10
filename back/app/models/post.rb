class Post < ApplicationRecord
  validates :comment, length: { maximum: 255 }
  validates :url, presence: true, length: { maximum: 255 }

  belongs_to :user
end
