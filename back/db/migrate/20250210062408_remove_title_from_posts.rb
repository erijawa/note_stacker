class RemoveTitleFromPosts < ActiveRecord::Migration[7.2]
  def change
    remove_column :posts, :title, :string
  end
end
