class AddMountainsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :mountains do |t|
      t.string :name, null: false
      t.integer :elevation, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.string :group
    end
  end
end
