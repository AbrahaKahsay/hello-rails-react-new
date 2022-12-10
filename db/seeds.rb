# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Message.destroy_all
Message.create(greeting: 'Hello beautiful people!')
Message.create(greeting: 'Hi there!')
Message.create(greeting: 'Peace unto you!')
Message.create(greeting: 'Good morning there!')
Message.create(greeting: 'Bonjour!')
p "Created #{Message.count} messages"
