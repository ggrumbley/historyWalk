class Tour < ActiveRecord::Base
  has_many :exhibits, dependent: :destroy

  def as_json(options = {})
    super(options.merge(include: :exhibits))
  end
end
