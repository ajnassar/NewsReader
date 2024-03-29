class UsersController < ApplicationController
  def create
    @user = User.new(params[:user])
    if @user.save
      log_in!(@user)
      render :json => @user
    else
      render :json => @user.errors.full_messages, :status => :unprocessable_entity
    end
  end
end
