NewsReader.Models.Feed = Backbone.Model.extend({
  parse: function(data){
    var entries = data.entries;
    data.entries = new NewsReader.Collections.Entries(entries);
    data.entries.feedId = data.id
    return data;
  }
});