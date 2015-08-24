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

  def destroy
    @tour = Tour.find(params[:id])
    @tour.destroy

    respond_to do |format|
      format.html { redirect_to admin_tours_path }
      format.json { head :no_content }
    end
  end
  private

    def tour_params
      params.require(:tour).permit(:title, :cover)
    end
end
