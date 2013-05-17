# -*- encoding : utf-8 -*-
require 'spec_helper'

describe "domainurls/show" do
  before(:each) do
    @domainurl = assign(:domainurl, stub_model(Domainurl,
      :user_id => 1,
      :domainurl => "Domainurl",
      :keyword => "Keyword",
      :category => "Category",
      :google_rank => 2,
      :bing_rank => 3,
      :yahoo_rank => 4,
      :alexa_rank => 5,
      :page_rank => 6,
      :user => nil
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
    rendered.should match(/Domainurl/)
    rendered.should match(/Keyword/)
    rendered.should match(/Category/)
    rendered.should match(/2/)
    rendered.should match(/3/)
    rendered.should match(/4/)
    rendered.should match(/5/)
    rendered.should match(/6/)
    rendered.should match(//)
  end
end
