class Api::V1::CategoriesController < ApplicationController
  def index
    @categories = Category.where(user_id: params[:user_id])
    render json: @categories, status: :ok
  end
end
