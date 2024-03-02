class Api::V1::UsersController < ApplicationController
  def signup
    @user = User.find_or_initialize_by(name: user_params[:name])

    if @user.save
      render json: {
        status: { code: 200, message: 'signed up successfully', data: @user }
      }, status: :ok
    else
      render json: { error: @user.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end

  def sign_in
    @user = User.find_by(name: user_params[:name])

    if @user
      render json: {
        status: { code: 200, message: 'signed in successfully', data: @user }
      }, status: :ok
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end
end
