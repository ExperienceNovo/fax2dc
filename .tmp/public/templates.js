angular.module('templates-app', ['about/about.tpl.html', 'about/index.tpl.html', 'blog-post/index.tpl.html', 'blog/index.tpl.html', 'contact/index.tpl.html', 'home/contact.tpl.html', 'home/index.tpl.html', 'home/portfolio.tpl.html', 'intro/index.tpl.html', 'portfolio/index.tpl.html', 'sidebar/index.tpl.html', 'templates/index.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"about-container\">\n" +
    "  <div class=\"tab-container\">\n" +
    "    <section class=\"tab-area tabs-checked\">\n" +
    "      <input class=\"tab-input\"checked=\"\" type=\"radio\" name=\"tab\" id=\"tab-A\">\n" +
    "      <input class=\"tab-input\" type=\"radio\" name=\"tab\" id=\"tab-B\">\n" +
    "      <input class=\"tab-input\" type=\"radio\" name=\"tab\" id=\"tab-C\">\n" +
    "      <section class=\"tab-nav\">\n" +
    "        <label class=\"tab-link col-lg-4 col-md-4 col-sm-12 col-xs-12 tab-pad\" for=\"tab-A\">Design</label>\n" +
    "        <label class=\"tab-link col-lg-4 col-md-4 col-sm-12 col-xs-12 tab-pad\" for=\"tab-B\">Development</label>\n" +
    "        <label class=\"tab-link col-lg-4 col-md-4 col-sm-12 col-xs-12 tab-pad mobile-pad\" for=\"tab-C\">Marketing</label>\n" +
    "      </section>\n" +
    "      <article class=\"tab col-md-12\">\n" +
    "        <div class=\"tab-inner\">\n" +
    "          <div class=\"col-md-6\">\n" +
    "\n" +
    "          </div>\n" +
    "          <div class=\"col-md-6\">\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </article>\n" +
    "      <article class=\"tab col-md-12\">\n" +
    "        <div class=\"tab-inner\">\n" +
    "          <div class=\"col-md-6\">\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </article>\n" +
    "      <article class=\"tab col-md-12\">\n" +
    "        <div class=\"tab-inner\">\n" +
    "          <div class=\"col-md-6\">\n" +
    "\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </article>\n" +
    "    </section>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<div class=\"surface-container-home\">\n" +
    "    <div class=\"about\" id=\"about\">\n" +
    "        <div class=\"about-tile-area\">\n" +
    "            <div class=\"about-row\">\n" +
    "                <div class=\"about-des right\" id=\"design-des\">\n" +
    "                    <div class=\"about-des-span\">\n" +
    "                        <p class=\"about-des-bold\">Graphics & Animation</p>\n" +
    "                        <p>Our in-house design team is second-to-none.</p>\n" +
    "                    </div>\n" +
    "                    <hr>\n" +
    "                    <div class=\"about-des-span\">\n" +
    "                        <p class=\"about-des-bold\">Company Branding</p>\n" +
    "                        <p>Work together with us and grow your brand.</p>\n" +
    "                    </div>\n" +
    "                    <hr>\n" +
    "                    <div class=\"about-des-span\">\n" +
    "                        <p class=\"about-des-bold\">UI/UX Design</p>\n" +
    "                        <p>Your customers' online experience should be pain-free.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"about-tile left\" style=\"\">\n" +
    "                    <div class=\"hovereffect\">\n" +
    "                        <img class=\"img-responsive\" id=\"design-div\" src=\"/images/about/designtile.jpg\" alt=\"\">\n" +
    "                        <div class=\"overlay-about\">\n" +
    "                            <h2 class=\"about-tile-title\" style=\"font-size: 30px;\">Design</h2>\n" +
    "                            <p class=\"hover-info\" style=\"margin-top: 3%;\">Graphics & Animation</p>\n" +
    "                            <p class=\"hover-info\">Company Branding</p>\n" +
    "                            <p class=\"hover-info\">UI/UX Design</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <a name=\"design-anchor\"></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"about-tile-area\" style=\"background:url(/images/texture-bg.png) repeat;\">\n" +
    "            <div class=\"about-row\">\n" +
    "                <div class=\"about-tile right\" style=\"\">\n" +
    "                    <div class=\"hovereffect\">\n" +
    "                        <img class=\"img-responsive\" id=\"dev-div\" src=\"/images/about/devtile.jpg\" alt=\"\">\n" +
    "                        <div class=\"overlay-about\">\n" +
    "                            <h2 class=\"about-tile-title\" style=\"font-size: 30px;\">Development</h2>\n" +
    "                            <p class=\"hover-info\" style=\"margin-top: 3%;\">Mobile-First Web Design</p>\n" +
    "                            <p class=\"hover-info\">SEO Structuring</p>\n" +
    "                            <p class=\"hover-info\">Back-End Software Integration</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"about-des left\" id=\"development-des\">\n" +
    "                    <div class=\"about-des-span\">\n" +
    "                        <p class=\"about-des-bold\">Mobile-First Design</p>\n" +
    "                        <p>Be ready for the mobile world; it's here.</p>\n" +
    "                    </div>\n" +
    "                    <hr>\n" +
    "                    <div class=\"about-des-span\">\n" +
    "                        <p class=\"about-des-bold\">SEO</p>\n" +
    "                        <p>Expand your online reach and outpace competitors.</p>\n" +
    "                    </div>\n" +
    "                    <hr>\n" +
    "                    <div class=\"about-des-span\">\n" +
    "                        <p class=\"about-des-bold\">Back-End Integration</p>\n" +
    "                        <p>Ensure security and full technological integration.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <a name=\"dev-anchor\"></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"about-tile-area\" style=\"background:url(/images/texture-bg.png) repeat;\">\n" +
    "            <div class=\"about-row\">\n" +
    "                <div class=\"about-des right\" id=\"marketing-des\">\n" +
    "                    <div class=\"about-des-span\">\n" +
    "                        <p class=\"about-des-bold\">Social Media Management</p>\n" +
    "                        <p>Extend your customer outreach.</p>\n" +
    "                    </div>\n" +
    "                    <hr>\n" +
    "                    <div class=\"about-des-span\">\n" +
    "                        <p class=\"about-des-bold\">Email Marketing</p>\n" +
    "                        <p>Manage current customers and secure new leads.</p>\n" +
    "                    </div>\n" +
    "                    <hr>\n" +
    "                    <div class=\"about-des-span\">\n" +
    "                        <p class=\"about-des-bold\">Content Creation</p>\n" +
    "                        <p>Establish and maintain your online presence with new content.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"about-tile left\" style=\"\">\n" +
    "                    <div class=\"hovereffect\">\n" +
    "                        <img class=\"img-responsive\" id=\"marketing-div\" src=\"/images/about/marketingtile.jpg\" alt=\"\">\n" +
    "                        <div class=\"overlay-about\">\n" +
    "                            <h2 class=\"about-tile-title\" style=\"font-size: 30px;\">Marketing</h2>\n" +
    "                            <p class=\"hover-info\" style=\"margin-top: 3%;\">Social Media Management</p>\n" +
    "                            <p class=\"hover-info\">Email Marketing</p>\n" +
    "                            <p class=\"hover-info\">Content Creation</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <a name=\"marketing-anchor\"></a>\n" +
    "            </div>\n" +
    "        </div><!-- end center -->\n" +
    "    </div> <!-- end about -->\n" +
    "</div><!-- end suface container -->");
}]);

angular.module("blog-post/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("blog-post/index.tpl.html",
    "<div ng-controller=\"BlogPostCtrl\">\n" +
    "	<div class=\"blog-post-container\">\n" +
    "		<div style=\"height:100px;\"></div>\n" +
    "		<div class=\"post-title-container\">\n" +
    "			<h1>{{post.title}}</h1>\n" +
    "		</div>\n" +
    "\n" +
    "		<hr>\n" +
    "\n" +
    "		<div class=\"post-content-container\">\n" +
    "			<div ng-bind-html=\"renderHtml(post.post_content)\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "		<br><br>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("blog/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("blog/index.tpl.html",
    "<!--if logged in-->\n" +
    "<div style=\"height:100px;\"></div>\n" +
    "<div ng-show=\"currentUser\">\n" +
    "\n" +
    "  <div>\n" +
    "    <form class=\"blog-input\" role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"text\" placeholder= \"post title\" ng-model=\"newPost.title\" class=\"form-control\" id=\"postTitle\">\n" +
    "        <input type=\"text\" placeholder= \"post url\" ng-model=\"newPost.url_title\" class=\"form-control\" id=\"postTitle\">\n" +
    "        <textarea placeholder= \"post content\"ng-model=\"newPost.post_content\" class=\"form-control\" id=\"postContent\"></textarea>\n" +
    "      </div>\n" +
    "      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "<!--/if logged in-->\n" +
    "<div class=\"post-list-container\">\n" +
    "  <br><br>\n" +
    "  <div class=\"post-container\" ng-repeat=\"post in posts | orderBy:'-createdAt'\">\n" +
    "    <h1 class=\"title\"><a href=\"/blog/{{post.url_title}}\">{{post.title}}</a></h1>\n" +
    "  </div>\n" +
    "  <br><br>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div style=\"height:100px;\"></div>");
}]);

angular.module("contact/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/index.tpl.html",
    "<style type=\"text/css\">\n" +
    "    .angular-google-map-container { height: 400px; }\n" +
    "</style>\n" +
    "<div class=\"title-surface-container\">\n" +
    "    <div class=\"stay-connected\">\n" +
    "        Stay Connected\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"contact-page-container\">\n" +
    "    <div id=\"icon-wrapper\">\n" +
    "        <div class=\"bt_wrap\">\n" +
    "            <div class=\"icon-box\">\n" +
    "                <a class=\"social-icon\"><i class=\"fa fa-facebook\"></i></a>\n" +
    "                <a class=\"social-icon2\" href=\"https://www.facebook.com/experienceNOVO\"><i class=\"fa fa-facebook\"></i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"bt_wrap\">\n" +
    "            <div class=\"icon-box\">\n" +
    "                <a class=\"social-icon\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "                <a class=\"social-icon2\" href=\"https://twitter.com/experienceNOVO\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"bt_wrap\">\n" +
    "            <div class=\"icon-box\">\n" +
    "                <a class=\"social-icon\"><i class=\"fa fa-linkedin\"></i></a>\n" +
    "                <a class=\"social-icon2\" href=\"https://www.linkedin.com/company/novo---web-design-web-development-&-online-marketing?trk=biz-companies-cym\"><i class=\"fa fa-linkedin\"></i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br><br>\n" +
    "    <div class=\"contact-title-location\">\n" +
    "        <p>Four Locations Nationwide</p>\n" +
    "        <hr>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12 center\">\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <div class=\"card-wrapper\">\n" +
    "                    <div class=\"flipper\">\n" +
    "                        <div class=\"card-front trev\">\n" +
    "                            <div class=\"card-logo\">\n" +
    "                                <h2>NC</h2>\n" +
    "                            </div>\n" +
    "                            <div class=\"oval\"></div>\n" +
    "                        </div>\n" +
    "                        <a href=\"tel:+18656797229\">\n" +
    "                            <div class=\"card-back\">\n" +
    "                                <h1 class=\"card-name\">Trevor Overman</h1>\n" +
    "                                <h3 class=\"card-about\">Chapel Hill, NC</h3><br>\n" +
    "                                <h3 class=\"card-about ca-bold\">Back-End Development</h3>\n" +
    "                                <h3 class=\"contact-info\">(865) 679-7229</h3>\n" +
    "                            </div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <div class=\"card-wrapper\">\n" +
    "                    <div class=\"flipper\">\n" +
    "                        <div class=\"card-front val\">\n" +
    "                            <div class=\"card-logo\">\n" +
    "                                <h2>IL</h2>\n" +
    "                            </div>\n" +
    "                            <div class=\"oval\"></div>\n" +
    "                        </div>\n" +
    "                        <a href=\"tel:+18653876121\">\n" +
    "                            <div class=\"card-back\">\n" +
    "                                <h1 class=\"card-name\">Valentino Constantinou</h1>\n" +
    "                                <h3 class=\"card-about\">Chicago, Il</h3><br>\n" +
    "                                <h3 class=\"card-about ca-bold\">Data Science & Front-End</h3>\n" +
    "                                <h3 class=\"contact-info\">(865) 387-6121</h3>\n" +
    "                            </div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <div class=\"card-wrapper\">\n" +
    "                    <div class=\"flipper\">\n" +
    "                        <div class=\"card-front gh\">\n" +
    "                            <div class=\"card-logo\">\n" +
    "                                <h2>TN</h2>\n" +
    "                            </div>\n" +
    "                            <div class=\"oval\"></div>\n" +
    "                        </div>\n" +
    "                        <a href=\"tel:+18656969382\">\n" +
    "                            <div class=\"card-back\">\n" +
    "                                <h1 class=\"card-name\">Garrett Headden</h1>\n" +
    "                                <h3 class=\"card-about\">Knoxville, TN</h3><br>\n" +
    "                                <h3 class=\"card-about ca-bold\">Marketing & Content</h3>\n" +
    "                                <h3 class=\"contact-info\">(865) 696-9382</h3>\n" +
    "                            </div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <div class=\"card-wrapper\">\n" +
    "                    <div class=\"flipper\">\n" +
    "                        <div class=\"card-front mt\">\n" +
    "                            <div class=\"card-logo\">\n" +
    "                                <h2>PA</h2>\n" +
    "                            </div>\n" +
    "                            <div class=\"oval\"></div>\n" +
    "                        </div>\n" +
    "                        <a href=\"tel:+13365800855\">\n" +
    "                            <div class=\"card-back\">\n" +
    "                                <h1 class=\"card-name\">Michael Thompson</h1>\n" +
    "                                <h3 class=\"card-about\">Philadelphia, PA</h3><br>\n" +
    "                                <h3 class=\"card-about ca-bold\">Front-End & Web Design</h3>\n" +
    "                                <h3 class=\"contact-info\">(336) 580-0855</h3>\n" +
    "                            </div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6 bottom-contact\">\n" +
    "            <div class=\"contact-title-location\">\n" +
    "                <p>Work With Us</p>\n" +
    "                <hr>\n" +
    "            </div>\n" +
    "            <div class=\"margin\">\n" +
    "            <!--did someone already set up form submission code? -->\n" +
    "            <form action=\"mailto:info@projectnovo.com\">\n" +
    "                <div class=\"inputGroup\">\n" +
    "                    <input required=\"\" type=\"text\"> \n" +
    "                    <span class=\"inputBar\"></span> \n" +
    "                    <label>Name</label>\n" +
    "                </div>\n" +
    "                <div class=\"inputGroup\">\n" +
    "                    <input required=\"\" type=\"text\"> \n" +
    "                    <span class=\"inputBar\"></span> \n" +
    "                    <label>Email</label>\n" +
    "                </div>\n" +
    "                <div class=\"inputGroup\">\n" +
    "                    <textarea required=\"\"></textarea> \n" +
    "                    <span class=\"inputBar\"></span> \n" +
    "                    <label>Message</label>\n" +
    "                </div>\n" +
    "                <button>Send</button>\n" +
    "            </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6 bottom-contact\">\n" +
    "            <div class=\"gmap-container\">\n" +
    "                <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                    <ui-gmap-marker coords=\"marker1.coords\" options=\"marker1.options\" idkey=\"marker1.id\">\n" +
    "                        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                            <div>\n" +
    "                                <div style=\"font-size: 15px;\">Evanston, IL (Chicago)</div>\n" +
    "                                <br>Valentino Constantinou\n" +
    "                                <br>phone: (865) 387-6121\n" +
    "                                <br>email: <a href=\"mailto:info@projectnovo.com\">info@projectnovo.com</a>\n" +
    "                                <br>\n" +
    "                            </div>\n" +
    "                        </ui-gmap-window>\n" +
    "                    </ui-gmap-marker>\n" +
    "                    <ui-gmap-marker coords=\"marker2.coords\" options=\"marker2.options\" idkey=\"marker2.id\">\n" +
    "                        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                            <div>\n" +
    "                                <div style=\"font-size: 15px;\">Knoxville, TN</div>\n" +
    "                                <br>Garrett Headden\n" +
    "                                <br>phone: (865) 696-9382\n" +
    "                                <br>email: <a href=\"mailto:info@projectnovo.com\">info@projectnovo.com</a>\n" +
    "                                <br>\n" +
    "                            </div>\n" +
    "                        </ui-gmap-window>\n" +
    "                    </ui-gmap-marker>\n" +
    "                    <ui-gmap-marker coords=\"marker3.coords\" options=\"marker3.options\" idkey=\"marker3.id\">\n" +
    "                        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                            <div>\n" +
    "                                <div style=\"font-size: 15px;\">Chapel Hill, NC (Raleigh)</div>\n" +
    "                                <br>Trevor Overman\n" +
    "                                <br>phone: (865) 679-7229\n" +
    "                                <br>email: <a href=\"mailto:info@projectnovo.com\">info@projectnovo.com</a>\n" +
    "                                <br>\n" +
    "                            </div>\n" +
    "                        </ui-gmap-window>\n" +
    "                    </ui-gmap-marker>\n" +
    "                    <ui-gmap-marker coords=\"marker4.coords\" options=\"marker4.options\"idkey=\"marker4.id\">\n" +
    "                        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                            <div>\n" +
    "                                <div style=\"font-size: 15px;\">Philadelphia, PA</div>\n" +
    "                                <br>Michael Thompson\n" +
    "                                <br>phone: (336) 580-0855\n" +
    "                                <br>email: <a href=\"mailto:info@projectnovo.com\">info@projectnovo.com</a>\n" +
    "                                <br>\n" +
    "                            </div>\n" +
    "                        </ui-gmap-window>\n" +
    "                    </ui-gmap-marker>\n" +
    "                </ui-gmap-google-map>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"footer\">\n" +
    "        <div class=\"footer-text\">© 2015 NOVO, LLC.</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <!--\n" +
    "-->\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("home/contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/contact.tpl.html",
    "<div class=\"contact\">\n" +
    "    <div class=\"contact-container\">\n" +
    "      <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewcontact=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "        <symbol id=\"contact-text\">\n" +
    "          <text text-anchor=\"middle\"\n" +
    "                x=\"960\"  \n" +
    "                y=\"530\"\n" +
    "                dy=\".35em\"\n" +
    "                class=\"large-medium-text\"\n" +
    "                >\n" +
    "            let's talk\n" +
    "          </text>    \n" +
    "        </symbol>\n" +
    "        <mask id=\"contact-mask\"\n" +
    "              maskunits=\"userSpaceOnUse\"\n" +
    "              maskcontentunits=\"userSpaceOnUse\">\n" +
    "          <rect\n" +
    "                width=\"100%\"\n" +
    "                height=\"100%\"\n" +
    "                class=\"mask__shape\">\n" +
    "          </rect>\n" +
    "          <use xlink:href=\"#contact-text\"\n" +
    "               class=\"mask__text\"\n" +
    "               ></use>\n" +
    "        </mask>\n" +
    "      </svg>\n" +
    "      <div class=\"contact-box\">\n" +
    "        <a href=\"/contact/\">\n" +
    "          <div class=\"text-fill\">\n" +
    "            <img id=\"contact-img-desktop\" src=\"/images/s1.jpg\"/>\n" +
    "            <img id=\"contact-img-mobile\" src=\"/images/key-m.jpg\"/>\n" +
    "          </div>\n" +
    "          <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewcontact=\"0 0 1920 1080\" \n" +
    "               preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <rect\n" +
    "              id=\"contact-rect\"\n" +
    "              width=\"100%\"\n" +
    "              height=\"100%\"\n" +
    "              mask=\"url(#contact-mask)\"\n" +
    "              class=\"contact--fill\"/>\n" +
    "            <use \n" +
    "                id=\"fill-hover\"\n" +
    "                xlink:href=\"#contact-text\"\n" +
    "                class=\"text--transparent\">\n" +
    "            </use>\n" +
    "          </svg> \n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<div class=\"surface-container-home\">\n" +
    "  	<div ng-include=\"'intro/index.tpl.html'\"></div>\n" +
    "\n" +
    "    <div ng-include=\"'about/about.tpl.html'\"></div>\n" +
    "\n" +
    "    <div ng-include=\"'home/portfolio.tpl.html'\"></div>\n" +
    "\n" +
    "    <div ng-include=\"'home/contact.tpl.html'\"></div>\n" +
    "\n" +
    "    <div class=\"footer\">\n" +
    "        <div class=\"footer-text\">© 2015 NOVO, LLC.</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/portfolio.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/portfolio.tpl.html",
    "<div class=\"port\">\n" +
    "    <div class=\"port-container\">\n" +
    "      <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "        <symbol id=\"port-text\">\n" +
    "          <text text-anchor=\"middle\"\n" +
    "                x=\"960\"  \n" +
    "                y=\"530\"\n" +
    "                dy=\".35em\"\n" +
    "                class=\"large-medium-text\"\n" +
    "                >\n" +
    "            portfolio\n" +
    "          </text>    \n" +
    "        </symbol>\n" +
    "        <mask id=\"mask-text\"\n" +
    "              maskunits=\"userSpaceOnUse\"\n" +
    "              maskcontentunits=\"userSpaceOnUse\">\n" +
    "          <rect\n" +
    "                width=\"100%\"\n" +
    "                height=\"100%\"\n" +
    "                class=\"mask__shape\">\n" +
    "          </rect>\n" +
    "          <use xlink:href=\"#port-text\"\n" +
    "               class=\"mask__text\"\n" +
    "               ></use>\n" +
    "        </mask>\n" +
    "      </svg>\n" +
    "      <div class=\"port-box\">\n" +
    "        <a href=\"/portfolio/\">\n" +
    "          <div class=\"text-fill\">\n" +
    "            <video \n" +
    "                class=\"video\" \n" +
    "                src=\"/videos/drawing.webm\" \n" +
    "                preload=\"auto\" \n" +
    "                autoplay=\"autoplay\" \n" +
    "                loop=\"loop\" \n" +
    "                muted=\"muted\">\n" +
    "            </video>\n" +
    "            <img class=\"port-mobile\" src=\"/images/m2.jpg\"></img>\n" +
    "          </div>\n" +
    "          <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" \n" +
    "               preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\" >\n" +
    "            <rect\n" +
    "              id=\"port-rect\"\n" +
    "              width=\"100%\"\n" +
    "              height=\"100%\"\n" +
    "              mask=\"url(#mask-text)\"\n" +
    "              class=\"port--fill\"/>\n" +
    "            <use \n" +
    "                id=\"fill-hover\"\n" +
    "                xlink:href=\"#port-text\"\n" +
    "                class=\"text--transparent\">\n" +
    "            </use>\n" +
    "          </svg> \n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>");
}]);

angular.module("intro/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("intro/index.tpl.html",
    "<div class=\"intro\">\n" +
    "  <div class=\"intro-container\">\n" +
    "\n" +
    "      <div class=\"desktop\">\n" +
    "        <!-- this svg is invisible yo -->\n" +
    "        <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <symbol id=\"intro-desktop-text\">\n" +
    "            <text text-anchor=\"middle\"\n" +
    "                  x=\"960\"  \n" +
    "                  y=\"560\"\n" +
    "                  dy=\".35em\"\n" +
    "                  class=\"medium-text\"\n" +
    "                  >\n" +
    "              full-stack design, development, and marketing\n" +
    "            </text>    \n" +
    "          </symbol>\n" +
    "          <mask id=\"intro-desktop-mask\"\n" +
    "                maskunits=\"userSpaceOnUse\"\n" +
    "                maskcontentunits=\"userSpaceOnUse\">\n" +
    "            <rect\n" +
    "                  width=\"100%\"\n" +
    "                  height=\"100%\"\n" +
    "                  class=\"mask__shape\">\n" +
    "            </rect>\n" +
    "            <use xlink:href=\"#intro-desktop-text\"\n" +
    "                 class=\"mask__text\"\n" +
    "                 ></use>\n" +
    "            <use xlink:href=\"#intro-desktop-novo\" />\n" +
    "          </mask>\n" +
    "        </svg>\n" +
    "        <!--                  |\n" +
    "            so is this one    v    -->\n" +
    "        <svg style=\"display: none;\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <symbol id=\"intro-desktop-novo\">\n" +
    "            <path transform=\"translate(375,560) scale(0.09,-0.09)\" d=\"m4315 3849c-390 -27 -601 -107 -745 -281c-136 -162 -180 -345 -196 -800l-7 -208l-158 0l-159 0l-2 643l-3 642l-156 3c-123 2 -159 0 -168 -11c-8 -10 -12 -309 -13 -1112l-3 -1098l-350 415c-192 229 -608 722 -922 1096c-315 374 -580 687 -589 696c-14 14 -53 16 -327 14l-312 -3l0 -1315l0 -1315l154 -3c104 -2 158 1 167 9c12 10 14 197 14 1180l0 1169l39 0l38 0l1004 -1180l1004 -1180l210 2l210 3l3 588l2 587l164 0l163 0l6 -172c13 -368 58 -541 181 -704c117 -156 303 -240 618 -280c176 -22 971 -32 1226 -15c198 13 369 40 463 72c277 94 430 284 483 599c17 105 36 327 36 433l0 67l456 -2l456 -3l297 -585l297 -585l210 -2l209 -3l300 590l300 590l461 0l461 0l6 -172c19 -517 122 -741 406 -883c184 -92 378 -116 985 -122c617 -7 909 14 1097 78c277 94 430 284 483 599c17 105 36 327 36 433l0 67l380 0l380 0l0 85l0 85l-378 0l-378 0l-12 238c-13 251 -33 434 -57 518c-30 103 -94 214 -169 289c-83 84 -147 122 -273 165c-206 69 -444 90 -1008 90c-748 0 -983 -37 -1191 -185c-121 -87 -215 -228 -255 -384c-28 -109 -47 -286 -55 -523l-7 -208l-414 0l-415 0l65 123c35 67 174 338 307 602c134 264 250 488 258 498c12 14 13 22 4 42l-12 25l-1511 -2c-1373 -3 -1513 -4 -1522 -19c-8 -12 5 -46 56 -145c456 -897 567 -1117 567 -1120c0 -2 -184 -4 -408 -4l-408 0l-12 238c-13 251 -33 434 -57 518c-8 28 -33 89 -56 134c-49 98 -152 208 -239 258c-129 72 -344 122 -615 142c-160 11 -934 11 -1100 -1zm4766 -391c-69 -133 -371 -718 -760 -1472c-114 -220 -211 -401 -217 -403c-6 -2 -64 101 -129 229c-65 128 -180 352 -255 498c-213 412 -650 1268 -650 1274c0 3 468 6 1040 6l1040 0l-69 -132zm-3621 41c256 -18 383 -57 454 -141c42 -49 92 -165 112 -258c14 -70 34 -337 34 -467l0 -73l-1182 0l-1181 0l7 178c23 602 120 727 587 761c169 12 1001 12 1169 0zm6460 0c256 -18 383 -57 454 -141c42 -49 92 -165 112 -258c14 -70 34 -337 34 -467l0 -73l-1182 0l-1181 0l7 178c23 602 120 727 587 761c169 12 1001 12 1169 0zm-5873 -1266c-12 -289 -50 -426 -147 -524c-103 -105 -202 -125 -674 -140c-400 -12 -976 1 -1116 26c-156 29 -260 96 -315 205c-48 95 -85 314 -85 506l0 84l1172 0l1171 0l-6 -157zm6460 0c-12 -289 -50 -426 -147 -524c-103 -105 -202 -125 -674 -140c-400 -12 -976 1 -1116 26c-156 29 -260 96 -315 205c-48 95 -85 314 -85 506l0 84l1172 0l1171 0l-6 -157z\"/>\n" +
    "          </symbol>\n" +
    "        </svg>\n" +
    "\n" +
    "        <!-- this is a box... with some text n vids n stuff-->\n" +
    "        <div class=\"box-with-text\">\n" +
    "          <div class=\"text-fill\">\n" +
    "            <video \n" +
    "                class=\"video\" \n" +
    "                src=\"//secure-c.vimeocdn.com/p/video/yosemite_hd_ii_hd.webm#t=97,300\" \n" +
    "                preload=\"auto\" \n" +
    "                autoplay=\"autoplay\" \n" +
    "                loop=\"loop\" \n" +
    "                muted=\"muted\">\n" +
    "            </video>\n" +
    "          </div>\n" +
    "          <!-- this is the sweet, visible novo one -->\n" +
    "          <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" \n" +
    "               preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <rect\n" +
    "              width=\"100%\"\n" +
    "              height=\"100%\"\n" +
    "              mask=\"url(#intro-desktop-mask)\"\n" +
    "              class=\"shape--fill\"/>\n" +
    "            <use xlink:href=\"#intro-desktop-text\"\n" +
    "                class=\"text--transparent\">\n" +
    "            </use>\n" +
    "          </svg> \n" +
    "        </div>\n" +
    "        <div class=\"continue-wrap\">\n" +
    "          <div class=\"svg-wrapper\">\n" +
    "            <svg height=\"60\" width=\"320\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "              <rect class=\"shape\" height=\"60\" width=\"320\" />\n" +
    "            </svg>\n" +
    "            <div class=\"text\">Continue</div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- mobile classes yo - mobile, small, smallest -->\n" +
    "      <div class=\"mobile\">\n" +
    "        <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <symbol id=\"intro-mobile-txt\">\n" +
    "            <text text-anchor=\"middle\"\n" +
    "                  x=\"960\"  \n" +
    "                  y=\"560\"\n" +
    "                  dy=\".35em\"\n" +
    "                  class=\"small-text\"\n" +
    "                  >\n" +
    "              full-stack design,\n" +
    "            </text> \n" +
    "            <text text-anchor=\"middle\"\n" +
    "                  x=\"960\"  \n" +
    "                  y=\"575\"\n" +
    "                  dy=\"1.5em\"\n" +
    "                  class=\"small-text\"\n" +
    "                  >\n" +
    "              development, and marketing\n" +
    "            </text>   \n" +
    "          </symbol>\n" +
    "          <mask id=\"intro-mobile-mask\"\n" +
    "                maskunits=\"userSpaceOnUse\"\n" +
    "                maskcontentunits=\"userSpaceOnUse\">\n" +
    "            <rect\n" +
    "                  width=\"100%\"\n" +
    "                  height=\"100%\"\n" +
    "                  class=\"mask__shape\">\n" +
    "            </rect>\n" +
    "            <use xlink:href=\"#intro-mobile-txt\"\n" +
    "                 class=\"mask__text\"\n" +
    "                 ></use>\n" +
    "            <use xlink:href=\"#intro-mobile-novo\" />\n" +
    "          </mask>\n" +
    "        </svg>\n" +
    "\n" +
    "        <svg style=\"display: none;\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <symbol id=\"intro-mobile-novo\">\n" +
    "            <path transform=\"translate(515,530) scale(0.07,-0.07)\" d=\"m4315 3849c-390 -27 -601 -107 -745 -281c-136 -162 -180 -345 -196 -800l-7 -208l-158 0l-159 0l-2 643l-3 642l-156 3c-123 2 -159 0 -168 -11c-8 -10 -12 -309 -13 -1112l-3 -1098l-350 415c-192 229 -608 722 -922 1096c-315 374 -580 687 -589 696c-14 14 -53 16 -327 14l-312 -3l0 -1315l0 -1315l154 -3c104 -2 158 1 167 9c12 10 14 197 14 1180l0 1169l39 0l38 0l1004 -1180l1004 -1180l210 2l210 3l3 588l2 587l164 0l163 0l6 -172c13 -368 58 -541 181 -704c117 -156 303 -240 618 -280c176 -22 971 -32 1226 -15c198 13 369 40 463 72c277 94 430 284 483 599c17 105 36 327 36 433l0 67l456 -2l456 -3l297 -585l297 -585l210 -2l209 -3l300 590l300 590l461 0l461 0l6 -172c19 -517 122 -741 406 -883c184 -92 378 -116 985 -122c617 -7 909 14 1097 78c277 94 430 284 483 599c17 105 36 327 36 433l0 67l380 0l380 0l0 85l0 85l-378 0l-378 0l-12 238c-13 251 -33 434 -57 518c-30 103 -94 214 -169 289c-83 84 -147 122 -273 165c-206 69 -444 90 -1008 90c-748 0 -983 -37 -1191 -185c-121 -87 -215 -228 -255 -384c-28 -109 -47 -286 -55 -523l-7 -208l-414 0l-415 0l65 123c35 67 174 338 307 602c134 264 250 488 258 498c12 14 13 22 4 42l-12 25l-1511 -2c-1373 -3 -1513 -4 -1522 -19c-8 -12 5 -46 56 -145c456 -897 567 -1117 567 -1120c0 -2 -184 -4 -408 -4l-408 0l-12 238c-13 251 -33 434 -57 518c-8 28 -33 89 -56 134c-49 98 -152 208 -239 258c-129 72 -344 122 -615 142c-160 11 -934 11 -1100 -1zm4766 -391c-69 -133 -371 -718 -760 -1472c-114 -220 -211 -401 -217 -403c-6 -2 -64 101 -129 229c-65 128 -180 352 -255 498c-213 412 -650 1268 -650 1274c0 3 468 6 1040 6l1040 0l-69 -132zm-3621 41c256 -18 383 -57 454 -141c42 -49 92 -165 112 -258c14 -70 34 -337 34 -467l0 -73l-1182 0l-1181 0l7 178c23 602 120 727 587 761c169 12 1001 12 1169 0zm6460 0c256 -18 383 -57 454 -141c42 -49 92 -165 112 -258c14 -70 34 -337 34 -467l0 -73l-1182 0l-1181 0l7 178c23 602 120 727 587 761c169 12 1001 12 1169 0zm-5873 -1266c-12 -289 -50 -426 -147 -524c-103 -105 -202 -125 -674 -140c-400 -12 -976 1 -1116 26c-156 29 -260 96 -315 205c-48 95 -85 314 -85 506l0 84l1172 0l1171 0l-6 -157zm6460 0c-12 -289 -50 -426 -147 -524c-103 -105 -202 -125 -674 -140c-400 -12 -976 1 -1116 26c-156 29 -260 96 -315 205c-48 95 -85 314 -85 506l0 84l1172 0l1171 0l-6 -157z\"/>\n" +
    "          </symbol>\n" +
    "        </svg>\n" +
    "\n" +
    "        <div class=\"box-with-text\">\n" +
    "          <div class=\"text-fill\">\n" +
    "            <video \n" +
    "                class=\"video\" \n" +
    "                src=\"//secure-c.vimeocdn.com/p/video/yosemite_hd_ii_hd.webm#t=97,300\" \n" +
    "                preload=\"auto\" \n" +
    "                autoplay=\"autoplay\" \n" +
    "                loop=\"loop\" \n" +
    "                muted=\"muted\">\n" +
    "            </video>\n" +
    "          </div>\n" +
    "\n" +
    "          <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" \n" +
    "               preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <rect\n" +
    "              width=\"100%\"\n" +
    "              height=\"100%\"\n" +
    "              mask=\"url(#intro-mobile-mask)\"\n" +
    "              class=\"shape--fill\"/>\n" +
    "            <use xlink:href=\"#intro-mobile-txt\"\n" +
    "                class=\"text--transparent\">\n" +
    "            </use>\n" +
    "          </svg> \n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"mobile-small\">\n" +
    "        <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <symbol id=\"intro-small-txt\">\n" +
    "            <text text-anchor=\"middle\"\n" +
    "                  x=\"950\"  \n" +
    "                  y=\"400\"\n" +
    "                  dy=\".35em\"\n" +
    "                  class=\"small-text\"\n" +
    "                  >\n" +
    "              full-stack design,\n" +
    "            </text> \n" +
    "            <text text-anchor=\"middle\"\n" +
    "                  x=\"950\"  \n" +
    "                  y=\"420\"\n" +
    "                  dy=\"1.5em\"\n" +
    "                  class=\"small-text\"\n" +
    "                  >\n" +
    "              development, and marketing\n" +
    "            </text>   \n" +
    "          </symbol>\n" +
    "          <mask id=\"intro-small-mask\"\n" +
    "                maskunits=\"userSpaceOnUse\"\n" +
    "                maskcontentunits=\"userSpaceOnUse\">\n" +
    "            <rect\n" +
    "                  width=\"100%\"\n" +
    "                  height=\"100%\"\n" +
    "                  class=\"mask__shape\">\n" +
    "            </rect>\n" +
    "            <use xlink:href=\"#intro-small-txt\"\n" +
    "                 class=\"mask__text\"\n" +
    "                 ></use>\n" +
    "            <use xlink:href=\"#intro-small-novo\" />\n" +
    "          </mask>\n" +
    "        </svg>\n" +
    "\n" +
    "        <svg style=\"display: none;\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <symbol id=\"intro-small-novo\">\n" +
    "            <path transform=\"translate(620,340) scale(0.05,-0.05)\" d=\"m4315 3849c-390 -27 -601 -107 -745 -281c-136 -162 -180 -345 -196 -800l-7 -208l-158 0l-159 0l-2 643l-3 642l-156 3c-123 2 -159 0 -168 -11c-8 -10 -12 -309 -13 -1112l-3 -1098l-350 415c-192 229 -608 722 -922 1096c-315 374 -580 687 -589 696c-14 14 -53 16 -327 14l-312 -3l0 -1315l0 -1315l154 -3c104 -2 158 1 167 9c12 10 14 197 14 1180l0 1169l39 0l38 0l1004 -1180l1004 -1180l210 2l210 3l3 588l2 587l164 0l163 0l6 -172c13 -368 58 -541 181 -704c117 -156 303 -240 618 -280c176 -22 971 -32 1226 -15c198 13 369 40 463 72c277 94 430 284 483 599c17 105 36 327 36 433l0 67l456 -2l456 -3l297 -585l297 -585l210 -2l209 -3l300 590l300 590l461 0l461 0l6 -172c19 -517 122 -741 406 -883c184 -92 378 -116 985 -122c617 -7 909 14 1097 78c277 94 430 284 483 599c17 105 36 327 36 433l0 67l380 0l380 0l0 85l0 85l-378 0l-378 0l-12 238c-13 251 -33 434 -57 518c-30 103 -94 214 -169 289c-83 84 -147 122 -273 165c-206 69 -444 90 -1008 90c-748 0 -983 -37 -1191 -185c-121 -87 -215 -228 -255 -384c-28 -109 -47 -286 -55 -523l-7 -208l-414 0l-415 0l65 123c35 67 174 338 307 602c134 264 250 488 258 498c12 14 13 22 4 42l-12 25l-1511 -2c-1373 -3 -1513 -4 -1522 -19c-8 -12 5 -46 56 -145c456 -897 567 -1117 567 -1120c0 -2 -184 -4 -408 -4l-408 0l-12 238c-13 251 -33 434 -57 518c-8 28 -33 89 -56 134c-49 98 -152 208 -239 258c-129 72 -344 122 -615 142c-160 11 -934 11 -1100 -1zm4766 -391c-69 -133 -371 -718 -760 -1472c-114 -220 -211 -401 -217 -403c-6 -2 -64 101 -129 229c-65 128 -180 352 -255 498c-213 412 -650 1268 -650 1274c0 3 468 6 1040 6l1040 0l-69 -132zm-3621 41c256 -18 383 -57 454 -141c42 -49 92 -165 112 -258c14 -70 34 -337 34 -467l0 -73l-1182 0l-1181 0l7 178c23 602 120 727 587 761c169 12 1001 12 1169 0zm6460 0c256 -18 383 -57 454 -141c42 -49 92 -165 112 -258c14 -70 34 -337 34 -467l0 -73l-1182 0l-1181 0l7 178c23 602 120 727 587 761c169 12 1001 12 1169 0zm-5873 -1266c-12 -289 -50 -426 -147 -524c-103 -105 -202 -125 -674 -140c-400 -12 -976 1 -1116 26c-156 29 -260 96 -315 205c-48 95 -85 314 -85 506l0 84l1172 0l1171 0l-6 -157zm6460 0c-12 -289 -50 -426 -147 -524c-103 -105 -202 -125 -674 -140c-400 -12 -976 1 -1116 26c-156 29 -260 96 -315 205c-48 95 -85 314 -85 506l0 84l1172 0l1171 0l-6 -157z\"/>\n" +
    "          </symbol>\n" +
    "        </svg>\n" +
    "\n" +
    "        <div class=\"box-with-text\">\n" +
    "          <div class=\"text-fill\">\n" +
    "            <video \n" +
    "                class=\"video\" \n" +
    "                src=\"//secure-c.vimeocdn.com/p/video/yosemite_hd_ii_hd.webm#t=97,300\" \n" +
    "                preload=\"auto\" \n" +
    "                autoplay=\"autoplay\" \n" +
    "                loop=\"loop\" \n" +
    "                muted=\"muted\">\n" +
    "            </video>\n" +
    "          </div>\n" +
    "\n" +
    "          <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" \n" +
    "               preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <rect\n" +
    "              width=\"100%\"\n" +
    "              height=\"100%\"\n" +
    "              mask=\"url(#intro-small-mask)\"\n" +
    "              class=\"shape--fill\"/>\n" +
    "            <use xlink:href=\"#intro-small-txt\"\n" +
    "                class=\"text--transparent\">\n" +
    "            </use>\n" +
    "          </svg> \n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"mobile-smallest\">\n" +
    "        <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <symbol id=\"intro-smallest-txt\">\n" +
    "            <text text-anchor=\"middle\"\n" +
    "                  x=\"960\"  \n" +
    "                  y=\"500\"\n" +
    "                  dy=\".35em\"\n" +
    "                  class=\"smaller-text\"\n" +
    "                  >\n" +
    "              full-stack design,\n" +
    "            </text> \n" +
    "            <text text-anchor=\"middle\"\n" +
    "                  x=\"960\"  \n" +
    "                  y=\"520\"\n" +
    "                  dy=\"1.5em\"\n" +
    "                  class=\"smaller-text\"\n" +
    "                  >\n" +
    "              development, and marketing\n" +
    "            </text>   \n" +
    "          </symbol>\n" +
    "          <mask id=\"intro-smallest-mask\"\n" +
    "                maskunits=\"userSpaceOnUse\"\n" +
    "                maskcontentunits=\"userSpaceOnUse\">\n" +
    "            <rect\n" +
    "                  width=\"100%\"\n" +
    "                  height=\"100%\"\n" +
    "                  class=\"mask__shape\">\n" +
    "            </rect>\n" +
    "            <use xlink:href=\"#intro-smallest-txt\"\n" +
    "                 class=\"mask__text\"\n" +
    "                 ></use>\n" +
    "            <use xlink:href=\"#intro-smallest-novo\" />\n" +
    "          </mask>\n" +
    "        </svg>\n" +
    "\n" +
    "        <svg style=\"display: none;\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <symbol id=\"intro-smallest-novo\">\n" +
    "            <path transform=\"translate(730,340) scale(0.035,-0.035)\" d=\"m4315 3849c-390 -27 -601 -107 -745 -281c-136 -162 -180 -345 -196 -800l-7 -208l-158 0l-159 0l-2 643l-3 642l-156 3c-123 2 -159 0 -168 -11c-8 -10 -12 -309 -13 -1112l-3 -1098l-350 415c-192 229 -608 722 -922 1096c-315 374 -580 687 -589 696c-14 14 -53 16 -327 14l-312 -3l0 -1315l0 -1315l154 -3c104 -2 158 1 167 9c12 10 14 197 14 1180l0 1169l39 0l38 0l1004 -1180l1004 -1180l210 2l210 3l3 588l2 587l164 0l163 0l6 -172c13 -368 58 -541 181 -704c117 -156 303 -240 618 -280c176 -22 971 -32 1226 -15c198 13 369 40 463 72c277 94 430 284 483 599c17 105 36 327 36 433l0 67l456 -2l456 -3l297 -585l297 -585l210 -2l209 -3l300 590l300 590l461 0l461 0l6 -172c19 -517 122 -741 406 -883c184 -92 378 -116 985 -122c617 -7 909 14 1097 78c277 94 430 284 483 599c17 105 36 327 36 433l0 67l380 0l380 0l0 85l0 85l-378 0l-378 0l-12 238c-13 251 -33 434 -57 518c-30 103 -94 214 -169 289c-83 84 -147 122 -273 165c-206 69 -444 90 -1008 90c-748 0 -983 -37 -1191 -185c-121 -87 -215 -228 -255 -384c-28 -109 -47 -286 -55 -523l-7 -208l-414 0l-415 0l65 123c35 67 174 338 307 602c134 264 250 488 258 498c12 14 13 22 4 42l-12 25l-1511 -2c-1373 -3 -1513 -4 -1522 -19c-8 -12 5 -46 56 -145c456 -897 567 -1117 567 -1120c0 -2 -184 -4 -408 -4l-408 0l-12 238c-13 251 -33 434 -57 518c-8 28 -33 89 -56 134c-49 98 -152 208 -239 258c-129 72 -344 122 -615 142c-160 11 -934 11 -1100 -1zm4766 -391c-69 -133 -371 -718 -760 -1472c-114 -220 -211 -401 -217 -403c-6 -2 -64 101 -129 229c-65 128 -180 352 -255 498c-213 412 -650 1268 -650 1274c0 3 468 6 1040 6l1040 0l-69 -132zm-3621 41c256 -18 383 -57 454 -141c42 -49 92 -165 112 -258c14 -70 34 -337 34 -467l0 -73l-1182 0l-1181 0l7 178c23 602 120 727 587 761c169 12 1001 12 1169 0zm6460 0c256 -18 383 -57 454 -141c42 -49 92 -165 112 -258c14 -70 34 -337 34 -467l0 -73l-1182 0l-1181 0l7 178c23 602 120 727 587 761c169 12 1001 12 1169 0zm-5873 -1266c-12 -289 -50 -426 -147 -524c-103 -105 -202 -125 -674 -140c-400 -12 -976 1 -1116 26c-156 29 -260 96 -315 205c-48 95 -85 314 -85 506l0 84l1172 0l1171 0l-6 -157zm6460 0c-12 -289 -50 -426 -147 -524c-103 -105 -202 -125 -674 -140c-400 -12 -976 1 -1116 26c-156 29 -260 96 -315 205c-48 95 -85 314 -85 506l0 84l1172 0l1171 0l-6 -157z\"/>\n" +
    "          </symbol>\n" +
    "        </svg>\n" +
    "\n" +
    "        <div class=\"box-with-text\">\n" +
    "          <div class=\"text-fill\">\n" +
    "            <video \n" +
    "                class=\"video\" \n" +
    "                src=\"//secure-c.vimeocdn.com/p/video/yosemite_hd_ii_hd.webm#t=97,300\" \n" +
    "                preload=\"auto\" \n" +
    "                autoplay=\"autoplay\" \n" +
    "                loop=\"loop\" \n" +
    "                muted=\"muted\">\n" +
    "            </video>\n" +
    "          </div>\n" +
    "\n" +
    "          <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" \n" +
    "               preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <rect\n" +
    "              width=\"100%\"\n" +
    "              height=\"100%\"\n" +
    "              mask=\"url(#intro-smallest-mask)\"\n" +
    "              class=\"shape--fill\"/>\n" +
    "            <use id=\"smallest-fill\" xlink:href=\"#intro-smallest-txt\"\n" +
    "                class=\"text--transparent\">\n" +
    "            </use>\n" +
    "          </svg> \n" +
    "        </div>\n" +
    "      </div>\n" +
    "    <!-- nifty mobile art of yosemite, to keep the theme goin nomesayin -->\n" +
    "    <div class=\"intro-mobile\"></div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("portfolio/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("portfolio/index.tpl.html",
    "<!--\n" +
    "<link rel=\"stylesheet\" href=\"/styles/css/portfolio.css\">\n" +
    "<div class=\"home-pad\">\n" +
    "    <div class=\"container\">\n" +
    "        <div id=\"\" class=\"info\">\n" +
    "            <div class=\"title\" style=\"font-weight:400;\">Quality, Modernity, and Transparency</div>\n" +
    "            <br>\n" +
    "            <hr>\n" +
    "            <br>\n" +
    "            <div class=\"portfolio-message\">\n" +
    "                <p>Our clients know what it means to be partners with NOVO. We provide quality work, employ the latest marketing and web development techniques, and  implement a workflow process that allows for complete transparency and client collaboration.</p>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <p>We believe our work speaks for itself.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"container\" style=\"margin: 120px auto 0;\">\n" +
    "        <div class=\"wrap\" ng-click=\"select_portfolio('client1')\">\n" +
    "            <div class=\"crop\">\n" +
    "                <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"wrap\" ng-click=\"select_portfolio('client2')\">\n" +
    "            <div class=\"crop\">\n" +
    "                <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"wrap\" ng-click=\"select_portfolio('client3')\">\n" +
    "            <div class=\"crop\">\n" +
    "                <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"wrap\" ng-click=\"select_portfolio('client4')\">\n" +
    "            <div class=\"crop\">\n" +
    "                <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "		    \n" +
    "        <div class=\"wrap\" ng-click=\"select_portfolio('absolute')\">\n" +
    "            <div class=\"crop\">\n" +
    "                <img lass=\"img-responsive\" src=\"/images/portfolio/absolute/symbol300.png\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"wrap\" ng-click=\"select_portfolio('client1')\">\n" +
    "            <div class=\"crop\">\n" +
    "                <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"wrap\" ng-click=\"select_portfolio('client2')\">\n" +
    "            <div class=\"crop\">\n" +
    "                <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"wrap\" ng-click=\"select_portfolio('client3')\">\n" +
    "            <div class=\"crop\">\n" +
    "                <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"wrap\" ng-click=\"select_portfolio('client4')\">\n" +
    "            <div class=\"crop\">\n" +
    "                <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <br><br><br>\n" +
    "\n" +
    "    <div style=\"background-color:rgb(0,0,0)\">\n" +
    "        <div class=\"container\">\n" +
    "            <div id=\"absolute\" class=\"info\" ng-show=\"currently_selected=='absolute'\">\n" +
    "                <div class=\"title\">Absolute Yachts North America</div>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <div class=\"portfolio-message\" style=\"color:#fff\">\n" +
    "                    Absolute is an Italian yacht brand based in Piacenza, Italy, manufacturing yachts\n" +
    "                    ranging from 40 to 72 feet. Communicating the Absolute's focus on design, efficiency, performance\n" +
    "                    and serviceability are a high priority. NOVO is responsible for Absolute North America's online marketing,\n" +
    "                    including web design and development, email marketing, and social media marketing.\n" +
    "                </div>\n" +
    "\n" +
    "                <div style=\"height:50px;\"></div>\n" +
    "                <div style=\"text-align:center;\" class=\"link\">\n" +
    "                    <a style=\"color:#1db996;font-size:30px;\" href=\"www.absoluteyachtsna.com\">absoluteyachtsna.com</a>\n" +
    "                </div>\n" +
    "                <div style=\"height:80px;\"></div>\n" +
    "\n" +
    "                <a href=\"http://www.absoluteyachtsna.com/\" style=\"text-align:cener;\">\n" +
    "                    <img src=\"/images/portfolio/absolute/absolute-screenshot.png\" class=\"img-fill\" style=\"width: 100%\">\n" +
    "                </a>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div id=\"client1\" class=\"info\" ng-show=\"currently_selected=='client1'\">\n" +
    "                <div class=\"title\">Client 1</div>\n" +
    "                <div class=\"portfolio-message\" style=\"color:#fff\">hey client 1</div>\n" +
    "                <div class=\"link\"></div>\n" +
    "                <div style=\"height:80px;\"></div>\n" +
    "                <a href=\"#\" style=\"text-align:cener;\">\n" +
    "                    <img src=\"/images/portfolio/stock1.jpg\" class=\"img-fill\" style=\"width: 100%\">\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div id=\"client2\" class=\"info\" ng-show=\"currently_selected=='client2'\">\n" +
    "                <div class=\"title\">Client 2</div>\n" +
    "                <div class=\"portfolio-message\" style=\"color:#fff\">hey client 2</div>\n" +
    "                <div class=\"link\"></div>\n" +
    "                <div style=\"height:80px;\"></div>\n" +
    "                <a href=\"#\" style=\"text-align:cener;\">\n" +
    "                    <img src=\"/images/portfolio/stock2.jpg\" class=\"img-fill\" style=\"width: 100%\">\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div id=\"client3\" class=\"info\" ng-show=\"currently_selected=='client3'\">\n" +
    "                <div class=\"title\">Client 3</div>\n" +
    "                <div class=\"portfolio-message\" style=\"color:#fff\">hey client 3</div>\n" +
    "                <div class=\"link\"></div>\n" +
    "                <div style=\"height:80px;\"></div>\n" +
    "                <a href=\"#\" style=\"text-align:cener;\">\n" +
    "                    <img src=\"/images/portfolio/absolute/absolute-outside.jpg\" class=\"img-fill\" style=\"width: 100%\">\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div id=\"client4\" class=\"info\" ng-show=\"currently_selected=='client4'\">\n" +
    "                <div class=\"title\">Client 4</div>\n" +
    "                <div class=\"portfolio-message\" style=\"color:#fff\">hey client 4</div>\n" +
    "                <div class=\"link\"></div>\n" +
    "                <div style=\"height:80px;\"></div>\n" +
    "                <a href=\"#\" style=\"text-align:cener;\">\n" +
    "                    <img src=\"/images/portfolio/vidhop-screenshot.png\" class=\"img-fill\" style=\"width: 100%\">\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "-->");
}]);

angular.module("sidebar/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sidebar/index.tpl.html",
    "<div ng-controller=\"SidebarCtrl\">\n" +
    "    <div class=\"side-bars\">\n" +
    "        <div class=\"icon-bar\"></div>\n" +
    "        <div class=\"icon-bar\"></div>\n" +
    "        <div class=\"icon-bar\"></div>\n" +
    "    </div>   \n" +
    "    <div class=\"page-nav-zone\">\n" +
    "        <div class=\"flex-item-top\"></div>\n" +
    "        <div class=\"item-container\" id=\"logo-container\">\n" +
    "            <div class=\"list-item\">\n" +
    "                <div class=\"nav-large-list nav-logo\"><img id=\"sidebar-logo\" src=\"/images/logo-white.png\" style=\"max-width:75%\"/></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\"><img src=\"/images/home.png\"/></div>\n" +
    "                </div>\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-large-list\">Home</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/portfolio/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\"><img src=\"/images/portfolio.png\"/></div>\n" +
    "                </div>\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-large-list\">Portfolio</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/contact/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\"><img src=\"/images/contact.png\"/></div>\n" +
    "                </div>\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-large-list\">Contact</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <!--\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/blog/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-large-list\">Blog</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div> -->\n" +
    "        <div class=\"flex-item-bottom\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("templates/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/index.tpl.html",
    "");
}]);
