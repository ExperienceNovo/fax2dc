angular.module('templates-app', ['about/about.mikey/index.mikey.tpl.html', 'about/index.tpl.html', 'blog-post/index.tpl.html', 'blog/index.tpl.html', 'contact/index.tpl.html', 'home/index.tpl.html', 'portfolio/index.tpl.html', 'portfolio/index1.tpl.html', 'sidebar/index.tpl.html']);

angular.module("about/about.mikey/index.mikey.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.mikey/index.mikey.tpl.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "\n" +
    "	<meta charset=\"utf-8\">\n" +
    "	<title>About | NOVO</title>\n" +
    "	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n" +
    "\n" +
    "	<link href=\"/styles/css/about.css\" rel=\"stylesheet\">	\n" +
    "    <link href=\"/styles/css/ui-bootstrap-custom-0.13.1-csp.css\" rel=\"stylesheet\">\n" +
    "    <link href=\"favicon.ico\" rel=\"icon\" type=\"image/x-icon\" />\n" +
    "	<link href=\"/styles/css/font-awesome.min.css\" rel=\"stylesheet\">\n" +
    "	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' rel='stylesheet' type='text/css'>\n" +
    "\n" +
    "</head>\n" +
    "    \n" +
    "<body>\n" +
    "\n" +
    "<div class=\"lead-container\">\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div id=\"carousel\" class=\"carousel slide novo\" rel=\"carousel\">\n" +
    "		<img src=\"/images/about/carousel-macbook.png\" class=\"carousel-novo\" alt=\"\" />\n" +
    "		<div class=\"carousel-inner\">\n" +
    "			<div class=\"item active\">\n" +
    "				<img src=\"/images/portfolio/absolute-screenshot.png\" alt=\"Absolute Yachts North America\" />\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"item\">\n" +
    "				<img src=\"/images/portfolio/km-screenshot.png\" alt=\"Kelsey McMurry Photography\" />\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"item\">\n" +
    "				<img src=\"/images/portfolio/vidhop-screenshot.png\" alt=\"Vidhop.tv\" />\n" +
    "			</div>\n" +
    "\n" +
    "            <div class=\"item\">\n" +
    "                <img src=\"/images/portfolio/valentino-screenshot.png\" alt=\"Valentino.io\" />\n" +
    "            </div>\n" +
    "\n" +
    "		</div>\n" +
    "		<a class=\"carousel-control left\" href=\"#carousel\" data-slide=\"prev\"></a>\n" +
    "		<a class=\"carousel-control right\" href=\"#carousel\" data-slide=\"next\"></a>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<section class=\"col-md-12\">\n" +
    "\n" +
    "	<section class=\"row\" style=\"margin-left:50px;margin-right:50px\">\n" +
    "		<article class=\"col-md-4\">\n" +
    "			<h2><span class=\"grey\">We're</span> Creative</h2>\n" +
    "			<p style=\"font-size: 16px;\">\n" +
    "                We focus on using the most innovative solutions to today’s problems.  Providing you with nothing but the best, most up-to-date technological tools to optimize your business.\n" +
    "			</p>\n" +
    "		</article>\n" +
    "		<article class=\"col-md-4\">\n" +
    "			<h2><span class=\"grey\">We're</span> Effective</h2>\n" +
    "			<p style=\"font-size: 16px;\">\n" +
    "                Despite boundless creativity, effectiveness and efficiency remain the top priorities.  Elegant designs and elaborate effects must be built on a solid and effective foundation.\n" +
    "			</p>\n" +
    "		</article>\n" +
    "		<article class=\"col-md-4\">\n" +
    "			<h2><span class=\"grey\">We're</span> Reliable</h2>\n" +
    "            <p style=\"font-size: 16px;\">\n" +
    "                Our number one priority is always the happiness of our clients.  We set consistent, short-term goals to allow you to be fully engaged throughout our creative process.\n" +
    "            </p>\n" +
    "		</article>\n" +
    "	</section>\n" +
    "\n" +
    "<hr/>\n" +
    "\n" +
    "<br>\n" +
    "<br>\n" +
    "<br>\n" +
    "<br>\n" +
    "<br>\n" +
    "<br>\n" +
    "<br>\n" +
    "<br>\n" +
    "<br>\n" +
    "<br>\n" +
    "<br>\n" +
    "<br>\n" +
    "<br>\n" +
    "\n" +
    "<!--<div class=\"service-tabs\" style=\"margin-left:75px;margin-right:75px\">\n" +
    "	<ul class=\"nav nav-tabs\" align=\"center\">\n" +
    "		<li rel=\"service-1\" class=\"active col-md-2 col-sm-4 col-xs-5 center-block\">\n" +
    "			<a href=\"#service-1\" data-toggle=\"tab\">\n" +
    "                <img id=\"dev\"/>\n" +
    "			</a>\n" +
    "		</li>\n" +
    "		<li rel=\"service-2\" class=\"col-md-2 col-sm-4 col-xs-5 center-block\">\n" +
    "			<a href=\"#service-2\" data-toggle=\"tab\">\n" +
    "                <img id=\"marketing\"/>\n" +
    "			</a>\n" +
    "		</li>\n" +
    "		<li rel=\"service-3\" class=\"col-md-2  col-sm-4 col-xs-5 center-block\">\n" +
    "			<a href=\"#service-3\" data-toggle=\"tab\">\n" +
    "                <img id=\"brand\"/>\n" +
    "            </a>\n" +
    "		</li>\n" +
    "		<li rel=\"service-4\" class=\"col-md-2 col-sm-4 col-xs-5 center-block\">\n" +
    "			<a href=\"#service-4\" data-toggle=\"tab\">\n" +
    "                <img id=\"support\"/>\n" +
    "			</a>\n" +
    "		</li>\n" +
    "		<li rel=\"service-5\" class=\"col-md-2  col-sm-4 col-xs-5 center-block\">\n" +
    "			<a href=\"#service-5\" data-toggle=\"tab\">\n" +
    "                <img id=\"security\"/>\n" +
    "			</a>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "    <div id=\"preload\">\n" +
    "       <img src=\"/images/about/dev.png\" width=\"1\" height=\"1\" />\n" +
    "       <img src=\"/images/about/marketing.png\" width=\"1\" height=\"1\" />\n" +
    "       <img src=\"/images/about/branding.png\" width=\"1\" height=\"1\" />\n" +
    "       <img src=\"/images/about/support.png\" width=\"1\" height=\"1\" />\n" +
    "       <img src=\"/images/about/security.png\" width=\"1\" height=\"1\" />\n" +
    "    </div>\n" +
    "	<div class=\"tab-content\">\n" +
    "		<div id=\"service-1\" class=\"tab-pane active\">\n" +
    "\n" +
    "			<h3>Web Design and Development</h3>\n" +
    "			\n" +
    "			<p>\n" +
    "				Professionally designed, custom websites with integrated web content management systems. \n" +
    "				We're dedicated to providing small businesses and organizations with high-quality web design and web development services at a remarkably competitive value.\n" +
    "			</p>\n" +
    "			\n" +
    "		</div>\n" +
    "		<div id=\"service-2\" class=\"tab-pane\">\n" +
    "			<h3>Complete Online Marketing</h3>\n" +
    "			<p>\n" +
    "				 Social Media Management to extend your customer reach. Email Outreach Marketing to manage current customer and secure new-customer leads. Blog Creation to establish your presence within your community and your industry. Marketing Metric Analysis to ensure effectiveness and maximize return on investment.\n" +
    "			</p>\n" +
    "		</div>\n" +
    "		<div id=\"service-3\" class=\"tab-pane\">\n" +
    "				<h3>Branding and Identity Design</h3>\n" +
    "				<p>\n" +
    "					Full-scale Branding to ensure clear communication of your message. Customer Interface Design to ensure a seamless online experience. Advertising and Logo Design to establish a cohesive brand message.\n" +
    "				</p>\n" +
    "		</div>\n" +
    "		<div id=\"service-4\" class=\"tab-pane\">\n" +
    "				<h3>Continual Support</h3>\n" +
    "				<p>\n" +
    "					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor justo a dolor sollicitudin sollicitudin. Phasellus faucibus nec nibh eu molestie. In placerat ullamcorper mi. Proin vehicula erat sed felis fringilla tincidunt. Fusce in odio id justo euismod tincidunt a eu sem. Praesent pellentesque nisl a dui cursus volutpat. Ut sem erat, interdum a blandit quis, finibus vitae tortor. Etiam eget enim est.\n" +
    "				</p>\n" +
    "		</div>\n" +
    "		<div id=\"service-5\" class=\"tab-pane\">\n" +
    "				<h3>Reliable Security</h3>\n" +
    "				<p>\n" +
    "					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor justo a dolor sollicitudin sollicitudin. Phasellus faucibus nec nibh eu molestie. In placerat ullamcorper mi. Proin vehicula erat sed felis fringilla tincidunt. Fusce in odio id justo euismod tincidunt a eu sem. Praesent pellentesque nisl a dui cursus volutpat. Ut sem erat, interdum a blandit quis, finibus vitae tortor. Etiam eget enim est.\n" +
    "				</p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>-->\n" +
    "\n" +
    "\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "	<script type=\"text/javascript\" src=\"/js/ui-bootstrap-tpls-0.13.1.min.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"/js/bootstrap.min.js\"></script>\n" +
    "	<script type=\"text/javascript\" src=\"/js/about.js\"></script>\n" +
    "	\n" +
    "</body>\n" +
    "</html>		");
}]);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<!--we gotta load in the css in a better fashon than overwriting-->\n" +
    "<link href=\"/styles/css/about.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "<div class=\"about\" id=\"about\">\n" +
    "    <div class=\"about-section-head\">\n" +
    "        <h3>About Us</h3>\n" +
    "        <hr>\n" +
    "    </div>\n" +
    "    <div class=\"about-list\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <i class=\"fa fa-paint-brush fa-5x\"></i>\n" +
    "                    <div class=\"about-title\">\n" +
    "                        <h2>Design</h2>\n" +
    "                    </div>\n" +
    "                    <hr>\n" +
    "                    <div class=\"about-des\">\n" +
    "                        <p>Full-scale Branding to ensure clear communication of your message.</p>\n" +
    "                        <p>Custom Interface Design to ensure a seamless customer online experience.</p>\n" +
    "                        <p>Advertising Design to establish a strong brand presence within your industry.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <i class=\"fa fa-code fa-5x\"></i>\n" +
    "                    <div class=\"about-title\">\n" +
    "                        <h2>Development</h2>\n" +
    "                    </div>\n" +
    "                    <hr>\n" +
    "                    <div class=\"about-des\">\n" +
    "                        <p>Mobile-first Web Design to align you with the ever-increasing mobile world.</p>\n" +
    "                        <p>SEO Structuring to naturally expand your online reach and outpace your competitors.</p>\n" +
    "                        <p>Back-end Software Integration to ensure maximum security and business technology integration.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <i class=\"fa fa-users fa-5x\"></i>\n" +
    "                    <div class=\"about-title\">\n" +
    "                        <h2>Marketing</h2>\n" +
    "                    </div>\n" +
    "                    <hr>\n" +
    "                    <div class=\"about-des\">\n" +
    "                        <p>Social Media Management to extend your customer reach.</p>\n" +
    "                        <p>Email Outreach Marketing to manage current customer and secure new-customer leads.</p>\n" +
    "                        <p>Consistent Content Creation to establish and maintain your presence within your community and your industry.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "    </div>\n" +
    "</div>\n" +
    "	");
}]);

angular.module("blog-post/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("blog-post/index.tpl.html",
    "<h1>post</h1>\n" +
    "<h1>post</h1>\n" +
    "<h1>post</h1>\n" +
    "<h1>post</h1>\n" +
    "<h1>post</h1>\n" +
    "<h1>post</h1>\n" +
    "<h1>post</h1>\n" +
    "<h1>post</h1>\n" +
    "<h1>post</h1>\n" +
    "<h1>post</h1>\n" +
    "<h1>post</h1>\n" +
    "\n" +
    "{{stateParams}}");
}]);

angular.module("blog/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("blog/index.tpl.html",
    "<!--old content, need to cre8 functionality... that error tho-->\n" +
    "<!--\n" +
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
    "-->\n" +
    "\n" +
    "\n" +
    "<div id=\"post-list-container\" ng-repeat=\"post in test_posts\">\n" +
    "  <div id=\"post-container\" ng-repeat=\"post in test_posts\">\n" +
    "    <h1 class=\"title\"><a href=\"/blog/{{post.url_title}}\">{{post.title}}</a></h1>\n" +
    "    <p class=\"lead\">{{post.post_content}}</p>\n" +
    "  </div>\n" +
    "  <br><br><hr>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div style=\"height:100px;\"></div>");
}]);

angular.module("contact/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/index.tpl.html",
    "<!--we gotta load in the css in a better fashon than overwriting-->\n" +
    "<link href=\"/styles/css/contact.css\" type=\"text/css\">\n" +
    "<link href=\"/styles/css/home.css\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
    "\n" +
    "<style type=\"text/css\">\n" +
    "    #map-canvas {\n" +
    "        width: 1900px;\n" +
    "        height: 450px;\n" +
    "    }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"title-surface-container\">\n" +
    "    <div class=\"contact-title-home\" style=\"padding: 2%; color: #000;\">\n" +
    "    <br>\n" +
    "    <p>Four Locations Nationwide</p>\n" +
    "    <hr>\n" +
    "    </div>\n" +
    "    <div class=\"message\">\n" +
    "        <div class=\"interested\"><a href=\"/portfolio/\">Our work speaks for itself.</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "</div> \n" +
    "<div class=\"content-surface-container\">\n" +
    "    <div class=\"contact-page-container\">\n" +
    "        <div class=\"center\">\n" +
    "            <div class=\"box2 small-medium\">\n" +
    "                <img src=\"/images/contact/chap.jpeg\" class=\"img-fill opacity\">\n" +
    "                <br>\n" +
    "                <div class=\"city\" style=\"font-size: 22px;\">Chapel Hill, NC</div>\n" +
    "                <a href=\"tel:+18656797229\">\n" +
    "                    <div class=\"subtitle\">(865) 679-7229</div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <div class=\"box2 small-medium\">\n" +
    "                <img src=\"/images/contact/evanston.jpg\" class=\"img-fill opacity\">\n" +
    "                <br>\n" +
    "                <div class=\"city\" style=\"font-size: 22px;\">Chicago, IL</div>\n" +
    "                <a href=\"tel:+18653876121\">\n" +
    "                    <div class=\"subtitle\">(865) 387-6121</div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <div class=\"box2 small-medium\">\n" +
    "                <img src=\"/images/contact/knoxville.jpg\" class=\"img-fill opacity\">\n" +
    "                <br>\n" +
    "                <div class=\"city\" style=\"font-size: 22px;\">Knoxville, TN</div>\n" +
    "                <a href=\"tel:+18656969382\">\n" +
    "                    <div class=\"subtitle\">(865) 696-9382</div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"box2 small-medium\">\n" +
    "                <img src=\"/images/contact/philly.jpg\" class=\"img-fill opacity\">\n" +
    "                <br>\n" +
    "                <div class=\"city\" style=\"font-size: 22px;\">Philadelpia, PA</div>\n" +
    "                <a href=\"tel:+13365800855\">\n" +
    "                    <div class=\"subtitle\">(336) 580-0855</div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div id=\"newsletter\" class=\"contact-home\">\n" +
    "            <br>\n" +
    "            <div class=\"message\">\n" +
    "                <a href=\"mailto:info@projectnovo.co\"><button class=\"mainbutton service-button\">email us: info@projectnovo.co</button></a>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <!--\n" +
    "                <br>\n" +
    "                <p>Stay in the loop and learn about what we do!</p>\n" +
    "                <br>\n" +
    "                <span class=\"newsletter-home\">Sign Up for our Monthly Newsletter!</span>\n" +
    "                -->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <div class=\"map-center\">\n" +
    "            <div id=\"map-container\" class=\"map-container\">\n" +
    "                <div id=\"map-canvas\"></div>\n" +
    "            </div>\n" +
    "        </div>   \n" +
    "        <div class=\"message\">\n" +
    "            <div class=\"bottom-tagline\"></div>\n" +
    "        </div>\n" +
    "</div>\n" +
    "\n" +
    "    <!--\n" +
    "    <div class=\"contact\" id=\"contact\">\n" +
    "        <div class=\"contact-section\">\n" +
    "            <form class=\"ctr\" action=\"//projectnovo.us11.list-manage.com/subscribe/post?u=a56f7f3f876fa9db4c36328af&amp;id=ff3d3ae826\" method=\"post\">\n" +
    "                <div class=\"loader\"></div>\n" +
    "                <input type=\"email\" name=\"EMAIL\" required>\n" +
    "                <div class=\"indicator\" data-content=\"Type Your Email Address\"></div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_a56f7f3f876fa9db4c36328af_ff3d3ae826\" tabindex=\"-1\" value=\"\"></div>\n" +
    "        <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n" +
    "    </div>\n" +
    "-->\n" +
    "<script src=\"/js/maps.js\" type='text/javascript'></script>\n" +
    "\n" +
    "</div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<!--css has to over write other styles to work...-->\n" +
    "<link href=\"/styles/css/home.css\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
    "\n" +
    "<div class=\"banner\">\n" +
    "    <div class=\"banner-text\">\n" +
    "        <h2 class=\"tagline\">Welcome</h2>\n" +
    "        <p class=\"under-tagline\">Embrace change with NOVO<br/>a full-scale online marketing, graphic design, and web development firm.</p>\n" +
    "        <a href=\"#service\"><button class=\"mainbutton\">Learn More</button></a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"services\" id=\"service\">\n" +
    "    <div class=\"section-head\">\n" +
    "        <h3>Our Services</h3>\n" +
    "        <hr>\n" +
    "    </div>\n" +
    "    <div class=\"services-list\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <i class=\"fa fa-paint-brush fa-5x\"></i>\n" +
    "                    <div class=\"service-title\">\n" +
    "                        <h2>Design</h2>\n" +
    "                    </div>\n" +
    "                <hr>\n" +
    "                    <div class=\"service-des\">\n" +
    "                        <p>Graphics & Animation</p>\n" +
    "                        <p>Custom Interface Design</p>\n" +
    "                        <p>Company Branding</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <i class=\"fa fa-code fa-5x\"></i>\n" +
    "                    <div class=\"service-title\">\n" +
    "                        <h2>Development</h2>\n" +
    "                    </div>\n" +
    "                <hr>\n" +
    "                    <div class=\"service-des\">\n" +
    "                        <p>Mobile-first Web Design</p>\n" +
    "                        <p>SEO Structuring</p>\n" +
    "                        <p>Back-end Software Integration</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <i class=\"fa fa-users fa-5x\"></i>\n" +
    "                    <div class=\"service-title\">\n" +
    "                        <h2>Marketing</h2>\n" +
    "                    </div>\n" +
    "                <hr>\n" +
    "                    <div class=\"service-des\">\n" +
    "                        <p>Social Media Management</p>\n" +
    "                        <p>Outreach Email Marketing</p>\n" +
    "                        <p>Content Creation</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <a href=\"/about/\"><button class=\"mainbutton service-button\">More Info...</button></a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "    \n" +
    "<div id=\"home2\">\n" +
    "    <div class=\"desc\" align=\"center\">\n" +
    "        <h3>Meet The Team</h3>\n" +
    "        <hr>\n" +
    "        <div id=\"team\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <div class=\"col-md-3 team-member\">\n" +
    "                        <img src=\"/images/team/val.png\" />\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                        <div class=\"name\">Valentino</div>\n" +
    "                        <hr>\n" +
    "                        <h2>Data</h2>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 team-member\">\n" +
    "                        <img src=\"/images/team/mikey.png\" />\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                        <div class=\"name\">Michael</div>\n" +
    "                        <hr>\n" +
    "                        <h2>Design</h2>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 team-member\">\n" +
    "                        <img src=\"/images/team/trevor.png\" />\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                        <div class=\"name\">Trevor</div>\n" +
    "                        <hr>\n" +
    "                        <h2>Development</h2>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 team-member\">\n" +
    "                        <img src=\"/images/team/garrett.png\" />\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                        <div class=\"name\">Garrett</div>\n" +
    "                        <hr>\n" +
    "                        <h2>Marketing</h2>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"surface-container-home\">\n" +
    "    <div class=\"contact-container\">\n" +
    "        <div class=\"contact-title-home\">Get In Touch</div>\n" +
    "            <div id=\"newsletter\" class=\"contact-home\">\n" +
    "            <hr>\n" +
    "            <br>\n" +
    "            <div class=\"message-home\">\n" +
    "                <div class=\"interested-home\">Interested in working with NOVO?</div>\n" +
    "                <br>\n" +
    "                <div class=\"contact-us-home\">Email us at\n" +
    "                <a href=\"mailto:info@projectnovo.co\" style=\"color: #1db996;\">info@projectnovo.co</a></div> or <div class=\"contact-us-home\">Call us at one of our <span style=\"color: #1db996; font-weight: 500;\">four</span> locations!</div>\n" +
    "                <br>\n" +
    "                <div class=\"center-home\">\n" +
    "                    <div class=\"box2 small-medium-home\">\n" +
    "                        <img src=\"/images/contact/chap.jpeg\" class=\"img-fill opacity\">\n" +
    "                        <br>\n" +
    "                        <div class=\"city\" style=\"font-size: 22px;\">Chapel Hill, NC</div>\n" +
    "                        <a href=\"tel:+18656797229\">\n" +
    "                            <div class=\"subtitle\">(865) 679-7229</div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <br>\n" +
    "                    <div class=\"box2 small-medium-home\">\n" +
    "                        <img src=\"/images/contact/evanston.jpg\" class=\"img-fill opacity\">\n" +
    "                        <br>\n" +
    "                        <div class=\"city\" style=\"font-size: 22px;\">Chicago, IL</div>\n" +
    "                        <a href=\"tel:+18653876121\">\n" +
    "                            <div class=\"subtitle\">(865) 387-6121</div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <br>\n" +
    "                    <div class=\"box2 small-medium-home\">\n" +
    "                        <img src=\"/images/contact/knoxville.jpg\" class=\"img-fill opacity\">\n" +
    "                        <br>\n" +
    "                        <div class=\"city\" style=\"font-size: 22px;\">Knoxville, TN</div>\n" +
    "                        <a href=\"tel:+18656969382\">    \n" +
    "                            <div class=\"subtitle\">(865) 696-9382</div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <br>\n" +
    "                    <div class=\"box2 small-medium-home\">\n" +
    "                        <img src=\"/images/contact/philly.jpg\" class=\"img-fill opacity\">\n" +
    "                        <br>\n" +
    "                        <div class=\"city\" style=\"font-size: 22px;\">Philadelpia, PA</div>\n" +
    "                        <a href=\"tel:+13365800855\">\n" +
    "                            <div class=\"subtitle\">(336) 580-0855</div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <br>\n" +
    "                </div>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <br>\n" +
    "\n" +
    "    <div class=\"newsletter-section\">\n" +
    "        <br>\n" +
    "        <span class=\"newsletter-home\">Sign Up for our Monthly Newsletter!</span>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <div class=\"contact\" id=\"contact\">\n" +
    "            <div class=\"contact-section\">\n" +
    "                <form class=\"ctr\" action=\"//projectnovo.us11.list-manage.com/subscribe/post?u=a56f7f3f876fa9db4c36328af&amp;id=ff3d3ae826\" method=\"post\">\n" +
    "                    <div class=\"loader\"></div>\n" +
    "                    <input type=\"email\" name=\"EMAIL\" required>\n" +
    "                    <div class=\"indicator\" data-content=\"Type Your Email Address\"></div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n" +
    "            <div class=\"display-none\">\n" +
    "                <div style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_a56f7f3f876fa9db4c36328af_ff3d3ae826\" tabindex=\"-1\" value=\"\"></div>\n" +
    "                <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("portfolio/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("portfolio/index.tpl.html",
    "<div class=\"container\">\n" +
    "    <div id=\"\" class=\"info\">\n" +
    "        <div class=\"title\" style=\"font-weight:400;\">Quality, Modernity, and Transparency</div>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <div class=\"message\">\n" +
    "            Our clients know what it means to partner with NOVO. Our work exudes quality, employs the latest and greatest\n" +
    "            in marketing and web development, and we are transparent in our communication to clients and the outside\n" +
    "            world.\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            We believe our work speaks for itself.\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--make dynamic with angular-->\n" +
    "<div class='container' style=\"margin: 180px auto 0;\">\n" +
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
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "    <div id=\"absolute\" class=\"info\">\n" +
    "        <div class=\"title\">Absolute Yachts North America</div>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <div class=\"message\">\n" +
    "            Absolute is an Italian yacht brand based in Piacenza, Italy, manufacturing yachts\n" +
    "            ranging from 40 to 72 feet. Communicating the Absolute's focus on design, efficiency, performance\n" +
    "            and serviceability are a high priority. NOVO is responsible for Absolute North America's online marketing,\n" +
    "            including web design and development, email marketing, and social media marketing.\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"height:50px;\"></div>\n" +
    "        <div style=\"text-align:center;\" class=\"link\">\n" +
    "            <a style=\"color:#1db996\" href=\"www.absoluteyachtsna.com\">absoluteyachtsna.com</a>\n" +
    "        </div>\n" +
    "        <div style=\"height:80px;\"></div>\n" +
    "\n" +
    "        <a href=\"http://www.absoluteyachtsna.com/\" style=\"text-align:cener;\">\n" +
    "            <img src=\"/images/portfolio/absolute-screenshot.png\" class=\"img-fill\" style=\"width: 100%\">\n" +
    "        </a>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!--on click triangle show-->\n" +
    "    <!--<div id=\"client2\" class=\"info\">\n" +
    "        <div class=\"title\">Client 2</div>\n" +
    "        <div class=\"message\">hey client 2</div>\n" +
    "        <div class=\"link\"></div>\n" +
    "    </div>-->\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div style=\"height:100px;\"></div>\n" +
    "");
}]);

angular.module("portfolio/index1.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("portfolio/index1.tpl.html",
    "<div class=\"container\">\n" +
    "    <!--slideshow here-->\n" +
    "</div>\n" +
    "\n" +
    "<div class='container' style=\"margin: 180px auto 0;\">\n" +
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
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div id=\"absolute\" class=\"info\">\n" +
    "        <div class=\"title\">Absolute Yachts North America</div>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <div class=\"message\">Absolute is an Italian yacht brand based in Piacenza, Italy, manufacturing yachts\n" +
    "        ranging from 40 to 72 feet. Communicating the brand's focus on design, efficiency, performance\n" +
    "        and serviceability are a high priority. NOVO is responsible for Absolute North America's online marketing,\n" +
    "        including web design and development, email marketing, and social media marketing. The web site includes a\n" +
    "        home page, about page, dealer map, model information and galleries, and contact form.</div>\n" +
    "        <div class=\"link\"><a href=\"www.absoluteyachtsna.com\">absoluteyachtsna.com</a></div>\n" +
    "    </div>\n" +
    "    <div id=\"client2\" class=\"info\">\n" +
    "        <!--next client here-->\n" +
    "        <div class=\"title\"></div>\n" +
    "        <div class=\"message\"></div>\n" +
    "        <div class=\"link\"></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("sidebar/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sidebar/index.tpl.html",
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
    "       <div class=\"item-container\">\n" +
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
