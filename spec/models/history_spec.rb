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

require 'spec_helper'

describe History do
  pending "add some examples to (or delete) #{__FILE__}"
end
