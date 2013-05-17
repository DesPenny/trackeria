# -*- encoding : utf-8 -*-
class AddRefreshedactualToDomainurls < ActiveRecord::Migration
  def change
    add_column :domainurls, :refreshedactual, :datetime
  end
end
