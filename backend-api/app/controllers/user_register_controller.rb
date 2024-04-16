class UserRegisterController < ApplicationController
  skip_before_action :authenticate_token!

  def create
    if user_exists?(sign_up_params[:email])
      render json:  { error: 'email already exists' }, status: :unprocessable_entity
    else
      user = User.new(sign_up_params)
      if user.save
        render json: { user:, token: JsonWebToken.encode({ id: user.id }) }
      else
        render json: { error: 'failed to create user' }, status: :unprocessable_entity
      end
    end
  end

  protected

  def user_exists?(email)
    User.exists?(email:)
  end

  def sign_up_params
    params.require(:user).permit(:name, :email, :password)
  end
end
