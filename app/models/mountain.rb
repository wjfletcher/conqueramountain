class Mountain < ApplicationRecord
  has_many :user_mountains
  has_many :users, through: :user_mountains
end
