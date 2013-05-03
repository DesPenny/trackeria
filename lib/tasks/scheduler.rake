desc "This task is called by the Heroku scheduler add-on"
task :update_history => :environment do
  update_history
end

def update_history
	Domainurl.all.each do |f|
		f.histories.create(	 
							:keyword=>f.keyword, 
							:urlname=>f.urlname,
							:category=>f.category,
							:google_rank=>f.google_rank,
							:bing_rank=>f.bing_rank,
							:yahoo_rank=>f.yahoo_rank,
							:alexa_global=>f.alexa_global)
	end
end