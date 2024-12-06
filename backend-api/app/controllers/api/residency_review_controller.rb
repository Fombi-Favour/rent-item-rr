class Api::ResidencyReviewController < ApplicationController
  before_action :authenticate_token!
  before_action :set_residency, only: [:show, :create]

  def show
    residency_review = @residency.residency_reviews.includes(:user)

    total_reviews = residency_review.count
    average_rating = residency_review.average(:rating).to_f.round(1)

    # group ratings
    rating_distribution = residency_review.group(:rating).count.transform_keys(&:to_i).sort.to_h
    # prepare reviews with user details
    residency_review_details = residency_review.map do |review|
      {
        id: review.id,
        rating: review.rating,
        content: review.content,
        user_name: review.user.name,
        created_at: review.created_at,
      }
    end

    render json: {
      total_reviews: total_reviews,
      average_rating: average_rating,
      rating_distribution: rating_distribution,
      residency_review: residency_review_details,
    }, status: :ok
  end

  def create
    residency_review = @residency.residency_reviews.build(residency_review_params)
    residency_review.user = current_user

    if residency_review.save
      render json: {
        message: "Residency Review successfully created",
        review: {
          id: residency_review.id,
          rating: residency_review.rating,
          content: residency_review.content,
        }
      }, status: :created
    else
      render json: {
        errors: residency_review.errors.full_messages,
      }, status: :unprocessable_entity
    end
  end

  private

  def set_residency
    @residency = Residency.find(params[:residency_id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Residency not found' }, status: :not_found
  end

  def residency_review_params
    params.require(:residency_review).permit(:rating, :content)
  end
end