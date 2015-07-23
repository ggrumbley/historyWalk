class ExhibitsController < ApplicationController
  respond_to :json

  def index
    respond_with Exhibit.where(tour: params[:tour_id])
  end

  def show
    respond_with Exhibit.find(params[:id])
  end

  def create
    respond_with Exhibit.create(params[:exhibit])
  end

  def update
    respond_with Exhibit.update(params[:id], params[:exhibit])
  end

  def destroy
    respond_with Exhibit.destroy(params[:id])
  end
end
