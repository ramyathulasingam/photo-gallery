class HomeController < ApplicationController
  def index
    @photos = FLICKR.photos.search(:user_id => '130728377@N08')
    @pictures = build_object(@photos)
  end

  def large_image
    @photos = FLICKR.photos.search(:user_id => '130728377@N08',  :min_upload_date => (Time.now - 15*60).in_time_zone("Pacific Time (US & Canada)").strftime("%Y-%m-%d %H:%M:%S") )
    @pictures = build_object(@photos)
    render json: @pictures
  end


  def build_object(photos)
    a = []
     photos.each do |i|
       h = {}
       h["id"] = i.id
       h["url"] = i.url(size = "large")
       a << h
     end
    a
  end
end
