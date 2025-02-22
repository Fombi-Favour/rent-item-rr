class Api::ReviewsController < ApplicationController
  before_action :authenticate_token!

  def index
    @reviews = Review.includes(:user).all

    render json: @reviews.map { |review| review.attributes.except('created_at', 'updated_at').merge(
      user_name: review.user.name,
      user_image_url: review.user.image_url
    )}
  end

  def create
    @review = current_user.reviews.build(reviews_params)
    user = current_user

    if @review.save
      render json: @review, include: { user: { only: %i[name image_url] } }
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  private

  def reviews_params
    params.permit(:rating, :comment_text)
  end
end
