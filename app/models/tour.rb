class Tour
  include Mongoid::Document
  field :title, type: String
  field :cover, type: String
  embeds_many :exhibits
end
