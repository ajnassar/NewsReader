NewsReader.Routers.router = Backbone.Router.extend({
  routes: {
    "": "authenticate",
    "feeds": "feedIndex",
    "feeds/:feed_id/entries": "showFeed",
    "feeds/:feed_id/entries/:entry_id": "showEntry"
  },

  initialize: function($rootEl){
    this.$rootEl = $rootEl;
  },

  authenticate: function(){
    var auth = new NewsReader.Views.AuthView();
    this._swapView(auth);
  },

  feedIndex: function(){
    var feedIndex = new NewsReader.Views.FeedsIndexView({collection: NewsReader.feeds});
    this._swapView(feedIndex);
  },

  showFeed: function(feed_id){
    var feed = NewsReader.feeds.get(feed_id);
    var feedShow = new NewsReader.Views.FeedShowView({model: feed});
    this._swapView(feedShow);
  },

  showEntry: function(feed_id, entry_id){
    var feed = NewsReader.feeds.get(feed_id);
    var entry = feed.get("entries").get(entry_id);
    var entryShow = new NewsReader.Views.EntryShowView({model: entry});
    this._swapView(entryShow);
  },

  _swapView: function(newView){
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }

})