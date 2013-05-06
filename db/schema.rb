# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130506173036) do

  create_table "delayed_jobs", :force => true do |t|
    t.integer  "priority",   :default => 0
    t.integer  "attempts",   :default => 0
    t.text     "handler"
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.string   "queue"
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  add_index "delayed_jobs", ["priority", "run_at"], :name => "delayed_jobs_priority"

  create_table "domainurls", :force => true do |t|
    t.integer  "user_id"
    t.string   "domainurl"
    t.string   "keyword"
    t.string   "category"
    t.integer  "google_rank"
    t.integer  "bing_rank"
    t.integer  "yahoo_rank"
    t.integer  "page_rank"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.string   "alexa_global"
    t.string   "urlname"
    t.string   "googlesource"
  end

  add_index "domainurls", ["user_id"], :name => "index_domainurls_on_user_id"

  create_table "histories", :force => true do |t|
    t.integer  "domainurl_id"
    t.string   "domainurl"
    t.string   "keyword"
    t.string   "category"
    t.integer  "google_rank"
    t.integer  "bing_rank"
    t.integer  "yahoo_rank"
    t.integer  "alexa_global"
    t.integer  "page_rank"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.string   "urlname"
  end

  add_index "histories", ["domainurl_id"], :name => "index_histories_on_domainurl_id"

  create_table "users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.datetime "deleted_at"
    t.string   "plan"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
