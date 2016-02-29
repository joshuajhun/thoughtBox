class ApplicationController < ActionController::Base
  require 'uri'
  helper_method :current_user, :valid
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  def valid(url)
    uri = URI.parse(url)
    uri.kind_of?(URI::HTTP)
  rescue URI::InvalidURIError
    false
  end

  def current_user
    @user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
