class Api::V1::ReviewsController < ApplicationController
  before_action :set_user, only: [:create]
  before_action :set_residency, only: %i[create update destroy]

  def index
    user = User.find(params[:user_id])
    @reviews = user.reviews.includes(:review).order(created_at: :desc)
    render json: @reviews, include: :review ,status: :ok
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Reviews not found' }, status: :not_found
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: {
        status: { code: 200, message: 'Review created successfully', data: @booking }
      }, status: :ok
    else
      render json: {
        status: { code: 400, message: 'Failed to create review', errors: @booking.errors.full_messages }
      }, status: :bad_request
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render json: {
        status: { code: 200, message: 'Review updated successfully', data: @booking }
      }, status: :ok
    else
      render json: {
        status: { code: 400, message: 'Failed to update review', errors: @booking.errors.full_messages }
      }, status: :bad_request
    end
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :residency_id, :rating, :comment_text)
  end

  def set_user
    @user = User.find_by(id: booking_params[:user_id])
    render json: { error: 'User not found' }, status: :not_found if @user.nil?
  end

  def set_residency
    @residency = Residency.find_by(id: booking_params[:residency_id])
    return unless @residency.nil?

    render json: { error: 'Residence not found' }, status: :not_found
  end
end
