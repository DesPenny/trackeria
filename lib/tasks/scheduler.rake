desc "This task is called by the Heroku scheduler add-on"
task :update_history => :environment do
  update_domainurl
  update_history
end

def update_domainurl
	Domainurl.all.each do |f|
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

def update_history
	Domainurl.all.each do |f|
		f.histories.create(	 
							:keyword=>f.keyword, 
							:domainurl_id=>f.id,
							:category=>f.category,
							:google_rank=>f.google_rank,
							:bing_rank=>f.bing_rank,
							:yahoo_rank=>f.yahoo_rank,
							:alexa_global=>f.alexa_global)
	end
end