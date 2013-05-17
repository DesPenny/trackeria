# -*- encoding : utf-8 -*-
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
#  urlname      :string(255)
#

class History < ActiveRecord::Base
  attr_accessible :alexa_global, :bing_rank, :category, :domainurl, :domainurl_id, :google_rank, :keyword, :page_rank, :yahoo_rank, :urlname

  belongs_to :domainurl, :foreign_key=>"domainurl_id"
  
  default_scope :order=>'histories.created_at DESC'


  def self.to_csv(all_histories)
    CSV.generate(:col_sep => "," ) do |csv|
      csv << [ 'urlname', 'keyword', 'category', 'google_rank', 'bing_rank', 'yahoo_rank', 'alexa_global', 'updated_at']
      all_histories.each do |f|
        csv << [ "#{f.urlname}", "#{f.keyword}", f.category, f.google_rank, f.bing_rank, f.yahoo_rank, f.alexa_global, f.updated_at]
      end
    end
  end

  
end
