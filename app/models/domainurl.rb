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
#  updatecount     :integer
#

class Domainurl < ActiveRecord::Base
  include Keyword_Rank
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
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahoo
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bing
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 3 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleUS
          f.refreshedactual=Time.now.utc
          f.save 
        end
        if f.googlesource=="UK"
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooUK
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingUK
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 3 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_google
          f.refreshedactual=Time.now.utc
          f.save 
        end
        if f.googlesource=="CA"
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooCA
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingCA
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 3 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleCA
          f.refreshedactual=Time.now.utc
          f.save 
        end
        if f.googlesource=="FR"
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooFR
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingFR
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 3 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleFR
          f.refreshedactual=Time.now.utc
          f.save 
        end
        if f.googlesource=="AU"
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooAU
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingAU
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 3 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleAU
          f.refreshedactual=Time.now.utc
          f.save 
        end
        if f.googlesource=="DE"
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooDE
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingDE
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 3 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleDE
          f.refreshedactual=Time.now.utc
          f.save 
        end
      end
  end

  def Domainurl.update_domainurl_all
    Domainurl.all.each do |f|
        if f.googlesource=="USA"
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahoo
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bing
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 3 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleUS
          f.refreshedactual=Time.now.utc
          f.updatecount=1
          f.save 
        end
        if f.googlesource=="UK"
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooUK
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingUK
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 3 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_google
          f.refreshedactual=Time.now.utc
          f.updatecount=1
          f.save 
        end
        if f.googlesource=="CA"
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooCA
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingCA
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 3 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleCA
          f.refreshedactual=Time.now.utc
          f.updatecount=1
          f.save 
        end
        if f.googlesource=="FR"
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooFR
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingFR
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 3 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleFR
          f.refreshedactual=Time.now.utc
          f.updatecount=1
          f.save 
        end
        if f.googlesource=="AU"
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooAU
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingAU
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 3 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleAU
          f.refreshedactual=Time.now.utc
          f.updatecount=1
          f.save 
        end
        if f.googlesource=="DE"
          f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooDE
          f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingDE
          f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
          f.alexa_global=f.alexa_global[:alexa_global] 
          sleep 3 + rand(2)
          f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleDE
          f.refreshedactual=Time.now.utc
          f.updatecount=1
          f.save 
        end
      if f.google_rank != nil
        f.updatecount=0
        f.save
        f.histories.create(  
              :urlname=>f.domainurl,
              :keyword=>f.keyword, 
              :domainurl_id=>f.id,
              :category=>f.category,
              :google_rank=>f.google_rank,
              :bing_rank=>f.bing_rank,
              :yahoo_rank=>f.yahoo_rank,
              :alexa_global=>f.alexa_global)
      end
    end
  end

  def Domainurl.update_domainurl_failed
    Domainurl.all.each do |f|
      if f.updatecount!='1'
          if f.googlesource=="USA"
              f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahoo
              f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bing
              f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
              f.alexa_global=f.alexa_global[:alexa_global] 
              sleep 3 + rand(2)
              f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleUS
              f.refreshedactual=Time.now.utc
              f.updatecount=1
              f.save 
          end
          if f.googlesource=="UK"
              f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooUK
              f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingUK
              f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
              f.alexa_global=f.alexa_global[:alexa_global] 
              sleep 3 + rand(2)
              f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_google
              f.refreshedactual=Time.now.utc
              f.updatecount=1
              f.save 
          end
          if f.googlesource=="CA"
              f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooCA
              f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingCA
              f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
              f.alexa_global=f.alexa_global[:alexa_global] 
              sleep 3 + rand(2)
              f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleCA
              f.refreshedactual=Time.now.utc
              f.updatecount=1
              f.save 
          end
          if f.googlesource=="FR"
              f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooFR
              f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingFR
              f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
              f.alexa_global=f.alexa_global[:alexa_global] 
              sleep 3 + rand(2)
              f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleFR
              f.refreshedactual=Time.now.utc
              f.updatecount=1
              f.save 
          end
          if f.googlesource=="AU"
              f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooAU
              f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingAU
              f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
              f.alexa_global=f.alexa_global[:alexa_global] 
              sleep 3 + rand(2)
              f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleAU
              f.refreshedactual=Time.now.utc
              f.updatecount=1
              f.save 
          end
          if f.googlesource=="DE"
              f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooDE
              f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingDE
              f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
              f.alexa_global=f.alexa_global[:alexa_global] 
              sleep 3 + rand(2)
              f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleDE
              f.refreshedactual=Time.now.utc
              f.updatecount=1
              f.save 
          end
        end
      if f.google_rank != nil && f.updatecount=='1'
        f.updatecount=0
        f.save
        f.histories.create(  
              :urlname=>f.domainurl,
              :keyword=>f.keyword, 
              :domainurl_id=>f.id,
              :category=>f.category,
              :google_rank=>f.google_rank,
              :bing_rank=>f.bing_rank,
              :yahoo_rank=>f.yahoo_rank,
              :alexa_global=>f.alexa_global)
      end
    end
  end

  def Domainurl.update_domainurl_final
    Domainurl.all.each do |f|
      if f.updatecount!='0'
          if f.googlesource=="USA"
              f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahoo
              f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bing
              f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
              f.alexa_global=f.alexa_global[:alexa_global] 
              sleep 3 + rand(2)
              f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleUS
              f.refreshedactual=Time.now.utc
              f.updatecount=1
              f.save 
          end
          if f.googlesource=="UK"
              f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooUK
              f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingUK
              f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
              f.alexa_global=f.alexa_global[:alexa_global] 
              sleep 3 + rand(2)
              f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_google
              f.refreshedactual=Time.now.utc
              f.updatecount=1
              f.save 
          end
          if f.googlesource=="CA"
              f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooCA
              f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingCA
              f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
              f.alexa_global=f.alexa_global[:alexa_global] 
              sleep 3 + rand(2)
              f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleCA
              f.refreshedactual=Time.now.utc
              f.updatecount=1
              f.save 
          end
          if f.googlesource=="FR"
              f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooFR
              f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingFR
              f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
              f.alexa_global=f.alexa_global[:alexa_global] 
              sleep 3 + rand(2)
              f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleFR
              f.refreshedactual=Time.now.utc
              f.updatecount=1
              f.save 
          end
          if f.googlesource=="AU"
              f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooAU
              f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingAU
              f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
              f.alexa_global=f.alexa_global[:alexa_global] 
              sleep 3 + rand(2)
              f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleAU
              f.refreshedactual=Time.now.utc
              f.updatecount=1
              f.save 
          end
          if f.googlesource=="DE"
              f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooDE
              f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingDE
              f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
              f.alexa_global=f.alexa_global[:alexa_global] 
              sleep 3 + rand(2)
              f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleDE
              f.refreshedactual=Time.now.utc
              f.updatecount=1
              f.save 
          end
        end
      if f.updatecount=='1'
        f.updatecount=0
        f.save
        f.histories.create(  
              :urlname=>f.domainurl,
              :keyword=>f.keyword, 
              :domainurl_id=>f.id,
              :category=>f.category,
              :google_rank=>f.google_rank,
              :bing_rank=>f.bing_rank,
              :yahoo_rank=>f.yahoo_rank,
              :alexa_global=>f.alexa_global)
      end
    end
  end
end
