class Tour < ActiveRecord::Base
  has_many :exhibits, dependent: :destroy
  validates :title, presence: true

  def as_json(options = {})
    super(options.merge(include: :exhibits))
  end
end
