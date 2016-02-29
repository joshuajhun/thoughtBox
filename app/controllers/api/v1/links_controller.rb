class Api::V1::LinksController < ApplicationController
  respond_to :json
  @user = current_user
  def index
    respond_with @current_user.links
  end

  def create
    respond_with Link.create(link_params), location: nil
  end

  def update
  end

  def destroy
  end

  private
  def link_params
    params[:status] = params[:status].to_i
    params.permit(:title,:url, :status)
  end
end
