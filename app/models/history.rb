# == Schema Information
#
# Table name: histories
#
#  id           :integer          not null, primary key
#  domainurl_id :integer
#  domainurl    :string(255)
#  keyword      :string(255)
#  category     :string(255)
#  google_rank  :integer
#  bing_rank    :integer
#  yahoo_rank   :integer
#  alexa_global :integer
#  page_rank    :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class History < ActiveRecord::Base
  attr_accessible :alexa_global, :bing_rank, :category, :domainurl, :domainurl_id, :google_rank, :keyword, :page_rank, :yahoo_rank

  belongs_to :domainurl, :foreign_key=>"domainurl_id"
  
end
