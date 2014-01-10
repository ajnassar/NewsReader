NewsReader.Views.FeedsIndexView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, "add", this.render)
  },
  template: JST['feeds/feeds_index'],
  events: {
    "click input[type='submit']": "addFeed"
  },
  render: function(){
    var renderedContent = this.template({feeds: this.collection});
    this.$el.html(renderedContent);
    return this;
  },
  addFeed: function(event){
    event.preventDefault();
    var formData = $(event.currentTarget.form).serializeJSON();
    var feed = new NewsReader.Models.Feed(formData.feed);
    feed.collection = NewsReader.feeds;
    feed.save({
      success: function(){
        console.log("whatevs")
        NewsReader.feeds.add(feed);
      }
    });
  }
});