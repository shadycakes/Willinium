(function(){
Template.__checkName("tmpNavbar");
Template["tmpNavbar"] = new Template("Template.tmpNavbar", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Navigation -->\n    "), HTML.NAV({
    "class": "navbar navbar-custom navbar-fixed-top",
    role: "navigation"
  }, "\n        ", HTML.DIV({
    "class": "container"
  }, "\n            ", HTML.Raw('<div class="navbar-header">\n                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">\n                    <i class="fa fa-bars"></i>\n                </button>\n                <a class="navbar-brand page-scroll" href="#page-top">\n                    <i class="fa fa-play-circle"></i>  <span class="light">Start</span> Bootstrap\n                </a>\n            </div>'), "\n\n            ", HTML.Raw("<!-- Collect the nav links, forms, and other content for toggling -->"), "\n            ", HTML.DIV({
    "class": "collapse navbar-collapse navbar-right navbar-main-collapse"
  }, "\n                ", HTML.UL({
    "class": "nav navbar-nav"
  }, "\n                    ", HTML.Raw("<!-- Hidden li included to remove active class from about link when scrolled up past about section -->"), "\n                    ", HTML.Raw('<li class="hidden">\n                        <a href="#page-top"></a>\n                    </li>'), "\n                    ", HTML.LI("\n                        ", Spacebars.include(view.lookupTemplate("tmpUser")), "\n                    "), "\n                    ", HTML.Raw('<li>\n                        <a class="page-scroll" href="#download">Download</a>\n                    </li>'), "\n                    ", HTML.Raw('<li>\n                        <a class="page-scroll" href="#contact">Contact</a>\n                    </li>'), "\n                "), "\n            "), "\n            ", HTML.Raw("<!-- /.navbar-collapse -->"), "\n        "), "\n        ", HTML.Raw("<!-- /.container -->"), "\n    ") ];
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
