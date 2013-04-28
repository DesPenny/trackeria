class CreateDomainurls < ActiveRecord::Migration
  def change
    create_table :domainurls do |t|
      t.integer :user_id
      t.string :domainurl
      t.string :keyword
      t.string :category
      t.integer :google_rank
      t.integer :bing_rank
      t.integer :yahoo_rank
      t.integer :alexa_rank
      t.integer :page_rank
      t.references :user

      t.timestamps
    end
    add_index :domainurls, :user_id
  end
end
