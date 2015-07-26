angular.module('templates-app', ['about/index.tpl.html', 'blog/index.tpl.html', 'contact/index.tpl.html', 'home/index.tpl.html', 'sidebar/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<h1>about</h1>\n" +
    "<div>\n" +
    "\n" +
    "	HI\n" +
    "\n" +
    "	\n" +
    "</div>");
}]);

angular.module("blog/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("blog/index.tpl.html",
    "<h1>blog</h1>\n" +
    "<form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "  <div class=\"form-group\">\n" +
    "  <label for=\"PostTitle\">PostTitle</label>\n" +
    "  <label for=\"PostContent\">PostContent</label>\n" +
    "    <input type=\"text\" ng-model=\"newPost.title\" class=\"form-control\" id=\"postTitle\">\n" +
    "    <input type=\"text\" ng-model=\"newPost.post_content\" class=\"form-control\" id=\"postContent\">\n" +
    "  </div>\n" +
    "  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
    "</form>\n" +
    "\n" +
    "<pre>form = {{newPost | json}}</pre>\n" +
    "\n" +
    "<div id=\"post-container\" class=\"col-md-6\">\n" +
    "  <ul>\n" +
    "    <li ng-repeat=\"post in posts\">\n" +
    "      {{post.title}}\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("contact/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/index.tpl.html",
    "<!--<h1>Contact</h1>\n" +
    "<hr>-->\n" +
    "<div class=\"contact\" id=\"contact\">\n" +
    "    <div class=\"section-head\">\n" +
    "        <h3>Join The NOVO Experience</h3>\n" +
    "    </div>\n" +
    "    <div class=\"contact-section\">\n" +
    "        <form class=\"ctr\" action=\"#\" method=\"#\">\n" +
    "            <div class=\"loader\"></div>\n" +
    "            <input type=\"text\">\n" +
    "            <div class=\"indicator\" data-content=\"Type Your Email Address\"></div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <!-- Begin MailChimp Signup Form -->\n" +
    "    <link href=\"//cdn-images.mailchimp.com/embedcode/slim-081711.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
    "    <style type=\"text/css\">\n" +
    "        #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n" +
    "        /* Add your own MailChimp form style overrides in your site stylesheet or in this style block.\n" +
    "        We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" +
    "    </style>\n" +
    "    <div id=\"mc_embed_signup\">\n" +
    "        <form action=\"//projectnovo.us11.list-manage.com/subscribe/post?u=a56f7f3f876fa9db4c36328af&amp;id=ff3d3ae826\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n" +
    "            <div id=\"mc_embed_signup_scroll\">\n" +
    "                <label for=\"mce-EMAIL\">Subscribe to our mailing list</label>\n" +
    "                <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"email\" id=\"mce-EMAIL\" placeholder=\"email address\" required>\n" +
    "                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n" +
    "                <div style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_a56f7f3f876fa9db4c36328af_ff3d3ae826\" tabindex=\"-1\" value=\"\"></div>\n" +
    "                <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--End mc_embed_signup-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n" +
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "<link href=\"/styles/css/home.css\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
    "<link href=\"/styles/css/animate.min.css\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
    "<link href='http://fonts.googleapis.com/css?family=Lato:400,100,300,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>\n" +
    "<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800,600,300,200' rel='stylesheet' type='text/css'>\n" +
    "<link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,100,700' rel='stylesheet' type='text/css'>\n" +
    "<link href=\"/styles/css/font-awesome.min.css\" rel=\"stylesheet\" media=\"screen\">\n" +
    "\n" +
    "<div class=\"banner\">\n" +
    "    <div class=\"banner-text\">\n" +
    "        <h2 class=\"tagline\">Welcome</h2>\n" +
    "        <p class=\"under-tagline\">Embrace change with NOVO<br/>a full-measure design, web development, and marketing firm.</p>\n" +
    "        <a href=\"/about/\"><button class=\"mainbutton\">Learn More</button></a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"services\" id=\"service\">\n" +
    "    <div class=\"section-head\">\n" +
    "        <h3>Our Services</h3>\n" +
    "    </div>\n" +
    "    <div class=\"services-list\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <i class=\"fa fa-paint-brush fa-5x\"></i>\n" +
    "                    <h2>Design</h2>\n" +
    "                    <p>\n" +
    "                        Branding\n" +
    "                        Cre8\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <i class=\"fa fa-code fa-5x\"></i>\n" +
    "                    <h2>Development</h2>\n" +
    "                    <p>\n" +
    "                        Web Development\n" +
    "                        Custom Software\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <i class=\"fa fa-users fa-5x\"></i>\n" +
    "                    <h2>Marketing</h2>\n" +
    "                    <p>\n" +
    "                        Content Creation\n" +
    "                        Social Media Management                     \n" +
    "                        Social Media Strategy -- metrics -- growth hacking -- NUMBERS\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "    \n" +
    "<div id=\"home2\">\n" +
    "    <div class=\"desc\" align=\"center\">\n" +
    "    <h3>Meet The Team</h3>\n" +
    "    <div id=\"team\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <img src=\"/images/team/val.png\" />\n" +
    "                    <h2>Valentino</h2>\n" +
    "                    <h2 style=\"color: #BDBDBD\">Development</h2>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <img src=\"/images/team/garrett.png\" />\n" +
    "                    <h2>Garrett</h2>\n" +
    "                    <h2 style=\"color: #BDBDBD\">Marketing and <br> Content</h2>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <img src=\"/images/team/trevor.png\" />\n" +
    "                    <h2>Trevor</h2>\n" +
    "                    <h2 style=\"color: #BDBDBD\">8</h2>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <img src=\"/images/team/mikey.png\" />\n" +
    "                    <h2>Michael</h2>\n" +
    "                    <h2 style=\"color: #BDBDBD\">Design</h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--<a href=\"#\" id=\"load_team\"><button class=\"mainbutton\">Learn More</button></a>-->\n" +
    "    </div>\n" +
    "</div>  \n" +
    "\n" +
    "<div class=\"contact\" id=\"contact\">\n" +
    "    <div class=\"section-head\">\n" +
    "        <h3>Join The NOVO Experience</h3>\n" +
    "    </div>\n" +
    "    <div class=\"contact-section\">\n" +
    "        <form class=\"ctr\" action=\"#\" method=\"#\">\n" +
    "            <div class=\"loader\"></div>\n" +
    "            <input type=\"text\">\n" +
    "            <div class=\"indicator\" data-content=\"Type Your Email Address\"></div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\" type=\"text/javascript\"></script>\n" +
    "<script src=\"/js/blog.js\" type=\"text/javascript\"></script>\n" +
    "<script src=\"/js/bootstrap.min.js\" type=\"text/javascript\"></script>\n" +
    "<script src=\"/js/email.js\" type=\"text/javascript\"></script>\n" +
    "\n" +
    "");
}]);

angular.module("sidebar/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sidebar/index.tpl.html",
    "<link href=\"/styles/css/sidebar.css\" type=\"text/css\">\n" +
    "<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>\n" +
    "\n" +
    "<div ng-controller=\"SidebarCtrl\">\n" +
    "    <div class=\"page-nav-zone\">\n" +
    "        <div class=\"flex-item-top\"></div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\"><img style=\"max-width: 50%;\" src=\"/images/tri.png\"/></div>\n" +
    "                    <div class=\"nav-large-list\">home</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "       <div class=\"item-container\">\n" +
    "            <a href=\"/about/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\">1</div>\n" +
    "                    <div class=\"nav-large-list\">about</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/contact/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\">2</div>\n" +
    "                    <div class=\"nav-large-list\">contact</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <!--<div class=\"item-container\">\n" +
    "            <a href=\"/blog/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\">4</div>\n" +
    "                    <div class=\"nav-large-list\">blog</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"flex-item-bottom\"></div>-->\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--\n" +
    "\n" +
    "<div class=\"index-container\">\n" +
    "  <div class=\"wrapper\">\n" +
    "    <div class=\"box\">\n" +
    "      <div class=\"row row-offcanvas row-offcanvas-left\">\n" +
    "\n" +
    "        <div class=\"col-sm-2 col-xs-2 sidebar-offcanvas\" id=\"sidebar\">\n" +
    "        \n" +
    "                    <div class=\"nav hidden-xs hidden-sm\" id=\"lg-menu\">\n" +
    "                        <img src=\"static/img/logo.png\"/>\n" +
    "                    </div>\n" +
    "                        \n" +
    "                    <div class=\"nav visible-xs visible-sm\" id=\"xs\">\n" +
    "                        <img src=\"static/img/tri.png\"/>                                 \n" +
    "                    </div>\n" +
    "           \n" +
    "                        <div id=\"sidenav\">\n" +
    "                            <div class=\"row\">\n" +
    "                                    <ul class=\"nav hidden-xs hidden-sm\">\n" +
    "                                        <li class=\"active activeicon\">\n" +
    "                                            <a href=\"#\">\n" +
    "                                                <i class=\"fa fa-home\"></i>\n" +
    "                                                <span>Home</span>\n" +
    "                                            </a>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <a href=\"#\" >\n" +
    "                                                <i class=\"fa fa-users\"></i>\n" +
    "                                                <span>The Team</span>\n" +
    "                                            </a>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <a href=\"#\">\n" +
    "                                                <i class=\"fa fa-comments\"></i>\n" +
    "                                                <span>Contact</span>\n" +
    "                                            </a>\n" +
    "                                        </li>\n" +
    "                                    </ul>\n" +
    "                                    <ul class=\"nav visible-sm\" id=\"lg-2\">\n" +
    "                                        <li class=\"active activeicon\">\n" +
    "                                            <a href=\"#\">\n" +
    "                                                <i class=\"fa fa-home\"></i>\n" +
    "                                                <br>\n" +
    "                                                <span>Home</span>\n" +
    "                                            </a>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <a href=\"#\" >\n" +
    "                                                <i class=\"fa fa-users\"></i>\n" +
    "                                                <br>\n" +
    "                                                <span>The Team</span>\n" +
    "                                            </a>\n" +
    "                                        </li>\n" +
    "                                        <li>\n" +
    "                                            <a href=\"#\">\n" +
    "                                                <i class=\"fa fa-comments\"></i>\n" +
    "                                                <br>\n" +
    "                                                <span>Contact</span>\n" +
    "                                            </a>\n" +
    "                                        </li>\n" +
    "                                    </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "        <ul class=\"list-unstyled hidden-xs\" id=\"sidebar-footer\">\n" +
    "            <a href=\"https://www.facebook.com/experienceNOVO\" target=\"_blank\" class=\"btn btn-social-icon btn-facebook\" style=\"background-color: #1C1C1C\"><i class=\"fa fa-facebook\"></i></a>\n" +
    "            <a class=\"btn btn-social-icon btn-google\" style=\"background-color: #1C1C1C\"><i class=\"fa fa-google-plus\"></i></a>\n" +
    "            <a class=\"btn btn-social-icon btn-linkedin\" style=\"background-color: #1C1C1C\"><i class=\"fa fa-linkedin\"></i></a>\n" +
    "            <a href=\"https://twitter.com/experienceNOVO\" target=\"_blank\" class=\"btn btn-social-icon btn-twitter\" style=\"background-color: #1C1C1C\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "        </ul>\n" +
    "          \n" +
    "        <ul class=\"nav visible-xs\" id=\"xs-menu\" style=\"font-size: 25px\">\n" +
    "            <li class=\"activeicon\"><a href=\"#\"><i class=\"fa fa-home\"></i></a></li>\n" +
    "            <li><a href=\"#\"><i class=\"fa fa-users\"></i></a></li>\n" +
    "            <li><a href=\"#\"><i class=\"fa fa-comments\"></i></a></li>\n" +
    "        </ul>\n" +
    "                    \n" +
    "                <ul class=\"nav\" id=\"xs-menu-2\" style=\"font-size: 30px\">\n" +
    "            <li class=\"activeicon\"><a href=\"#\"><i class=\"fa fa-home \"></i></a></li>\n" +
    "            <li><a href=\"#\"><i class=\"fa fa-users\"></i></a></li>\n" +
    "            <li><a href=\"#\"><i class=\"fa fa-comments\"></i></a></li>\n" +
    "        </ul>\n" +
    "          \n" +
    "        <ul class=\"nav visible-sm\" id=\"social-sm\">\n" +
    "                    <div class=\"col-sm-12\">\n" +
    "                        <a target=\"_blank\" class=\"btn btn-social-icon btn-facebook\" style=\"background-color: #1C1C1C;\"><i class=\"fa fa-facebook\"></i></a>\n" +
    "                        <a target=\"_blank\" class=\"btn btn-social-icon btn-google\" style=\"background-color: #1C1C1C\"><i class=\"fa fa-google-plus\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-12\">\n" +
    "                        <a target=\"_blank\" class=\"btn btn-social-icon btn-linkedin\" style=\"background-color: #1C1C1C;\"><i class=\"fa fa-linkedin\"></i></a>\n" +
    "                        <a target=\"_blank\" class=\"btn btn-social-icon btn-twitter\" style=\"background-color: #1C1C1C\"><i class=\"fa fa-twitter\"></i></a>           \n" +
    "                    </div>\n" +
    "        </ul>\n" +
    "                    \n" +
    "                <ul class=\"nav visible-xs\" id=\"social\">\n" +
    "                    \n" +
    "            <a target=\"_blank\" class=\"btn btn-social-icon btn-facebook\" style=\"background-color: #1C1C1C\"><i class=\"fa fa-facebook\"></i></a>\n" +
    "            <a target=\"_blank\" class=\"btn btn-social-icon btn-google\" style=\"background-color: #1C1C1C\"><i class=\"fa fa-google-plus\"></i></a>\n" +
    "            <a target=\"_blank\" class=\"btn btn-social-icon btn-linkedin\" style=\"background-color: #1C1C1C\"><i class=\"fa fa-linkedin\"></i></a>\n" +
    "            <a target=\"_blank\" class=\"btn btn-social-icon btn-twitter\" style=\"background-color: #1C1C1C\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "        </ul>\n" +
    "          \n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"column col-sm-10 col-xs-10\" id=\"main\">\n" +
    "          <div id=\"content\">\n" +
    "            <div id=\"home\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "-->\n" +
    "\n" +
    "");
}]);
