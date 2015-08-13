class Admin::ToursController < ApplicationController
  layout "admin"

  def index
    @tours = Tour.all
    @tour = Tour.new
  end

  def new
  end

  def show
  end

  def create
    @tour = Tour.new(tour_params)
    if @tour.save
      redirect_to admin_tours_path
    else
      @tours = Tour.all
      render action: 'index'
    end
  end

  private

    def set_tour
      @tour = Tour.find(params[:id])
    end

    def tour_params
      params.require(:tour).permit(:title, :cover)
    end
end
