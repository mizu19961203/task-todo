class AddDatesToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :date_start, :date
    add_column :tasks, :date_fin, :date
  end
end
