class Task < ApplicationRecord
	has_many :places
	accepts_nested_attributes_for :places
end
