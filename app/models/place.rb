class Place < ApplicationRecord
	belongs_to :task
	# validates :latitude, presence: true
  	# validates :longitude, presence: true
 	geocoded_by :address
  	after_validation :geocode, if: :address_changed?
end
