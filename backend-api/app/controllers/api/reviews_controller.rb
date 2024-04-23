class Api::ReviewsController < ApplicationController
  before_action :authenticate_token!

  def index
    @reviews = current_user.reviews.includes(:residency)

    render json: @reviews.map { |review| review.attributes.except('created_at', 'updated_at') }
  end

  def create
    residency = Residency.find(params[:residency_id])

    @review = current_user.reviews.build(reviews_params)

    if @review.save
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  private

  def reviews_params
    params.permit(:rating, :comment_text, :residency_id)
  end
end