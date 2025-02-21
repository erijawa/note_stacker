class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: %i[update destroy]

  def create
    @post = Post.new(post_params.except(:categories)) # categoriesを除外して保存
    sent_category = post_params[:categories] || []
    if @post.save && @post.save_category(sent_category, params[:user_id])
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    sent_category = post_params[:categories] || []
    if @post.update(post_params.except(:categories)) && @post.save_category(sent_category, params[:user_id])
      render json: @post, status: :ok
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    render json: { message: '投稿が削除されました' }, status: :ok
  end

  private
  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:comment, :url, categories: []).merge(user_id: params[:user_id])
  end
end
