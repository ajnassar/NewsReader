class EntriesController < ApplicationController
  def index
    feed = Feed.find(params[:feed_id])
    if (Time.now - feed.updated_at > 2.minutes)
      feed.reload
    end
    render :json => feed.entries
  end
end
