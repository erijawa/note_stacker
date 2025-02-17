class CreatePostCategories < ActiveRecord::Migration[7.2]
  def change
    create_table :post_categories, id: :string, limit: 36 do |t|
      t.references :post, type: :string, null: false, foreign_key: true
			t.references :category, type: :string, null: false, foreign_key: true

      t.timestamps
    end
    add_index :post_categories, [:post_id, :category_id], unique: true
  end
end
