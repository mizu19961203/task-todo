class RemoveplaceIdToTasks < ActiveRecord::Migration[5.2]
  def change
  	remove_column :tasks, :place_id, :integer
  	add_column :places, :task_id, :integer
  end
end
