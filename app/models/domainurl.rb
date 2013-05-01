# == Schema Information
#
# Table name: domainurls
#
#  id           :integer          not null, primary key
#  user_id      :integer
#  domainurl    :string(255)
#  keyword      :string(255)
#  category     :string(255)
#  google_rank  :integer
#  bing_rank    :integer
#  yahoo_rank   :integer
#  alexa_rank   :integer
#  page_rank    :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  alexa_global :string(255)
#

class Domainurl < ActiveRecord::Base
  belongs_to :user
  attr_accessible :category, :domainurl, :keyword, :user_id, :google_rank, :bing_rank, :yahoo_rank, :alexa_rank, :page_rank

  validates_presence_of :domainurl, :keyword

  def self.search(search)
  		if search
    		where('domainurl LIKE ? OR keyword LIKE ? OR category LIKE ?', "%#{search}%", "%#{search}%", "%#{search}%")
  		else
  			scoped
  		end
	end

  def domainupdate
    #Ranking.new(:keyword => @domainurls.keyword}, :url =>  @domainurls.domainurl, :limit =>100).from_bing
  #  @domainurl.yahoo_rank=Ranking.new(:keyword => "#{domainurl.keyword}", :url =>  "#{domainurl.domainurl}", :limit =>100).from_yahoo
  # @domainurl.alexa_global=PageRankr.ranks("#{domainurl.domainurl}", :alexa_global)
  #  @domainurl.alexa_global=domainurl.alexa_global[:alexa_global] 
    
  end
end
