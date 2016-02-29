class Link < ActiveRecord::Base
  belongs_to :user
  enum quality: [:read, :unread]
end
