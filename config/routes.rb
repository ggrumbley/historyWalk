Rails.application.routes.draw do
  namespace :admin do
    resources :tours, only: [:index, :create, :edit, :destroy]
  end

  root to: 'application#angular'

  resources :tours,
            defaults: {format: 'json'},
            only: [:index, :show] do
    resources :exhibits,
              defaults: {format: 'json'},
              only: [:index, :show]
  end

  get '*path' => 'application#angular'
end
