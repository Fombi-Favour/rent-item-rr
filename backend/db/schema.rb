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

ActiveRecord::Schema[7.1].define(version: 2024_03_02_001720) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.date "check_in_date"
    t.date "check_out_date"
    t.integer "guest_num"
    t.integer "total_price"
    t.bigint "user_id"
    t.bigint "residence_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["residence_id"], name: "index_bookings_on_residence_id"
    t.index ["user_id"], name: "index_bookings_on_user_id"
  end

  create_table "residencies", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "category"
    t.text "description"
    t.integer "price"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_residencies_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating"
    t.text "comment_text"
    t.bigint "user_id"
    t.bigint "residence_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["residence_id"], name: "index_reviews_on_residence_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "bookings", "residencies", column: "residence_id"
  add_foreign_key "bookings", "users"
  add_foreign_key "residencies", "users"
  add_foreign_key "reviews", "residencies", column: "residence_id"
  add_foreign_key "reviews", "users"
end
