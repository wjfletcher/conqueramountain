Rails.application.routes.draw do
  devise_for :users
  root "home#index"

  namespace :api do
    namespace :v1 do
      resources :mountains, only: [:index, :create]
    end
  end
end
