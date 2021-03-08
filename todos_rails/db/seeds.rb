# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Todo.destroy_all
ApplicationRecord.connection.reset_pk_sequence!("todos")

todo1 = Todo.create!(title: "First Todo", body: "Make coffee", done: false)
todo2 = Todo.create!(title: "Second Todo", body: "Add milk", done: false)
todo3 = Todo.create!(title: "Third Todo", body: "Add sugar", done: false)
todo4 = Todo.create!(title: "Fourth Todo", body: "Drink coffee", done: false)
todo5 = Todo.create!(title: "Fifth Todo", body: "Write code", done: false)