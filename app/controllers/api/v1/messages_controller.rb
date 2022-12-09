class Api::V1::MessagesController < Api::V1::ApplicationController
    def index
      @greeting = Message.order('RANDOM()').limit(1)
      render json: @greeting
    end
  end