class ApplicationRecord < ActiveRecord::Base
  include UuidModule

  primary_abstract_class
end
