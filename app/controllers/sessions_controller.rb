class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in!(@user)
      render :json => @user
    else
      render :json => ["YOU MESSED UP FOOL"], :status => :unprocessable_entity
    end
  end

  def destroy
    logout_current_user!
    head :ok
  end
end
