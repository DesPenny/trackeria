class AddUpdatecountToDomainurls < ActiveRecord::Migration
  def change
    add_column :domainurls, :updatecount, :integer, :default=>1
  end
end
