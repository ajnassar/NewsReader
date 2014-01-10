NewsReader.Collections.Entries = Backbone.Collection.extend({
  model: NewsReader.Models.Entry,
  url: function(){
   return "/feeds/" + this.feedId + "/entries";
  }
})