class Api::V1::BookingsController < ApplicationController
  before_action :set_user, only: [:create]
  before_action :set_residency, only: %i[create update destroy]

  def index
    user = User.find(params[:user_id])
    @bookings = user.bookings.includes(:residency).order(created_at: :desc)
    render json: @bookings, include: :residency, status: :ok
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Bookings not found' }, status: :not_found
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render json: {
        status: { code: 200, message: 'Booking created successfully', data: @booking }
      }, status: :ok
    else
      render json: {
        status: { code: 400, message: 'Failed to create booking', errors: @booking.errors.full_messages }
      }, status: :bad_request
    end
  end

  def update
    @booking = Booking.find(params[:id])

    if @booking.update(booking_params)
      render json: {
        status: { code: 200, message: 'Booking updated successfully', data: @booking }
      }, status: :ok
    else
      render json: {
        status: { code: 400, message: 'Failed to update booking', errors: @booking.errors.full_messages }
      }, status: :bad_request
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    head :no_content
  end

  private

  def booking_params
    params.require(:booking).permit(:user_id, :residency_id, :check_in_date, :check_out_date, :guest_num)
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
