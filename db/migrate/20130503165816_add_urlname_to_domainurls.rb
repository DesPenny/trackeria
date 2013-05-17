# -*- encoding : utf-8 -*-
class AddUrlnameToDomainurls < ActiveRecord::Migration
  def change
    add_column :domainurls, :urlname, :string
  end
end
