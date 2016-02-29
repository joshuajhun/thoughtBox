class User < ActiveRecord::Base
  has_secure_password
  validates :username, presences: true,
            :password, uniquness: true
end
