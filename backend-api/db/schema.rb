# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_04_16_122440) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reservations", force: :cascade do |t|
    t.date "check_in_date"
    t.date "check_out_date"
    t.integer "guest_number"
    t.bigint "user_id"
    t.bigint "residency_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["residency_id"], name: "index_reservations_on_residency_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "residencies", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.text "description"
    t.string "location"
    t.integer "price"
    t.string "category"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_residencies_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.decimal "rating"
    t.string "comment_text"
    t.bigint "user_id"
    t.bigint "residency_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["residency_id"], name: "index_reviews_on_residency_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "reservations", "residencies"
  add_foreign_key "reservations", "users"
  add_foreign_key "residencies", "users"
  add_foreign_key "reviews", "residencies"
  add_foreign_key "reviews", "users"
end
