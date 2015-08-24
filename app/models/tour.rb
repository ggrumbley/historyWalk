class Tour < ActiveRecord::Base
  has_many :exhibits, dependent: :destroy
  mount_uploader :picture, PictureUploader


  validates :title, presence: true
  validate  :picture_size

  def as_json(options = {})
    super(options.merge(include: :exhibits))
  end

  private

    def picture_size
      if picture.size > 5.megabytes
        errors.add(:picture, "should be less than 5MB")
      end
    end
end
