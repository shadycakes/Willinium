(function(){
Template.__checkName("tmpCreateVideo");
Template["tmpCreateVideo"] = new Template("Template.tmpCreateVideo", (function() {
  var view = this;
  return HTML.DIV({
    "class": "table-responsive"
  }, "\n        ", HTML.TABLE({
    "class": "table table-bordered table-striped"
  }, "\n            ", HTML.TBODY("\n            ", HTML.TR("\n                ", HTML.TH({
    "class": "text-nowrap",
    scope: "row"
  }, "Title"), "\n                ", HTML.TD("\n                    ", HTML.INPUT({
    name: "title",
    type: "text",
    "class": "form-control",
    placeholder: "Title",
    "aria-describedby": "basic-addon1"
  }), "\n                "), "\n            "), "\n            ", HTML.TR("\n                ", HTML.TH({
    "class": "text-nowrap",
    scope: "row"
  }, "Logline"), "\n                ", HTML.TD("\n                    ", HTML.INPUT({
    name: "logline",
    type: "text",
    "class": "form-control",
    placeholder: "Logline",
    "aria-describedby": "basic-addon1"
  }), "\n                "), "\n            "), "\n            ", HTML.TR("\n                ", HTML.TH({
    "class": "text-nowrap",
    scope: "row"
  }, "Synopsis"), "\n                ", HTML.TD("\n                    ", HTML.TEXTAREA({
    name: "synopsis",
    "class": "form-control custom-control",
    rows: "4",
    style: "resize: none;",
    placeholder: "Synopsis"
  }), "\n                "), "\n            "), "\n            ", HTML.TR("\n                ", HTML.TH({
    "class": "text-nowrap",
    scope: "row"
  }, "Vimeo Link"), "\n                ", HTML.TD("\n                    ", HTML.INPUT({
    name: "vimeolink",
    type: "text",
    "class": "form-control",
    placeholder: "Vimeo Link",
    "aria-describedby": "basic-addon1"
  }), "\n                "), "\n            "), "\n            ", HTML.TR("\n                ", HTML.TD({
    colspan: "2",
    style: "text-align: right;"
  }, "\n                    ", HTML.P("\n                        ", HTML.A({
    "class": "btn btn-primary btn-lg",
    href: "#",
    role: "button"
  }, "Submit"), "\n                    "), "\n                "), "\n            "), "\n            "), "\n        "), "\n    ");
}));

Template.__checkName("tmpEditVideo");
Template["tmpEditVideo"] = new Template("Template.tmpEditVideo", (function() {
  var view = this;
  return "";
}));

Template.__checkName("tmpViewVideo");
Template["tmpViewVideo"] = new Template("Template.tmpViewVideo", (function() {
  var view = this;
  return [ HTML.H1(Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n    ", HTML.H2(Blaze.View("lookup:owner", function() {
    return Spacebars.mustache(view.lookup("owner"));
  })), "\n    ", HTML.H3(Blaze.View("lookup:logline", function() {
    return Spacebars.mustache(view.lookup("logline"));
  })), "\n    ", HTML.H3(Blaze.View("lookup:synopsis", function() {
    return Spacebars.mustache(view.lookup("synopsis"));
  })), "\n    ", HTML.H4(Blaze.View("lookup:vimeolink", function() {
    return Spacebars.mustache(view.lookup("vimeolink"));
  })) ];
}));

Template.__checkName("tmpListVideos");
Template["tmpListVideos"] = new Template("Template.tmpListVideos", (function() {
  var view = this;
  return "";
}));

})();
