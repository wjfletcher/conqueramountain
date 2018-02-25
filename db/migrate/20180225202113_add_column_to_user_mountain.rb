class AddColumnToUserMountain < ActiveRecord::Migration[5.0]
  def change
    add_column :user_mountains, :user_id, :integer
    add_column :user_mountains, :mountain_id, :integer
  end
end
