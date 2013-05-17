# -*- encoding : utf-8 -*-
require "spec_helper"

describe DomainurlsController do
  describe "routing" do

    it "routes to #index" do
      get("/domainurls").should route_to("domainurls#index")
    end

    it "routes to #new" do
      get("/domainurls/new").should route_to("domainurls#new")
    end

    it "routes to #show" do
      get("/domainurls/1").should route_to("domainurls#show", :id => "1")
    end

    it "routes to #edit" do
      get("/domainurls/1/edit").should route_to("domainurls#edit", :id => "1")
    end

    it "routes to #create" do
      post("/domainurls").should route_to("domainurls#create")
    end

    it "routes to #update" do
      put("/domainurls/1").should route_to("domainurls#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/domainurls/1").should route_to("domainurls#destroy", :id => "1")
    end

  end
end
