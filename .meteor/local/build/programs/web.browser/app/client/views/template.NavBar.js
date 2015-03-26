(function(){
Template.__checkName("tmpNavbar");
Template["tmpNavbar"] = new Template("Template.tmpNavbar", (function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar navbar-default navbar-fixed-top"
  }, "\n        ", HTML.DIV({
    "class": "navbar-header"
  }, "\n            ", HTML.P({
    "class": "navbar-text navbar-left"
  }, "\n                ", Spacebars.include(view.lookupTemplate("tmpUser")), "\n            "), "\n        "), "\n    ");
}));

Template.__checkName("tmpUser");
Template["tmpUser"] = new Template("Template.tmpUser", (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("loginButtons"));
}));

Template.__checkName("tmpSearch");
Template["tmpSearch"] = new Template("Template.tmpSearch", (function() {
  var view = this;
  return HTML.Raw('<div class="input-group">\n        <span class="input-group-addon" id="basic-addon1">#</span>\n        <input type="text" class="form-control" placeholder="Search" aria-describedby="basic-addon1">\n    </div>');
}));

})();
