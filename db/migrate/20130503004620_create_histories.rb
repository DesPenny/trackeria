class CreateHistories < ActiveRecord::Migration
  def change
    create_table :histories do |t|
      t.integer :domainurl_id
      t.string :domainurl
      t.string :keyword
      t.string :category
      t.integer :google_rank
      t.integer :bing_rank
      t.integer :yahoo_rank
      t.integer :alexa_global
      t.integer :page_rank

      t.timestamps
    end
    add_index :histories, :domainurl_id
  end
end
