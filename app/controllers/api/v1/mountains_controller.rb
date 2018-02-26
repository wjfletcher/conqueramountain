class Api::V1::MountainsController < ApplicationController

  def index
    @conqueredIds = current_user.mountains.pluck(:id)
    @mountains = Mountain.all

    render json: {mountains: @mountains,
                  conqueredIds: @conqueredIds}
  end

  def create

    if !current_user.mountains.exists?(mountain_params['id'])
      @user_mountain = UserMountain.new(user_id: current_user.id, mountain_id: mountain_params['id'])

      if @user_mountain.save
        flash[:notice] = ("Mountain conquered!")
      else
        flash[:notice] = @user_mountain.errors.full_messages.to_sentence
        render :index
      end
    else
      current_user.mountains.delete(mountain_params['id'])
    end
  end

  def mountain_params
    params.require(:mountain).permit(
      :id
    )
  end
end
