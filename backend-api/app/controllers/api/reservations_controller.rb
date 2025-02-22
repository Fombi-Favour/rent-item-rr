class Api::ReservationsController < ApplicationController
  before_action :authenticate_token!
  before_action :set_reservation, only: %i[show update destroy]

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

    @reservation.total_price = residency.price * @reservation.guest_number

    if @reservation.save
      render json: @reservation, include: { residency: { only: %i[name location price] } }, status: :created
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  def update
    residency = @reservation.residency

    if reservation_params[:guest_number].present?
      # recalculate the total price based on the new guest_number
      @reservation.total_price = residency.price * reservation_params[:guest_number].to_i
    end

    if @reservation.update(reservation_params)
      render json: @reservation, include: { residency: { only: %i[name location price] } }
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

  def set_reservation
    @reservation = current_user.reservations.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Reservation not found' }, status: :not_found
  end

  def reservation_params
    params.permit(:check_in_date, :check_out_date, :guest_number, :residency_id,
                  destination_attributes: %i[name location])
  end
end
