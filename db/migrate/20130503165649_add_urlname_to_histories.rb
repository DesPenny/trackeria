# -*- encoding : utf-8 -*-
class AddUrlnameToHistories < ActiveRecord::Migration
  def change
    add_column :histories, :urlname, :string
  end
end
