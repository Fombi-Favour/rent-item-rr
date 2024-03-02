class Api::V1::ResidenciesController < ApplicationController
  before_action :set_residency, only: %i[show update destroy]

  def index
    @residencies = Residency.all
    render json: @residencies
  end

  def create
    @residency = Residency.new(residency_params)
    if @residency.save
      render json: @residency, status: :created
    else
      render json: @residency.errors, status: :unprocessable_entity
    end
  end

  def update
    if @residency.update(residency_params)
      render json: @residency
    else
      render json: @residency.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @residency.destroy
    head :no_content
  end

  private

  def set_residency
    @residency = Residency.find(params[:id])
  end

  def residency_params
    params.require(:residency).permit(:name, :location, :category, :description, :price)
  end
end
