class AddPlaceToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :place_id, :integer
  end
end
