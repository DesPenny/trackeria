# -*- encoding : utf-8 -*-
class PagesController < ApplicationController
	skip_before_filter :authenticate_user!
	load_resource
end
