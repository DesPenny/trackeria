desc "This task is called by the Heroku scheduler add-on"
require 'keyword_rank'
require 'workless'
require 'delayed_job_active_record'
include Keyword_Rank
#include Domainurl
#include History
task :update_history => :environment do
  Domainurl.delay(queue: "update all", priority:0).update_domainurl_all
  Domainurl.delay(queue: "update all", priority:1).update_history_success
end
task :update_history_failed => :environment do
	Domainurl.delay(queue: "update failed", priority: 2).update_domainurl_failed
  	Domainurl.delay(queue: "update failed", priority:3).update_history_success
end
task :update_history_final => :environment do
	Domainurl.delay(queue: "update final", priority:4).update_domainurl_failed
  	Domainurl.delay(queue: "update final", priority:5).update_history_all
end

# def update_domainurl_all
# 	Domainurl.all.each do |f|
#         if f.googlesource=="USA"
#           f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahoo
#           f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bing
#           f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
#           f.alexa_global=f.alexa_global[:alexa_global] 
#           sleep 7 + rand(2)
#           f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleUS
#           f.refreshedactual=Time.now.utc
#           f.save 
#         end
#         if f.googlesource=="UK"
#           f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooUK
#           f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingUK
#           f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
#           f.alexa_global=f.alexa_global[:alexa_global] 
#           sleep 7 + rand(2)
#           f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_google
#           f.refreshedactual=Time.now.utc
#           f.save 
#         end
#         if f.googlesource=="CA"
#           f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooCA
#           f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingCA
#           f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
#           f.alexa_global=f.alexa_global[:alexa_global] 
#           sleep 7 + rand(2)
#           f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleCA
#           f.refreshedactual=Time.now.utc
#           f.save 
#         end
#         if f.googlesource=="FR"
#           f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooFR
#           f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingFR
#           f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
#           f.alexa_global=f.alexa_global[:alexa_global] 
#           sleep 7 + rand(2)
#           f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleFR
#           f.refreshedactual=Time.now.utc
#           f.save 
#         end
#         if f.googlesource=="AU"
#           f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooAU
#           f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingAU
#           f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
#           f.alexa_global=f.alexa_global[:alexa_global] 
#           sleep 7 + rand(2)
#           f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleAU
#           f.refreshedactual=Time.now.utc
#           f.save 
#         end
#         if f.googlesource=="DE"
#           f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooDE
#           f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingDE
#           f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
#           f.alexa_global=f.alexa_global[:alexa_global] 
#           sleep 7 + rand(2)
#           f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleDE
#           f.refreshedactual=Time.now.utc
#           f.save 
#         end
# 	end
# end


# def update_history_success
# 	Domainurl.all.each do |f|
# 		if f.google_rank != nil
# 			f.histories.create(	 
# 							:urlname=>f.domainurl,
# 							:keyword=>f.keyword, 
# 							:domainurl_id=>f.id,
# 							:category=>f.category,
# 							:google_rank=>f.google_rank,
# 							:bing_rank=>f.bing_rank,
# 							:yahoo_rank=>f.yahoo_rank,
# 							:alexa_global=>f.alexa_global)

# 		end
# 	end
# end

# def update_domainurl_failed
# 	Domainurl.all.each do |f|
# 		if f.google_rank == nil
#         	if f.googlesource=="USA"
#           		f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahoo
#           		f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bing
#           		f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
#           		f.alexa_global=f.alexa_global[:alexa_global] 
#           		sleep 7 + rand(2)
#           		f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleUS
#           		f.refreshedactual=Time.now.utc
#           		f.save 
#         	end
#         	if f.googlesource=="UK"
#           		f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooUK
#           		f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingUK
#           		f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
#           		f.alexa_global=f.alexa_global[:alexa_global] 
#           		sleep 7 + rand(2)
#           		f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_google
#           		f.refreshedactual=Time.now.utc
#           		f.save 
#         	end
#         	if f.googlesource=="CA"
#           		f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooCA
#           		f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingCA
#           		f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
#           		f.alexa_global=f.alexa_global[:alexa_global] 
#           		sleep 7 + rand(2)
#           		f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleCA
#           		f.refreshedactual=Time.now.utc
#           		f.save 
#         	end
#         	if f.googlesource=="FR"
#           		f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooFR
#           		f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingFR
#           		f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
#           		f.alexa_global=f.alexa_global[:alexa_global] 
#           		sleep 7 + rand(2)
#           		f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleFR
#           		f.refreshedactual=Time.now.utc
#           		f.save 
#         	end
#         	if f.googlesource=="AU"
#           		f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooAU
#           		f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingAU
#           		f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
#           		f.alexa_global=f.alexa_global[:alexa_global] 
#           		sleep 7 + rand(2)
#           		f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleAU
#           		f.refreshedactual=Time.now.utc
#           		f.save 
#         	end
#         	if f.googlesource=="DE"
#           		f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_yahooDE
#           		f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_bingDE
#           		f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
#           		f.alexa_global=f.alexa_global[:alexa_global] 
#           		sleep 7 + rand(2)
#           		f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit => 200).from_googleDE
#           		f.refreshedactual=Time.now.utc
#           		f.save 
#         	end
#         end
# 	end
# end

# def update_history_all
# 	Domainurl.all.each do |f|
# 		if f.google_rank != nil
# 			f.histories.create(	 
# 							:urlname=>f.domainurl,
# 							:keyword=>f.keyword, 
# 							:domainurl_id=>f.id,
# 							:category=>f.category,
# 							:google_rank=>f.google_rank,
# 							:bing_rank=>f.bing_rank,
# 							:yahoo_rank=>f.yahoo_rank,
# 							:alexa_global=>f.alexa_global)
# 		end
# 	end
# end