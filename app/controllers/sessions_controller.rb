class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(username: params[:session][:username])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to links_path
    else
      flash[:error] = 'the username or password you provided is incorrect'
      render :new
    end
  end

  def destroy
    session.clear
    binding.pry
    flash.now[:logout] = 'You have logged out'
    redirect_to root_path
  end
end
