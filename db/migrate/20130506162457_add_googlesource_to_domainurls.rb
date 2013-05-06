class AddGooglesourceToDomainurls < ActiveRecord::Migration
  def change
    add_column :domainurls, :googlesource, :string
  end
end
