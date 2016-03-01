class LinksController < ApplicationController
  before_action :require_authenticated_user
  def require_authenticated_user
    redirect_to login_path flash[:login] ="Must Login" unless current_user
  end
  def index
  end
end
