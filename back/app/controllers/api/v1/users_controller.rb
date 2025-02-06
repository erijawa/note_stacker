class Api::V1::UsersController < ApplicationController
  def create
    @user = User.find_by(provider: params[:provider], provider_id: params[:provider_id])
    if !@user
      @user = User.create(provider: params[:provider], provider_id: params[:provider_id], name: params[:name])
    end
    if @user
      render json: @user, head :ok
    else
      render json: { error: "ログインに失敗しました" }, status: :unprocessable_entity
    end
    rescue StandardError => e
      render json: { error: e.message }, status: :internal_server_error
    end
  end
end
