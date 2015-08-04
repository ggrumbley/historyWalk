class Admin::ToursController < ApplicationController
  layout "admin"

  def index
    @tours = Tour.all
  end
end
