NewsReader.Views.AuthView = Backbone.View.extend({
  events: {
    "click button.loginbutton": "showlogin",
    "click button.signupbutton": "showsignup",
    "click button.gotoform": "gotoform",
    "click input[type='submit']": "auth"
  },
  template: JST["users/auth"],
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  gotoform: function(){
    var formType = this.$('h3').text();
    if (formType === "Log In"){
      this.showsignup();
    } else {
      this.showlogin();
    }
    this.$("#form").toggleClass("hidden")
  },

  showlogin: function(){
    this.$("#authbuttons").remove();
    var $form = this.$("#form");
    $form.toggleClass("hidden");
    $form.find('h3').text("Log In");
    $form.find('#submit').val("Log In");
    $form.find(".gotoform").text("Sign Up");
  },

  showsignup: function(){
    this.$("#authbuttons").remove();
    var $form = this.$("#form");
    $form.toggleClass("hidden");
    $form.find('h3').text("Sign Up");
    $form.find('#submit').val("Sign Up");
    $form.find(".gotoform").text("Log In");
  },

  auth: function(event){
    event.preventDefault();
    var formData = $(event.currentTarget.form).serializeJSON()
    var formType = this.$('h3').text();
    if (formType === "Log In"){
      $.ajax({
        url: "session",
        type: "POST",
        data: formData,
        success: function(){
          Backbone.history.navigate("feeds", {trigger: true});
        }
      })
    } else {
      $.ajax({
        url: "users",
        type: "POST",
        data: formData,
        success: function(){
          Backbone.history.navigate("feeds", {trigger: true});
        }
      })
    }
  }
})