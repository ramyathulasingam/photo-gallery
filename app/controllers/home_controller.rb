class HomeController < ApplicationController
  def index
    @photos = FLICKR.photos.search(:user_id => '130728377@N08')
  end

  def large_image
    @photos = FLICKR.photos.search(:user_id => '130728377@N08',  :min_upload_date => (Time.now - 15*60).in_time_zone("Pacific Time (US & Canada)").strftime("%Y-%m-%d %H:%M:%S") ).collect{|i|i.url(size = "large" )}
    render json: @photos
  end
end
