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
      flash[:success] = "Tour created!"
      redirect_to admin_tours_path
    else
      flash[:danger] = "Tour not created!"
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
