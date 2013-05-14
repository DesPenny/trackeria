AdminData.config do |config|
  config.is_allowed_to_view = lambda {|controller| controller.send('user_signed_in?') }
  config.is_allowed_to_update = lambda {|controller| controller.send('current_user.admin?') }
  config.feed_authentication_user_id = 'trackeria'
  config.feed_authentication_password = '000751891'
end