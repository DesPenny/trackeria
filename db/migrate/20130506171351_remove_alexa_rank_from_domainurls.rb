# -*- encoding : utf-8 -*-
class RemoveAlexaRankFromDomainurls < ActiveRecord::Migration
  def up
    remove_column :domainurls, :alexa_rank
  end

  def down
    add_column :domainurls, :alexa_rank, :integer
  end
end
