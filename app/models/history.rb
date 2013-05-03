class History < ActiveRecord::Base
  attr_accessible :alexa_global, :bing_rank, :category, :domainurl, :domainurl_id, :google_rank, :keyword, :page_rank, :yahoo_rank

  belongs_to :domainurl, :foreign_key=>"domainurl_id"
  
end
