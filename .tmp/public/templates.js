angular.module('templates-app', ['about/index.tpl.html', 'blog/index.tpl.html', 'contact/index.tpl.html', 'home/index.tpl.html', 'portfolio/index.tpl.html', 'sidebar/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<h1>about</h1>\n" +
    "<div>\n" +
    "	<h3>Full-service Online Marketing</h3>\n" +
    "	<div>\n" +
    "		<p>Social Media Management to extend your customer reach.</p>\n" +
    "		<p>Email Outreach Marketing to manage current customer and secure new-customer leads. </p>\n" +
    "		<p>Blog Creation to establish your presence within your community and your industry.</p>\n" +
    "		<p>Marketing Metric Analysis to ensure effectiveness and maximize return on investment.</p>\n" +
    "	</div>\n" +
    "	<h3>Blue-chip Graphic Design</h3>\n" +
    "	<div>\n" +
    "		<p>Full-scale Branding to ensure clear communication of your message.</p>\n" +
    "		<p>Customer Interface Design to ensure a seamless online experience.</p>\n" +
    "		<p>Advertising and Logo Design to establish a cohesive brand message.</p>\n" +
    "	</div>\n" +
    "	<h3>Development</h3>\n" +
    "	<div>\n" +
    "		<p>Customer Experience Creation for eye-pleasing customer interaction.</p>\n" +
    "		<p>Mobile-first Web Design to align you with the ever-increasing mobile world.</p>\n" +
    "		<p>SEO Structuring to naturally expand your online reach and outpace your competitors.</p>\n" +
    "		<p>Back-end Software Integration to ensure maximum security and business technology integration.</p>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("blog/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("blog/index.tpl.html",
    "<br><br>\n" +
    "\n" +
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
    "<link href=\"/styles/css/contact.css\" type=\"text/css\">\n" +
    "<link href=\"/styles/css/portfolio.css\" type=\"text/css\">\n" +
    "<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>\n" +
    "\n" +
    "<style type=\"text/css\">\n" +
    "    #map-canvas {\n" +
    "    width: 1600px;\n" +
    "    height: 600px;\n" +
    "    }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"surface-container\">\n" +
    "    <div class=\"container\">\n" +
    "        <div id=\"locations\" class=\"info\">\n" +
    "            <div class=\"title\" style=\"font-weight:400;\">four locations nationwide</div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <div class=\"message\">Our team members are in Chapel Hill NC, Evanston (Chicago) IL, Knoxville TN, and Philadelphia PA.\n" +
    "                Operating in four locations nationwide results in greater client diversity, which we believe is\n" +
    "                instrumental in maintaining creative flow and ensuring innovation. Tailoring our skills and expertise\n" +
    "                for a wider range of project types has allowed us to be on the forefront of web development.\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                Our services are available nationwide and are not limited to our four physical locations.\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"center\">\n" +
    "    <div id=\"map-container\" class=\"map-container\">\n" +
    "        <div id=\"map-canvas\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"surface-container\">\n" +
    "    <div class=\"container\">\n" +
    "        <div id=\"newsletter\" class=\"info\">\n" +
    "            <div class=\"title\" style=\"font-weight:400;\">get in touch</div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <div class=\"message\">We ask those who are interested in our services to contact us via\n" +
    "                <a href=\"mailto:experiencenovo@gmail.com\">email</a> or to give us a call at one of our four locations.\n" +
    "                We embrace open dialogue and transparency, and would\n" +
    "                be more than happy to answer any questions you may have!\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                Chapel Hill (Raleigh): <a href=\"tel:+18656797229\">(865) 679-7229</a>\n" +
    "                <br>\n" +
    "                Evanston (Chicago): <a href=\"tel:+18653876121\">(865) 387-6121</a>\n" +
    "                <br>\n" +
    "                Knoxville: <a href=\"tel:+18656969382\">(865) 696-9382</a>\n" +
    "                <br>\n" +
    "                Philadelphia: <a href=\"tel:+13365800855\">(336) 580-0855</a>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                We also send out a monthly newsletter highlighting the latest in web development, what we are up to, and\n" +
    "                our blog series. It's a great way to stay in the loop and see the latest and greatest in web dev.\n" +
    "                Sound interesting? Sign up for our mailing list below.\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <br>\n" +
    "    <div class=\"contact\" id=\"contact\">\n" +
    "        <div class=\"contact-section\">\n" +
    "            <form class=\"ctr\" action=\"//projectnovo.us11.list-manage.com/subscribe/post?u=a56f7f3f876fa9db4c36328af&amp;id=ff3d3ae826\" method=\"post\">\n" +
    "                <div class=\"loader\"></div>\n" +
    "                <input type=\"email\" name=\"EMAIL\" required>\n" +
    "                <div class=\"indicator\" data-content=\"Type Your Email Address\"></div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n" +
    "        <div style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_a56f7f3f876fa9db4c36328af_ff3d3ae826\" tabindex=\"-1\" value=\"\"></div>\n" +
    "        <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script src=\"/js/maps.js\" type='text/javascript' ></script>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
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
    "<link href=\"/styles/css/contact.css\" rel=\"stylesheet\" media=\"screen\">\n" +
    "\n" +
    "<div class=\"banner\">\n" +
    "    <div class=\"banner-text\">\n" +
    "        <h2 class=\"tagline\">Welcome</h2>\n" +
    "        <p class=\"under-tagline\">Embrace change with NOVO<br/>a full-scale online marketing, graphic design, and web development firm.</p>\n" +
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
    "                    <i class=\"fa fa-users fa-5x\"></i>\n" +
    "                    <h2>Marketing</h2>\n" +
    "                    <p>Social Media Management</p>\n" +
    "                    <p>Email Marketing</p>\n" +
    "                    <p>Content Creation</p>\n" +
    "                    <p>Marketing Metric Analysis</p>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <i class=\"fa fa-paint-brush fa-5x\"></i>\n" +
    "                    <h2>Design</h2>\n" +
    "                    <p>Company Branding</p>\n" +
    "                    <p>Customer Interface Design</p>\n" +
    "                    <p>Advertising</p>\n" +
    "                    <p>Logo</p>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <i class=\"fa fa-code fa-5x\"></i>\n" +
    "                    <h2>Development</h2>\n" +
    "                    <p>Customer Experience Creation</p>\n" +
    "                    <p>Mobile-first Web Design</p>\n" +
    "                    <p>SEO Structuring</p>\n" +
    "                    <p>Back-end Software Integration</p>\n" +
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
    "                    <a href=\"http://www.valentino.io\">site</a>\n" +
    "                    <!--<h2 style=\"color: #BDBDBD\">Development</h2>-->\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <img src=\"/images/team/garrett.png\" />\n" +
    "                    <h2>Garrett</h2>\n" +
    "                    <a href=\"http://garrettheadden.com\">site</a>\n" +
    "                    <!--<h2 style=\"color: #BDBDBD\">Marketing and <br> Content</h2>-->\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <img src=\"/images/team/trevor.png\" />\n" +
    "                    <h2>Trevor</h2>\n" +
    "                    <a href=\"http://www.troverman.com\">site</a>\n" +
    "                    <!--<h2 style=\"color: #BDBDBD\">8</h2>-->\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3\">\n" +
    "                    <img src=\"/images/team/mikey.png\" />\n" +
    "                    <h2>Michael</h2>\n" +
    "                    <a href=\"http://www.evolvedus.com\">site</a>\n" +
    "                    <!--<h2 style=\"color: #BDBDBD\">Design</h2>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--<a href=\"#\" id=\"load_team\"><button class=\"mainbutton\">Learn More</button></a>-->\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"surface-container\">\n" +
    "    <div class=\"container\">\n" +
    "        <div id=\"newsletter\" class=\"info\">\n" +
    "            <div class=\"title\" style=\"font-weight:400;\">get in touch</div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <div class=\"message\">We ask those who are interested in our services to contact us via\n" +
    "                <a href=\"mailto:experiencenovo@gmail.com\">email</a> or to give us a call at one of our four locations.\n" +
    "                We embrace open dialogue and transparency, and would\n" +
    "                be more than happy to answer any questions you may have!\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                Chapel Hill (Raleigh): <a href=\"tel:+18656797229\">(865) 679-7229</a>\n" +
    "                <br>\n" +
    "                Evanston (Chicago): <a href=\"tel:+18653876121\">(865) 387-6121</a>\n" +
    "                <br>\n" +
    "                Knoxville: <a href=\"tel:+18656969382\">(865) 696-9382</a>\n" +
    "                <br>\n" +
    "                Philadelphia: <a href=\"tel:+13365800855\">(336) 580-0855</a>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                We also send out a monthly newsletter highlighting the latest in web development, what we are up to, and\n" +
    "                our blog series. It's a great way to stay in the loop and see the latest and greatest in web dev.\n" +
    "                Sound interesting? Sign up for our mailing list below.\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <br>\n" +
    "    <div class=\"contact\" id=\"contact\">\n" +
    "        <div class=\"contact-section\">\n" +
    "            <form class=\"ctr\" action=\"//projectnovo.us11.list-manage.com/subscribe/post?u=a56f7f3f876fa9db4c36328af&amp;id=ff3d3ae826\" method=\"post\">\n" +
    "                <div class=\"loader\"></div>\n" +
    "                <input type=\"email\" name=\"EMAIL\" required>\n" +
    "                <div class=\"indicator\" data-content=\"Type Your Email Address\"></div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n" +
    "        <div style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_a56f7f3f876fa9db4c36328af_ff3d3ae826\" tabindex=\"-1\" value=\"\"></div>\n" +
    "        <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\" type=\"text/javascript\"></script>\n" +
    "<script src=\"/js/blog.js\" type=\"text/javascript\"></script>\n" +
    "<script src=\"/js/bootstrap.min.js\" type=\"text/javascript\"></script>\n" +
    "<script src=\"/js/email.js\" type=\"text/javascript\"></script>\n" +
    "");
}]);

angular.module("portfolio/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("portfolio/index.tpl.html",
    "<link rel=\"stylesheet\" type=\"text/css\" href=\"/styles/css/ideal-image-slider.css\">\n" +
    "<link rel=\"stylesheet\" type=\"text/css\" href=\"/styles/css/iis-default-theme.css\">\n" +
    "\n" +
    "<!--<div class='container' style=\"margin: 180px auto 0;\">\n" +
    "    <div class='wrap'>\n" +
    "        <div class='crop'>\n" +
    "            <img src='' style=\"background-color: #1db996;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class='wrap'>\n" +
    "        <div class='crop'>\n" +
    "            <img src='' style=\"background-color: #1db996;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class='wrap'>\n" +
    "        <div class='crop'>\n" +
    "            <img src='/images/symbol300.png'>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class='wrap'>\n" +
    "        <div class='crop'>\n" +
    "            <img src='' style=\"background-color: #1db996;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class='wrap'>\n" +
    "        <div class='crop'>\n" +
    "            <img src='' style=\"background-color: #1db996;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>-->\n" +
    "\n" +
    "<div class=\"center top-slider\">\n" +
    "    <div id=\"slider\" class=\"slider\" style=\"z-index: 20 !important;\">\n" +
    "        <img src=\"/images/portfolio/absolute-screenshot.png\" data-src-2x=\"\" alt=\"\" data-caption=\"#caption-1\">\n" +
    "        <img data-src=\"/images/portfolio/absolute-screenshot.png\" data-src-2x=\"\" src=\"\" alt=\"\" data-caption=\"#caption-2\" style=\"background-color: #1db996;\">\n" +
    "        <div class=\"iis-previous-nav\"></div>\n" +
    "        <div class=\"iis-next-nav\"></div>\n" +
    "    </div>\n" +
    "    <div id=\"caption-1\" class=\"caption\">\n" +
    "        <h3><a href=\"http://www.absoluteyachtsna.com/\">Absolute Yachts North America</a></h3>\n" +
    "        <p style=\"margin-bottom: 0px\">Absolute is an Italian yacht brand based in Piacenza, Italy, manufacturing yachts\n" +
    "            ranging from 40 to 72 feet. NOVO is responsible for Absolute North America's online marketing,\n" +
    "            including web design and development, email marketing, and social media marketing.\n" +
    "        </p>\n" +
    "    </div>\n" +
    "    <div id=\"caption-2\" class=\"caption\">\n" +
    "        <h3>More coming soon!</h3>\n" +
    "        <p style=\"margin-bottom: 0px\"></p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div id=\"absolute\" class=\"info\">\n" +
    "        <div class=\"title\" style=\"font-weight:400;\">quality, modernity, and transparency</div>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <div class=\"message\">\n" +
    "            Our clients know what it means to partner with NOVO. Our work exudes quality, employs the latest and greatest\n" +
    "            in marketing and web development, and we are transparent in our communication to clients and the outside\n" +
    "            world. Take a look at our clients' websites. We believe our work speaks for itself.\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script src=\"/js/ideal-image-slider.js\" type='text/javascript'></script>\n" +
    "<script src=\"/js/iis-captions.js\" type='text/javascript'></script>\n" +
    "<script src=\"/js/slider.js\" type='text/javascript'></script>");
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
    "                    <div class=\"nav-small-list\">\n" +
    "                        <img style=\"max-width: 50%;\" src=\"/images/tri.png\"/>\n" +
    "                    </div>\n" +
    "                    <div class=\"nav-large-list\">Home</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "       <div class=\"item-container\">\n" +
    "            <a href=\"/about/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\"><i class=\"fa fa-info\"></i></div>\n" +
    "                    <div class=\"nav-large-list\">About</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/contact/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\"><i class=\"fa fa-comment-o\"></i></div>\n" +
    "                    <div class=\"nav-large-list\">Contact</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/portfolio/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\"><i class=\"fa fa-picture-o\"></i></div>\n" +
    "                    <div class=\"nav-large-list\">Portfolio</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/blog/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\"><i class=\"fa fa-newspaper-o\"></i></div>\n" +
    "                    <div class=\"nav-large-list\">Blog</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"flex-item-bottom\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);
