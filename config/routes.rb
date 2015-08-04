Rails.application.routes.draw do
  namespace :admin do
  get 'tours/index'
  end

  root to: 'application#angular'

  resources :tours, defaults: {format: 'json'} do
    resources :exhibits, defaults: {format: 'json'}
  end

  get '*path' => 'application#angular'
end
