# -*- encoding : utf-8 -*-
require 'spec_helper'

describe "domainurls/edit" do
  before(:each) do
    @domainurl = assign(:domainurl, stub_model(Domainurl,
      :user_id => 1,
      :domainurl => "MyString",
      :keyword => "MyString",
      :category => "MyString",
      :google_rank => 1,
      :bing_rank => 1,
      :yahoo_rank => 1,
      :alexa_rank => 1,
      :page_rank => 1,
      :user => nil
    ))
  end

  it "renders the edit domainurl form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", domainurl_path(@domainurl), "post" do
      assert_select "input#domainurl_user_id[name=?]", "domainurl[user_id]"
      assert_select "input#domainurl_domainurl[name=?]", "domainurl[domainurl]"
      assert_select "input#domainurl_keyword[name=?]", "domainurl[keyword]"
      assert_select "input#domainurl_category[name=?]", "domainurl[category]"
      assert_select "input#domainurl_google_rank[name=?]", "domainurl[google_rank]"
      assert_select "input#domainurl_bing_rank[name=?]", "domainurl[bing_rank]"
      assert_select "input#domainurl_yahoo_rank[name=?]", "domainurl[yahoo_rank]"
      assert_select "input#domainurl_alexa_rank[name=?]", "domainurl[alexa_rank]"
      assert_select "input#domainurl_page_rank[name=?]", "domainurl[page_rank]"
      assert_select "input#domainurl_user[name=?]", "domainurl[user]"
    end
  end
end
