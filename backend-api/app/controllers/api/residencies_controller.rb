class Api::ResidenciesController < ApplicationController
  before_action :authenticate_token!, only: %i[index show create destroy]

  def index
    @residencies = Residency.all
    residencies_data = @residencies.map do |residency|
      {
        id: residency.id,
        name: residency.name,
        image: residency.image,
        description: residency.description,
        location: residency.location,
        price: residency.price,
        category: residency.category
      }
    end

    if @residencies.present?
      render json: { data: residencies_data, message: 'Residencies lists' }, status: :ok
    else
      render json: { error: 'No residencies found' }, status: :not_found
    end
  end

  def create
    @residency = Residency.new(residency_params)
    if @residency.save
      render json: { data: @residency, message: 'residency created successfully' }, status:  :created
    else
      render json: @residency.errors, status: :unprocessable_entity
    end
  end

  private

  def residency_params
    params.require(:residency).permit(:name, :image, :description, :location, :price, :category)
  end
end
