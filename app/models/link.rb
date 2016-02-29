class Link < ActiveRecord::Base
  belongs_to :user
  enum status: [:unread, :read]
  default_scope -> {order(id: :desc)}
end
