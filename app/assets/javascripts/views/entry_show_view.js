NewsReader.Views.EntryShowView = Backbone.View.extend({
  template: JST["entries/entry_show"],
  events:{
    "click button.backtofeed":"back"
  },
  render: function(){
    var renderedContent = this.template({entry: this.model});
    this.$el.html(renderedContent);
    return this;
  },
  back: function(){
    Backbone.history.navigate("feeds/"+this.model.get('feed_id')+"/entries", {trigger:true})
  }
});