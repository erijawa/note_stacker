class CreateUsers < ActiveRecord::Migration[7.2]
  def change
    create_table :users, id: :string, limit: 36 do |t|
      t.string :provider, null: false
      t.string :provider_id, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
