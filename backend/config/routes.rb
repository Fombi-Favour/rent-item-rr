Rails.application.routes.draw do
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
