class UsersController < ApplicationController
  def new

    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to  links_path
    else
    flash[:errors] = @user.errors.full_messages.join(", ")
    render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
