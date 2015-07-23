Rails.application.routes.draw do
  root to: 'application#angular'

  resources :tours, defaults: {format: 'json'} do
    resources :exhibits, defaults: {format: 'json'}
  end

  get '*path' => 'application#angular'
end
