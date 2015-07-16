class Exhibit
  include Mongoid::Document
  field :exNum, type: Integer
  field :artist, type: String
  field :title, type: String
  field :year, type: Integer
  field :text, type: String
  field :audio, type: String
  field :image, type: String
  embedded_in :tour
end
