class User < ActiveRecord::Base
  has_secure_password
  has_many :links
  validates :username, presence: true,
                   uniqueness: true
  validates :password, presence: true

end
