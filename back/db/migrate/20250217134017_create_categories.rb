class CreateCategories < ActiveRecord::Migration[7.2]
  def change
    create_table :categories, id: :string, limit: 36 do |t|
      t.references :user, type: :string, null: false, foreign_key: true
      t.string :name, null: false

      t.timestamps
    end
  end
end
