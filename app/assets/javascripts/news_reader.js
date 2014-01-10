window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log("IT WORKS")
    this.feeds = new NewsReader.Collections.Feeds();
    this.feeds.fetch({
      success: function(){
        new NewsReader.Routers.router($('#content'));
        Backbone.history.start();
      }
    });
  }
};


$(document).ready(function(){
  NewsReader.initialize();
});
