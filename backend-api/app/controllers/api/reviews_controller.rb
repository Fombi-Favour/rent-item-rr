class Api::ReviewsController < ApplicationController
  before_action :authenticate_token!

  private

  def reviews_params
    params.permit(:rating, :comment_text)
  end
end