class HomeController < ApplicationController
  def index
    @photos = FLICKR.photos.search(:user_id => '130728377@N08')

  end
end
