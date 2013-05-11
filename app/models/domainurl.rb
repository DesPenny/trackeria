# == Schema Information
#
# Table name: domainurls
#
#  id              :integer          not null, primary key
#  user_id         :integer
#  domainurl       :string(255)
#  keyword         :string(255)
#  category        :string(255)
#  google_rank     :integer
#  bing_rank       :integer
#  yahoo_rank      :integer
#  page_rank       :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  alexa_global    :string(255)
#  urlname         :string(255)
#  googlesource    :string(255)
#  refreshed       :datetime
#  refreshedactual :datetime
#

class Domainurl < ActiveRecord::Base
  include Keyword_Rankr
  belongs_to :user
  attr_accessible :category, :domainurl, :keyword, :user_id, :google_rank, :bing_rank, :yahoo_rank, :alexa_rank, :page_rank, :urlname, :googlesource
  has_many :histories, :dependent=>:destroy

  validates_presence_of :domainurl, :keyword, :googlesource
  #accepts_nested_attributes_for :histories
  
  def self.search(search)
  		if search
    		where('domainurl LIKE ? OR keyword LIKE ? OR category LIKE ?', "%#{search}%", "%#{search}%", "%#{search}%")
  		else
  			scoped
  		end
	end



  def self.to_csv
    CSV.generate do |csv|
      csv<<column_names #be more specific here
      all.each do |f|
        csv<<f.attributes.values_at(*column_names)
      end
    end
  end

  def Domainurl.domainupdatenow(uid)
      Domainurl.find_all_by_user_id(uid).each do |f|
        if f.googlesource=="USA"
          sleep 1
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahoo
          sleep 1
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bing
          sleep 1
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 7 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleUS
          f.refreshedactual=Time.now.utc
          f.save 
        end
        if f.googlesource=="UK"
          sleep 1
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooUK
          sleep 1
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingUK
          sleep 1
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 7 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_google
          f.refreshedactual=Time.now.utc
          f.save 
        end
        if f.googlesource=="CA"
          sleep 1
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooCA
          sleep 1
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingCA
          sleep 1
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 7 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleCA
          f.refreshedactual=Time.now.utc
          f.save 
        end
        if f.googlesource=="FR"
          sleep 1
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooFR
          sleep 1
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingFR
          sleep 1
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 7 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleFR
          f.refreshedactual=Time.now.utc
          f.save 
        end
        if f.googlesource=="AU"
          sleep 1
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooAU
          sleep 1
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingAU
          sleep 1
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 7 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleAU
          f.refreshedactual=Time.now.utc
          f.save 
        end
        if f.googlesource=="DE"
          sleep 1
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooDE
          sleep 1
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingDE
          sleep 1
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 7 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleDE
          f.refreshedactual=Time.now.utc
          f.save 
        end
      end
  end
end
