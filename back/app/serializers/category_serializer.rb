class CategorySerializer
  include ActiveModel::Serializers::JSON

  attr_accessor :name

  def initialize(category)
    @name = category.name
  end

  def attributes
    {'name' => nil}
  end
end