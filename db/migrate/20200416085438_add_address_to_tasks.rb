class AddAddressToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :address, :text
    add_column :tasks, :latitude, :float
    add_column :tasks, :longitude, :float
  end
end
