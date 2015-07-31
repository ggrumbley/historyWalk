Rails.application.routes.draw do
  root to: 'application#angular'

  resources :tours, defaults: {format: 'json'}, only: [:index, :show] do
    resources :exhibits, defaults: {format: 'json'}, only: [:index, :show]
  end

  namespace :admin do
    resources :tours, :exhibits
  end

  get '*path' => 'application#angular'
end
