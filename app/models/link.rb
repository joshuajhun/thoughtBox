class Link < ActiveRecord::Base
  belongs_to :user
  enum quality: [:read, :unread]
  default_scope -> {order(id: :desc)}
end
