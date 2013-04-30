class AddAlexaGlobalToDomainurls < ActiveRecord::Migration
  def change
    add_column :domainurls, :alexa_global, :string
  end
end
