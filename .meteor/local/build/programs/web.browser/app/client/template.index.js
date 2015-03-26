(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw("<p>DDDD</p>\n"), Spacebars.include(view.lookupTemplate("tmpNavbar")), "\n\n", HTML.DIV({
    "class": "container"
  }, "\n    ", Spacebars.include(view.lookupTemplate("tmpContent")), "\n") ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("tmpLogin");
Template["tmpLogin"] = new Template("Template.tmpLogin", (function() {
  var view = this;
  return HTML.Raw('<div class="input-group">\n        <span class="input-group-addon" id="basic-addon1">@</span>\n        <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">\n    </div>');
}));

Template.__checkName("tmpContent");
Template["tmpContent"] = new Template("Template.tmpContent", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Content template -->\n    "), HTML.DIV({
    id: "divContent",
    "class": "col-md-9"
  }, "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n            ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("selectContent"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n        " ];
  }, function() {
    return [ "\n            ", Spacebars.include(view.lookupTemplate("tmpContent_Login")), "\n        " ];
  }), "\n    ") ];
}));

Template.__checkName("tmpContent_Login");
Template["tmpContent_Login"] = new Template("Template.tmpContent_Login", (function() {
  var view = this;
  return HTML.Raw("<h1>Please login to continue</h1>");
}));

Template.__checkName("tmpContent_User");
Template["tmpContent_User"] = new Template("Template.tmpContent_User", (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("tmpCreateVideo"));
}));

})();
