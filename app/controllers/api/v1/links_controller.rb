class Api::V1::LinksController < ApplicationController
  respond_to :json
  def index
    respond_with current_user.links
  end

  def show
    respond_with current_user.links.find_by(id: params[:id])
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
    respond_with Link.destroy(params[:id])
  end

  private
  def link_params
    params[:status] = params[:status].to_i
    params.permit(:title,:url, :status)
  end
end
