class AddUpdatecountToDomainurls < ActiveRecord::Migration
  def change
    add_column :domainurls, :updatecount, :integer
  end
end
