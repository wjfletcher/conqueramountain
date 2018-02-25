class CreateUserMountains < ActiveRecord::Migration[5.0]
  def change
    create_table :user_mountains do |t|

      t.timestamps
    end
  end
end
