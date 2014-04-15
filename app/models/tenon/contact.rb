module Tenon
  class Contact < ActiveRecord::Base
    include Humanizer
    require_human_on :create, unless: :bypass_humanizer

    attr_accessor :subscribe, :controller, :bypass_humanizer, :page_id

    # Validations
    validates_presence_of :name, :email, :content
    validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i

    # Scopes
    default_scope { order('created_at DESC') }
    scope :read, -> { where(read: true) }
    scope :unread, -> { where(read: false) }
    scope :replied, -> { where(replied: true) }
    scope :unreplied, -> { where(replied: false) }

    def toggle_replied!
      self.replied = self.replied? ? false : true
      save
    end

    def toggle_read!
      self.read = self.read? ? false : true
      save
    end

    # To send contact requests from a front-end controller:
    # ContactMailer.contact_notification(@contact).deliver

    private

  end
end
