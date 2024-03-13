Rails.application.routes.draw do

  post 'sign_up', to: 'api/v1/users#sign_up'
  post 'login', to: 'api/v1/users#login'

  namespace :api do
    namespace :v1 do
      resources :users do
        resources :bookings
      end
      resources :residencies
      resources :reviews
    end
  end
end
