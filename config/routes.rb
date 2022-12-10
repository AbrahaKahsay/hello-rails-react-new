# frozen_string_literal: true

Rails.application.routes.draw do
  root 'root#index'
  get 'root/index'
  # API routes
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :messages, only: [:index]
    end
  end
end
