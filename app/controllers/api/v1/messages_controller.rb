module Api
  module V1
    class MessagesController < Api::V1::ApplicationController
      def index
        @greeting = Message.order('RANDOM()').limit(1)
        render json: @greeting
      end
    end
  end
end
