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
      flash[:error] = 'The url you posted is not valid' # this is currently not working. look into this if possible.
    end
  end

  def update
    respond_with current_user.links.update(params[:id], link_params)
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
