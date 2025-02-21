class PostSerializer
  include ActiveModel::Serializers::JSON

  attr_accessor :id, :url, :comment, :user_id, :categories

  def initialize(post)
    @id = post.id
    @url = post.url
    @comment = post.comment
    @user_id = post.user_id
    @categories = post.categories
  end

  # 返却したい属性を定義
  def attributes
    {'id' => nil, 'url' => nil, 'comment' => nil, 'user_id' => nil, 'categories' => nil}
  end

  # 関連情報（カテゴリ）を返すメソッド
  def categories
    @categories.map do |category|
      CategorySerializer.new(category)
    end
  end
end