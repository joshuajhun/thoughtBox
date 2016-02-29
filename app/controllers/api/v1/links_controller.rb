class Api::V1::LinksController < ApplicationController
  respond_to :json
  def index
    respond_with current_user.links
  end

  def create
    if valid(params['url'])
      respond_with current_user.links.create(link_params), location: nil
    else
      flash[:error] = 'The url you inserted is not valid'
    end
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
