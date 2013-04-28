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

require 'spec_helper'

describe Domainurl do
  pending "add some examples to (or delete) #{__FILE__}"
end
