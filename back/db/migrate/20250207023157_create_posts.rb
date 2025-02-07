class CreatePosts < ActiveRecord::Migration[7.2]
  def change
    create_table :posts, id: :string, limit: 36 do |t|
      t.references :user, type: :string, null: false, foreign_key: true
      t.string :title, null: false
      t.text :comment
      t.text :url, null: false

      t.timestamps
    end
  end
end
