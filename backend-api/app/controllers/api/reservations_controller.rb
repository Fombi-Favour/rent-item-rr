class Api::ReservationsController < ApplicationController
  before_action :authenticate_token!

  def index
    @reservations = current_user.reservations.includes(:residency)

    render json: @reservations.map { |reservation| reservation.attributes.except('created_at', 'updated_at') }
  end

  def show
    @reservation = Reservation.find(params[:id])

    render json: @reservation
  end

  def create
    residency = Residency.find(params[:residency_id])

    @reservation = current_user.reservations.build(reservation_params)

    if @reservation.save
      render json: @reservation, include: { residency: { only: %i[name location] } }, status: :created
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    if @reservation.destroy
      render json: { message: 'Reservation deleted successfully' }
    else
      render json: { error: 'Failed to delete reservation' }, status: :unprocessable_entity
    end
  end

  private

  def reservation_params
    params.permit(:check_in_date, :check_out_date, :guest_number, :residency_id, destination_attributes: %i[name location])
  end
end