require 'spec_helper'

describe "domainurls/index" do
  before(:each) do
    assign(:domainurls, [
      stub_model(Domainurl,
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
      ),
      stub_model(Domainurl,
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
      )
    ])
  end

  it "renders a list of domainurls" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Domainurl".to_s, :count => 2
    assert_select "tr>td", :text => "Keyword".to_s, :count => 2
    assert_select "tr>td", :text => "Category".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => 4.to_s, :count => 2
    assert_select "tr>td", :text => 5.to_s, :count => 2
    assert_select "tr>td", :text => 6.to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
  end
end
