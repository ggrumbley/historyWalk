class Admin::ExhibitsController < ApplicationController
  layout "admin"

  def index
    @exhibits = Exhibits.all
  end
end
