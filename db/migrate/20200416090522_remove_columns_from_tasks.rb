class RemoveColumnsFromTasks < ActiveRecord::Migration[5.2]
  def change
  	remove_column :tasks, :address, :text
    remove_column :tasks, :latitude, :float
    remove_column :tasks, :longitude, :float
  end
end
