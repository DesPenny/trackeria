class AddRefreshedToDomainurls < ActiveRecord::Migration
  def change
    add_column :domainurls, :refreshed, :datetime
  end
end
