module Api
  module V1
    class ApplicationController < ActionController::API
      respond_to? :json
    end
  end
end
