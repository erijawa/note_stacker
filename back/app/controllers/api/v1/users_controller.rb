class Api::V1::UsersController < ApplicationController
  def show
    posts = Post.includes(:categories).where(user_id: params[:id]).order(updated_at: :desc)
    posts_with_categories = posts.map do |post|
      PostSerializer.new(post)
    end
    render json: posts_with_categories, status: :ok
  end

  def create
    begin
      @user = User.find_by(provider: params.dig(:user, :provider), provider_id: params.dig(:user, :providerId))
      if !@user
        @user = User.create(provider: params.dig(:user, :provider), provider_id: params.dig(:user, :providerId), name: params.dig(:user, :name))
      end
      if @user
        render json: @user, status: :ok
      else
        render json: { error: "ログインに失敗しました" }, status: :unprocessable_entity
      end
    rescue StandardError => e
      render json: { error: e.message }, status: :internal_server_error
    end
  end

  def user_params
    params.require(:user).permit(:provider, :providerId, :name)
  end
end
