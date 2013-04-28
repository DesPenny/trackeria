# == Schema Information
#
# Table name: domainurls
#
#  id          :integer          not null, primary key
#  user_id     :integer
#  domainurl   :string(255)
#  keyword     :string(255)
#  category    :string(255)
#  google_rank :integer
#  bing_rank   :integer
#  yahoo_rank  :integer
#  alexa_rank  :integer
#  page_rank   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Domainurl < ActiveRecord::Base
  belongs_to :user
  attr_accessible :category, :domainurl, :keyword, :user_id

  validates_presence_of :domainurl, :keyword

  def self.search(search)
  		if search
    		where('domainurl LIKE ? OR keyword LIKE ? OR category LIKE ?', "%#{search}%", "%#{search}%", "%#{search}%")
  		else
  			scoped
  		end
	end
end
