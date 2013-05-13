desc "This task is called by the Heroku scheduler add-on"
require 'keyword_rank'
require 'workless'
require 'delayed_job_active_record'
require 'daemons'
include Keyword_Rank
#include Domainurl
#include History
task :update_history => :environment do
  Domainurl.delay.update_domainurl_all
end
task :update_history_failed => :environment do
	Domainurl.delay.update_domainurl_failed
end
task :update_history_final => :environment do
	Domainurl.delay(queue: "update final", priority:4).update_domainurl_final
end

