class Api::V1::MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
    render json: {mountains: @mountains}
  end
end
