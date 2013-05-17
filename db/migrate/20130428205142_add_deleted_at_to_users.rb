# -*- encoding : utf-8 -*-
class AddDeletedAtToUsers < ActiveRecord::Migration
  def change
    add_column :users, :deleted_at, :datetime
  end
end
