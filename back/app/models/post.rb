class Post < ApplicationRecord
  validates :comment, length: { maximum: 255 }
  validates :url, presence: true, length: { maximum: 255 }

  belongs_to :user
  has_many :post_categories, dependent: :destroy
  has_many :categories, through: :post_categories

  def save_category(sent_categories, user_id)
    sent_categories.uniq!
    current_categories = self.categories.pluck(:name) unless self.categories.nil?
    old_categories = current_categories - sent_categories
    new_categories = sent_categories - current_categories

    # 古いカテゴリを消す
    old_categories.each do |old|
      self.categories.delete(Category.find_by(name: old))
    end

    # 新しいカテゴリを保存
    new_categories.each do |new|
      new_post_category = Category.find_or_create_by(name: new, user_id: user_id)
      self.categories << new_post_category
    end
  end
end
