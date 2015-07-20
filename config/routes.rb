Rails.application.routes.draw do
  root to: 'application#angular'

  resources :exhibits, defaults: {format: 'json'}
  resources :tours, defaults: {format: 'json'}
  get '*path' => 'application#angular'

end
