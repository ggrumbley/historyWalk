Rails.application.routes.draw do

  resources :exhibits
  resources :tours, defaults: {format: 'json'}
  root 'application#angular'
  get '*path' => 'application#angular'

end
