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
#  urlname      :string(255)
#

class Domainurl < ActiveRecord::Base
  belongs_to :user
  attr_accessible :category, :domainurl, :keyword, :user_id, :google_rank, :bing_rank, :yahoo_rank, :alexa_rank, :page_rank, :urlname
  has_many :histories, :dependent=>:destroy

  validates_presence_of :domainurl, :keyword
  #accepts_nested_attributes_for :histories
  
  def self.search(search)
  		if search
    		where('domainurl LIKE ? OR keyword LIKE ? OR category LIKE ?', "%#{search}%", "%#{search}%", "%#{search}%")
  		else
  			scoped
  		end
	end

  def Domainurl.domainupdatenow(uid)
      Domainurl.find_all_by_user_id(uid).each do |f|
          sleep 1
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit =>100).from_yahoo
          sleep 1
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit =>100).from_bing
          sleep 1
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 7 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit =>100).from_googleUS
          f.save 
        end
      end
end
