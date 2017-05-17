require 'json'
Mountain.delete_all
JSON.parse(open("#{Rails.root}/db/seeds/fourks.json").read).each do |mountain|
   Mountain.create(mountain)
end
