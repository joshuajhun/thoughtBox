Rails.application.routes.draw do
  root to: "home_screen#login"
  resources:users, only:[:new, :create, :show]

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources:links, only:[:index]

  namespace :api do
    namespace :v1 do
      resources :links, defaults: {format: :json} do
      end
    end
  end
end
