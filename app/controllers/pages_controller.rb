class PagesController < ApplicationController
	skip_before_filter :authenticate_user!
	load_and_authorize_resource
end