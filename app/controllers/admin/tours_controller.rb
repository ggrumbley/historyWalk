class Admin::ToursController < ApplicationController
  layout "admin"

  def index
    @tours = Tour.all
    @tour = Tour.new
  end

  def new
  end

  def show
    @tour = Tour.find(params[:id])

    respond_to do |format|
      format.html
      format.json { render json: @tour }
    end
  end

  def edit
    @tour = Tour.find(params[:id])
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

  def update
    @tour = Tour.find(params[:id])

    respond_to do |format|
      if @tour.update_attributes(tour_params)
        format.html { redirect_to admin_tours_url, notice: 'Tour was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit"}
        format.json { render json: @tour.errors, status: :unprocessable_entity }
      end
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
      params.require(:tour).permit(:title, :cover, :picture)
    end
end
