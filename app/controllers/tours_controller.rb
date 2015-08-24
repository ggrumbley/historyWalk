class ToursController < ApplicationController
  respond_to :json

  def index
    respond_with Tour.all
  end

  def show
    respond_with Tour.find(params[:id])
  end

  def create
    respond_with Tour.create(params[:tour])
  end

  def update
    respond_with Tour.update(params[:id], params[:tour])
  end

  def destroy
    respond_with Tour.destroy(params[:id])
  end

  private
  def post_params
    params.require(:tour).permit(:link, :title, :picture)
  end
end
