class Api::ResidenciesController < ApplicationController
  before_action :authenticate_token!

  def index
    @residencies = Residency.all

    render json: @residencies.map { |residency| residency.attributes.except('user_id', 'created_at', 'updated_at') }
  end

  def show
    @residency = Residency.find(params[:id])

    render json: @residency.attributes.except('user_id', 'created_at', 'updated_at')
  end

  def create
    @residency = current_user.residencies.build(residency_params)
    if @residency.save
      render json: @residency, status:  :created
    else
      render json: @residency.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @residency = Residency.find(params[:id])

    if @residency.destroy
      @residency.reservations.destroy_all
      @residency.reviews.destroy_all
      render json: { message: 'Residency successfully deleted' }
    else
      render json: @residency.errors, status: :unprocessable_entity
    end
  end

  private

  def residency_params
    params.permit(:name, :image, :description, :location, :price, :category)
  end
end
