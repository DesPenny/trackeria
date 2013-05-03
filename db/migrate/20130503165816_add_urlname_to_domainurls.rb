class AddUrlnameToDomainurls < ActiveRecord::Migration
  def change
    add_column :domainurls, :urlname, :string
  end
end
