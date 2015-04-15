class HomeController < ApplicationController
  def index
    @photos = FLICKR.photos.search(:user_id => '130728377@N08')
  end

  def large_image
    @photos = FLICKR.photos.search(:user_id => '130728377@N08',  :min_upload_date => (Time.now - 15*60).to_s(:db) ).collect{|i|i.url(size = "large" )}
    render json: @photos
  end
end
