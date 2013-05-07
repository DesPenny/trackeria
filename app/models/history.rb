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

  def self.chart_data(start = 3.weeks.ago)
  total_prices = prices_by_day(start)
  shipping_prices = where(shipping: true).prices_by_day(start)
  download_prices = where(shipping: false).prices_by_day(start)
  (start.to_date..Date.today).map do |date|
    {
      purchased_at: date,
      price: total_prices[date] || 0,
      shipping_price: shipping_prices[date] || 0,
      download_price: download_prices[date] || 0
    }
  end
end
end
