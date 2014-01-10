NewsReader.Views.FeedShowView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model.get("entries"), "sync", this.render)
  },

  template: JST["feeds/feed_show"],

  events: {
    "click button.refresh": "refresh",
    "click button.back": "back"
  },

  render: function(){
    console.log("RE-RENDERING")
    var renderedContent = this.template({feed: this.model});
    this.$el.html(renderedContent);
    return this;
  },

  refresh: function(){
    var that = this;
    this.model.get("entries").fetch();
  },

  back: function(){
    Backbone.history.navigate("#feeds", {trigger: true})
  }
});