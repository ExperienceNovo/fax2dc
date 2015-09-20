angular.module('templates-app', ['about/index.tpl.html', 'blog-post/index.tpl.html', 'blog/index.tpl.html', 'contact/index.tpl.html', 'home/index.tpl.html', 'intro/index.tpl.html', 'intro/index2.tpl.html', 'portfolio/index.tpl.html', 'sidebar/index.tpl.html', 'templates/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<div class=\"surface-container home-pad\">\n" +
    "    <div ng-include=\"'intro/index2.tpl.html'\"></div>\n" +
    "    <div class=\"about\" id=\"about\">\n" +
    "        <div class=\"about-tile-area\" style=\"background:url(/images/texture-bg.png) repeat;\">\n" +
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
    "        <div class=\"center about-bottom-area\">\n" +
    "            <div class=\"title-bottom\">How We Build It\n" +
    "                <hr>\n" +
    "            </div>\n" +
    "            <div class=\"message-portfolio\">\n" +
    "                <div class=\"interested-portfolio\">\n" +
    "                    <br>\n" +
    "                    <p>\n" +
    "                       The latest technology, mobile-friendly, and unparalleled in custom design. Each site is custom-tailored.\n" +
    "                    </p>\n" +
    "                    <a href=\"/about/\"><button class=\"mainbutton service-button\">More Info...</button></a>\n" +
    "                    <br>\n" +
    "                    <br>\n" +
    "                    <br>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "    </div> <!-- end about -->\n" +
    "    <div class=\"footer\">\n" +
    "        <div class=\"footer-text\">© 2015 NOVO, LLC.</div>\n" +
    "    </div>\n" +
    "</div><!-- end suface container -->\n" +
    "\n" +
    "<!--<div class=\"about-section-head\">\n" +
    "    <h3>About Us</h3>\n" +
    "    <hr>\n" +
    "</div>\n" +
    "-->\n" +
    "<!--\n" +
    "<div class=\"about-list\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <i class=\"fa fa-paint-brush fa-5x\"></i>\n" +
    "                <div class=\"about-title\">\n" +
    "                    <h2>Design</h2>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "                <div class=\"about-des\">\n" +
    "                    <p>Full-scale Branding to ensure clear communication of your message.</p>\n" +
    "                    <p>Custom Interface Design to ensure a seamless customer online experience.</p>\n" +
    "                    <p>Advertising Design to establish a strong brand presence within your industry.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <i class=\"fa fa-code fa-5x\"></i>\n" +
    "                <div class=\"about-title\">\n" +
    "                    <h2>Development</h2>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "                <div class=\"about-des\">\n" +
    "                    <p>Mobile-first Web Design to align you with the ever-increasing mobile world.</p>\n" +
    "                    <p>SEO Structuring to naturally expand your online reach and outpace your competitors.</p>\n" +
    "                    <p>Back-end Software Integration to ensure maximum security and business technology integration.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <i class=\"fa fa-users fa-5x\"></i>\n" +
    "                <div class=\"about-title\">\n" +
    "                    <h2>Marketing</h2>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "                <div class=\"about-des\">\n" +
    "                    <p>Social Media Management to extend your customer reach.</p>\n" +
    "                    <p>Email Outreach Marketing to manage current customer and secure new-customer leads.</p>\n" +
    "                    <p>Consistent Content Creation to establish and maintain your presence within your community and your industry.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <br>\n" +
    "    <br>\n" +
    "</div>\n" +
    "\n" +
    "<br><br><br>\n" +
    "\n" +
    "</div>\n" +
    "-->");
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
    "\n" +
    "<div class=\"surface-container home-pad\">\n" +
    "    <div class=\"title-surface-container\">\n" +
    "        <div class=\"contact-title-home\">\n" +
    "            <p style=\"color: #1db996 !important;\">Contact Us</p>\n" +
    "            <hr>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"contact-icons\">\n" +
    "            <a class=\"envelope-icon\" href=\"mailto:info@projectnovo.co\"><i class=\"fa fa-envelope\"></i></a>\n" +
    "            <a class=\"facebook-icon\" href=\"https://www.facebook.com/experienceNOVO\"><i class=\"fa fa-facebook\"></i></a>\n" +
    "            <a class=\"twitter-icon\" href=\"https://twitter.com/experienceNOVO\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "            <a class=\"linkedin-icon\" href=\"https://www.linkedin.com/company/novo---web-design-web-development-&-online-marketing?trk=biz-companies-cym\"><i class=\"fa fa-linkedin\"></i></a>\n" +
    "            <a class=\"blog-icon\" href=\"/blog/\"><i class=\"fa fa-rss\"></i></a>\n" +
    "        </div>\n" +
    "        <br><br><br>\n" +
    "        <!--\n" +
    "        <div class=\"message\">\n" +
    "            <a href=\"mailto:info@projectnovo.co\"><button class=\"mainbutton service-button\">email us: info@projectnovo.co</button></a>\n" +
    "            <br><br><br>\n" +
    "        </div>\n" +
    "        -->\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- i would like if the numbers were more visiable -->\n" +
    "<div class=\"surface-container home-pad\" style=\"background-color:rgb(0,0,0)\">\n" +
    "    <div class=\"contact-page-container\">\n" +
    "        <br><br>\n" +
    "        <div class=\"contact-title-location\">\n" +
    "            <p>Four Locations Nationwide</p>\n" +
    "            <hr>\n" +
    "            <!--<p>give us a call!</p>-->\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12 center\">\n" +
    "                <div class=\"col-md-3 office-contact\">\n" +
    "                    <div class=\"hovereffect\">\n" +
    "                        <img class=\"img-responsive\" src=\"/images/contact/raleigh-nc.jpg\" alt=\"\">\n" +
    "                        <div class=\"overlay\">\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "                            <h2 ng-click=\"onClick()\"><span class=\"contact-city\">Raleigh, NC</span></h2>\n" +
    "                            <p>\n" +
    "                                <a href=\"tel:+18656797229\">865.679.7229</a>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"black\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 office-contact\">\n" +
    "                    <div class=\"hovereffect\">\n" +
    "                        <img class=\"img-responsive\" src=\"/images/contact/evanston.jpg\" alt=\"\">\n" +
    "                        <div class=\"overlay\">\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "                            <h2 ng-click=\"onClick()\"><span class=\"contact-city\">Chicago, IL</span></h2>\n" +
    "                            <p>\n" +
    "                                <a href=\"tel:+18653876121\">865.387.6121</a>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 office-contact\">\n" +
    "                    <div class=\"hovereffect\">\n" +
    "                        <img class=\"img-responsive\" src=\"/images/contact/knoxville.jpg\" alt=\"\">\n" +
    "                        <div class=\"overlay\">\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "                            <h2 ng-click=\"onClick()\"><span class=\"contact-city\">Knoxville, TN</span></h2>\n" +
    "                            <p>\n" +
    "                                <a href=\"tel:+18656969382\">865.696.9382</a>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 office-contact\">\n" +
    "                    <div class=\"hovereffect\">\n" +
    "                        <img class=\"img-responsive\" src=\"/images/contact/philly.jpg\" alt=\"\">\n" +
    "                        <div class=\"overlay\">\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "                            <h2 ng-click=\"onClick()\"><span class=\"contact-city\">Philadelphia, PA</span></h2>\n" +
    "                            <p>\n" +
    "                                <a href=\"tel:+13365800855\">336.580.0855</a>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "\n" +
    "            <ui-gmap-marker coords=\"marker1.coords\" options=\"marker1.options\" idkey=\"marker1.id\">\n" +
    "                <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                    <div>\n" +
    "                        <div style=\"font-size: 15px;\">Evanston, IL (Chicago)</div>\n" +
    "                        <br>Valentino Constantinou\n" +
    "                        <br>phone: (865) 387-6121\n" +
    "                        <br>email: <a href=\"mailto:info@projectnovo.com\">info@projectnovo.com</a>\n" +
    "                        <br>\n" +
    "                    </div>\n" +
    "                </ui-gmap-window>\n" +
    "            </ui-gmap-marker>\n" +
    "\n" +
    "            <ui-gmap-marker coords=\"marker2.coords\" options=\"marker2.options\" idkey=\"marker2.id\">\n" +
    "                <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                    <div>\n" +
    "                        <div style=\"font-size: 15px;\">Knoxville, TN</div>\n" +
    "                        <br>Garrett Headden\n" +
    "                        <br>phone: (865) 696-9382\n" +
    "                        <br>email: <a href=\"mailto:info@projectnovo.com\">info@projectnovo.com</a>\n" +
    "                        <br>\n" +
    "                    </div>\n" +
    "                </ui-gmap-window>\n" +
    "            </ui-gmap-marker>\n" +
    "\n" +
    "            <ui-gmap-marker coords=\"marker3.coords\" options=\"marker3.options\" idkey=\"marker3.id\">\n" +
    "                <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                    <div>\n" +
    "                        <div style=\"font-size: 15px;\">Chapel Hill, NC (Raleigh)</div>\n" +
    "                        <br>Trevor Overman\n" +
    "                        <br>phone: (865) 679-7229\n" +
    "                        <br>email: <a href=\"mailto:info@projectnovo.com\">info@projectnovo.com</a>\n" +
    "                        <br>\n" +
    "                    </div>\n" +
    "                </ui-gmap-window>\n" +
    "            </ui-gmap-marker>\n" +
    "\n" +
    "            <ui-gmap-marker coords=\"marker4.coords\" options=\"marker4.options\"idkey=\"marker4.id\">\n" +
    "                <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                    <div>\n" +
    "                        <div style=\"font-size: 15px;\">Philadelphia, PA</div>\n" +
    "                        <br>Michael Thompson\n" +
    "                        <br>phone: (336) 580-0855\n" +
    "                        <br>email: <a href=\"mailto:info@projectnovo.com\">info@projectnovo.com</a>\n" +
    "                        <br>\n" +
    "                    </div>\n" +
    "                </ui-gmap-window>\n" +
    "            </ui-gmap-marker>\n" +
    "\n" +
    "        </ui-gmap-google-map>\n" +
    "\n" +
    "\n" +
    "        <div class=\"message\">\n" +
    "            <div class=\"bottom-tagline\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"footer\">\n" +
    "        <div class=\"footer-text\">© 2015 NOVO, LLC.</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<div class=\"surface-container-home\">\n" +
    "  <div ng-include=\"'intro/index.tpl.html'\"></div>\n" +
    "   <div class=\"services\" id=\"about\">\n" +
    "       <!--  <figure class=\"icon-cards\">\n" +
    "          <div class=\"icon-cards__content\">\n" +
    "            <div class=\"icon-cards__item\">\n" +
    "            <h3 style=\"margin-top:5%\" class=\"medium-text\">design</h3>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"icon-cards__item\">\n" +
    "              <h3 style=\"margin-top:5%\" class=\"medium-text\">development</h3>\n" +
    "            </div>\n" +
    "            <div class=\"icon-cards__item\">\n" +
    "              <h3 style=\"margin-top:5%\" class=\"medium-text\">marketing</h3>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </figure>\n" +
    "        <div class=\"services-list\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <div class=\"col-md-4 flex\">\n" +
    "                        <div class=\"tri-wrap\">\n" +
    "                            <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"144px\" height=\"144px\" viewBox=\"0 0 144 144\" enable-background=\"new 0 0 144 144\" xml:space=\"preserve\">\n" +
    "                                <polygon fill=\"none\" stroke=\"#14B795\" stroke-width=\"5\" stroke-miterlimit=\"10\" points=\"6.946,15.479 137.053,15.479 72,128.151 \"></polygon>\n" +
    "                            </svg>\n" +
    "                            <div class=\"service-title desc1\">\n" +
    "                                <a href=\"/about#design-div/\">\n" +
    "                                    <h2 class=\"service-title-bar\">design</h2>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                            <div class=\"service-des\">\n" +
    "                                <div class=\"desc-item\">graphics & animation</div>\n" +
    "                                <div class=\"desc-item\">company branding</div>\n" +
    "                                <div class=\"desc-item\">UI/UX design</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4 flex\">\n" +
    "                        <div class=\"tri-wrap\">\n" +
    "                            <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"144px\" height=\"144px\" viewBox=\"0 0 144 144\" enable-background=\"new 0 0 144 144\" xml:space=\"preserve\">\n" +
    "                                <polygon fill=\"none\" stroke=\"#14B795\" stroke-width=\"5\" stroke-miterlimit=\"10\" points=\"137.053,128.152 6.946,128.152,71.999,15.479 \"></polygon>\n" +
    "                            </svg>\n" +
    "                            <div class=\"service-title\">\n" +
    "                                <a href=\"/about#dev-div/\">\n" +
    "                                    <h2 class=\"service-title-bar\">development</h2>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                            <div class=\"service-des\">\n" +
    "                                <div class=\"desc-item\">mobile-ready <br> design</div>\n" +
    "                                <div class=\"desc-item\">SEO</div>\n" +
    "                                <div class=\"desc-item\">back-end <br> integration</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4 flex\">\n" +
    "                        <div class=\"tri-wrap\">\n" +
    "                            <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"144px\" height=\"144px\" viewBox=\"0 0 144 144\" enable-background=\"new 0 0 144 144\" xml:space=\"preserve\">\n" +
    "                                <polygon fill=\"none\" stroke=\"#14B795\" stroke-width=\"5\" stroke-miterlimit=\"10\" points=\"6.946,15.479 137.053,15.479 72,128.151 \"></polygon>\n" +
    "                            </svg>\n" +
    "                            <div class=\"service-title desc3\">\n" +
    "                                <a href=\"/about#marketing-div/\">\n" +
    "                                    <h2 class=\"service-title-bar\">marketing</h2>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                            <div class=\"service-des\">\n" +
    "                                <div class=\"desc-item\">social media <br> management</div>\n" +
    "                                <div class=\"desc-item\">email marketing</div>\n" +
    "                                <div class=\"desc-item\">content creation</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <a href=\"/about\"><button class=\"mainbutton service-button\" style=\"margin-top: 7.5%;\">More Info...</button></a>\n" +
    "            </div>\n" +
    "        </div>-->\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"portfolio-home-container\">\n" +
    "        <a href=\"/portfolio/\">\n" +
    "            <svg class=\"portfolio-home\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1920 400\" width=\"1920px\" height=\"400px\" preserveAspectRatio=\"xMidYMid slice\">\n" +
    "                <defs>\n" +
    "                    <mask class=\"portfolio-mask\" id=\"portfolio-mask\" x=\"0\" y=\"0\" width=\"1920px\" height=\"400px\" maskUnits=\"userSpaceOnUse\">\n" +
    "                        <rect class=\"portfolio-rect\" x=\"0\" y=\"0\" width=\"1920px\" height=\"400px\"></rect>\n" +
    "                        <text x=\"960\" y=\"60%\" class=\"large-medium-text\" id=\"portfolio-text\">portfolio</text>\n" +
    "                    </mask>\n" +
    "                </defs>\n" +
    "                <rect class=\"portfolio-rect\" x=\"0\" y=\"0\" width=\"1920px\" height=\"400px\"></rect>\n" +
    "            </svg>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"contact-container\">\n" +
    "        <div class=\"contact-title-home\">Get In Touch\n" +
    "            <hr>\n" +
    "            <br>\n" +
    "            <div class=\"message-home\">\n" +
    "                <div class=\"interested-home\">Interested in working with NOVO?</div>\n" +
    "                <br>\n" +
    "                <div class=\"contact-us-home\">email us at\n" +
    "                    <a href=\"mailto:info@projectnovo.co\" style=\"color: #1db996;\">info@projectnovo.co</a></div> or <div class=\"contact-us-home\">call us at one of our <span style=\"color: #1db996; font-weight: 500;\">four</span> locations!</div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12 center\" style=\"margin-bottom: -100px;\">\n" +
    "                    <div class=\"col-md-3 office-home\">\n" +
    "                        <div class=\"hovereffect\">\n" +
    "                            <img class=\"img-responsive\" src=\"/images/contact/raleigh-nc.jpg\" alt=\"\">\n" +
    "                            <div class=\"overlay\">\n" +
    "                                <br>\n" +
    "                                <br>\n" +
    "                                <br>\n" +
    "                                <h2><span class=\"contact-city\">Raleigh, NC</span></h2>\n" +
    "                                <p>\n" +
    "                                    <a href=\"tel:+18656797229\">865.679.7229</a>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 office-home\">\n" +
    "                        <div class=\"hovereffect\">\n" +
    "                            <img class=\"img-responsive\" src=\"/images/contact/evanston.jpg\" alt=\"\">\n" +
    "                            <div class=\"overlay\">\n" +
    "                                <br>\n" +
    "                                <br>\n" +
    "                                <br>\n" +
    "                                <h2><span class=\"contact-city\">Chicago, IL</span></h2>\n" +
    "                                <p>\n" +
    "                                    <a href=\"tel:+18653876121\">865.387.6121</a>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 office-home\">\n" +
    "                        <div class=\"hovereffect\">\n" +
    "                            <img class=\"img-responsive\" src=\"/images/contact/knoxville.jpg\" alt=\"\">\n" +
    "                            <div class=\"overlay\">\n" +
    "                                <br>\n" +
    "                                <br>\n" +
    "                                <br>\n" +
    "                                <h2><span class=\"contact-city\">Knoxville, TN</span></h2>\n" +
    "                                <p>\n" +
    "                                    <a href=\"tel:+18656969382\">865.696.9382</a>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 office-home\">\n" +
    "                        <div class=\"hovereffect\">\n" +
    "                            <img class=\"img-responsive\" src=\"/images/contact/philly.jpg\" alt=\"\">\n" +
    "                            <div class=\"overlay\">\n" +
    "                                <br>\n" +
    "                                <br>\n" +
    "                                <br>\n" +
    "                                <h2><span class=\"contact-city\">Philadelphia, PA</span></h2>\n" +
    "                                <p>\n" +
    "                                    <a href=\"tel:+13365800855\">336.580.0855</a>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"newsletter-home-container\">\n" +
    "        <svg class=\"newsletter-home\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1920 400\" width=\"1920px\" height=\"500px\" preserveAspectRatio=\"xMidYMid slice\">\n" +
    "            <defs>\n" +
    "                <mask class=\"newsletter-mask\" id=\"newsletter-mask\" x=\"0\" y=\"0\" width=\"1920px\" height=\"500px\" maskUnits=\"userSpaceOnUse\">\n" +
    "                    <rect class=\"newsletter-rect\" x=\"0\" y=\"0\" width=\"1920px\" height=\"500px\"></rect>\n" +
    "                    <text x=\"960\" y=\"30%\" class=\"medium-text\">sign up for our newsletter</text>\n" +
    "                    <!-- I feel like we could say something a little better here. Let's do some research into this -->\n" +
    "                </mask>\n" +
    "             </defs>\n" +
    "             <rect class=\"newsletter-rect\" x=\"0\" y=\"0\" width=\"1920px\" height=\"500px\"></rect>\n" +
    "        </svg>\n" +
    "        <div class=\"contact\" id=\"contact\">\n" +
    "            <div class=\"contact-section\">\n" +
    "                <form class=\"ctr newsletter-input\" action=\"//projectnovo.us11.list-manage.com/subscribe/post?u=a56f7f3f876fa9db4c36328af&amp;id=ff3d3ae826\" method=\"post\">\n" +
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
    "\n" +
    "    <div class=\"footer\">\n" +
    "        <div class=\"footer-text\">© 2015 NOVO, LLC.</div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("intro/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("intro/index.tpl.html",
    "<div class=\"intro\">\n" +
    "  <div class=\"intro-container\">\n" +
    "\n" +
    "    <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "      <!-- Symbol with text -->\n" +
    "      <symbol id=\"s-text\">\n" +
    "        <text text-anchor=\"middle\"\n" +
    "              x=\"970\"  \n" +
    "              y=\"650\"\n" +
    "              dy=\".35em\"\n" +
    "              class=\"medium-text\"\n" +
    "              >\n" +
    "          full-stack design, development, and marketing\n" +
    "        </text>    \n" +
    "      </symbol>\n" +
    "      <!-- Mask with text -->\n" +
    "      <mask id=\"m-text\"\n" +
    "            maskunits=\"userSpaceOnUse\"\n" +
    "            maskcontentunits=\"userSpaceOnUse\">\n" +
    "\n" +
    "        <rect\n" +
    "              width=\"100%\"\n" +
    "              height=\"100%\"\n" +
    "              class=\"mask__shape\">\n" +
    "        </rect>\n" +
    "        <use xlink:href=\"#s-text\"\n" +
    "             class=\"mask__text\"\n" +
    "             ></use>\n" +
    "        <use xlink:href=\"#novo\" />\n" +
    "      </mask>\n" +
    "    </svg>\n" +
    "\n" +
    "    <svg style=\"display: none;\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "      <symbol id=\"novo\">\n" +
    "        <path transform=\"translate(375,625) scale(0.09,-0.09)\" d=\"m4315 3849c-390 -27 -601 -107 -745 -281c-136 -162 -180 -345 -196 -800l-7 -208l-158 0l-159 0l-2 643l-3 642l-156 3c-123 2 -159 0 -168 -11c-8 -10 -12 -309 -13 -1112l-3 -1098l-350 415c-192 229 -608 722 -922 1096c-315 374 -580 687 -589 696c-14 14 -53 16 -327 14l-312 -3l0 -1315l0 -1315l154 -3c104 -2 158 1 167 9c12 10 14 197 14 1180l0 1169l39 0l38 0l1004 -1180l1004 -1180l210 2l210 3l3 588l2 587l164 0l163 0l6 -172c13 -368 58 -541 181 -704c117 -156 303 -240 618 -280c176 -22 971 -32 1226 -15c198 13 369 40 463 72c277 94 430 284 483 599c17 105 36 327 36 433l0 67l456 -2l456 -3l297 -585l297 -585l210 -2l209 -3l300 590l300 590l461 0l461 0l6 -172c19 -517 122 -741 406 -883c184 -92 378 -116 985 -122c617 -7 909 14 1097 78c277 94 430 284 483 599c17 105 36 327 36 433l0 67l380 0l380 0l0 85l0 85l-378 0l-378 0l-12 238c-13 251 -33 434 -57 518c-30 103 -94 214 -169 289c-83 84 -147 122 -273 165c-206 69 -444 90 -1008 90c-748 0 -983 -37 -1191 -185c-121 -87 -215 -228 -255 -384c-28 -109 -47 -286 -55 -523l-7 -208l-414 0l-415 0l65 123c35 67 174 338 307 602c134 264 250 488 258 498c12 14 13 22 4 42l-12 25l-1511 -2c-1373 -3 -1513 -4 -1522 -19c-8 -12 5 -46 56 -145c456 -897 567 -1117 567 -1120c0 -2 -184 -4 -408 -4l-408 0l-12 238c-13 251 -33 434 -57 518c-8 28 -33 89 -56 134c-49 98 -152 208 -239 258c-129 72 -344 122 -615 142c-160 11 -934 11 -1100 -1zm4766 -391c-69 -133 -371 -718 -760 -1472c-114 -220 -211 -401 -217 -403c-6 -2 -64 101 -129 229c-65 128 -180 352 -255 498c-213 412 -650 1268 -650 1274c0 3 468 6 1040 6l1040 0l-69 -132zm-3621 41c256 -18 383 -57 454 -141c42 -49 92 -165 112 -258c14 -70 34 -337 34 -467l0 -73l-1182 0l-1181 0l7 178c23 602 120 727 587 761c169 12 1001 12 1169 0zm6460 0c256 -18 383 -57 454 -141c42 -49 92 -165 112 -258c14 -70 34 -337 34 -467l0 -73l-1182 0l-1181 0l7 178c23 602 120 727 587 761c169 12 1001 12 1169 0zm-5873 -1266c-12 -289 -50 -426 -147 -524c-103 -105 -202 -125 -674 -140c-400 -12 -976 1 -1116 26c-156 29 -260 96 -315 205c-48 95 -85 314 -85 506l0 84l1172 0l1171 0l-6 -157zm6460 0c-12 -289 -50 -426 -147 -524c-103 -105 -202 -125 -674 -140c-400 -12 -976 1 -1116 26c-156 29 -260 96 -315 205c-48 95 -85 314 -85 506l0 84l1172 0l1171 0l-6 -157z\"/>\n" +
    "      </symbol>\n" +
    "    </svg>\n" +
    "\n" +
    "      <div class=\"svg-container\">\n" +
    "        <div class=\"box-with-text\">\n" +
    "          <!-- Container for video -->\n" +
    "          <div class=\"text-fill\">\n" +
    "            <video \n" +
    "                   class=\"video\" src=\"//secure-c.vimeocdn.com/p/video/yosemite_hd_ii_hd.webm#t=93,300\" preload=\"auto\" autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\"></video>\n" +
    "          </div>\n" +
    "\n" +
    "          <!-- Visible SVG -->\n" +
    "          <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <rect\n" +
    "                  width=\"100%\"\n" +
    "                  height=\"100%\"\n" +
    "                  mask=\"url(#m-text)\"\n" +
    "                  class=\"shape--fill\"/>\n" +
    "            <use xlink:href=\"#s-text\"\n" +
    "                 class=\"text--transparent\"\n" +
    "                 ></use>\n" +
    "          </svg> \n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "  <div class=\"intro-img mobile\"></div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("intro/index2.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("intro/index2.tpl.html",
    "<div class=\"intro-container\">\n" +
    "    <svg class=\"intro\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1920 1080\" \n" +
    "         width=\"1920px\" height=\"1080px\" preserveAspectRatio=\"xMidYMid slice\">\n" +
    "        <rect class=\"intro-rect\" x=\"0\" y=\"0\" width=\"1920px\" height=\"1080px\"></rect>\n" +
    "    </svg>\n" +
    "    <video id=\"video\" autoplay=\"autoplay\" muted=\"muted\" preload=\"auto\" loop=\"loop\">\n" +
    "        <source src=\"/videos/drawing.webm\" type=\"video/webm\">\n" +
    "    </video>\n" +
    "    <img class=\"intro-img\" id=\"image\" src=\"http://36.media.tumblr.com/318b26ada390554e3940e1907c0e6d0f/tumblr_no0pwu8TmB1uuhx17o1_1280.jpg\">\n" +
    "</div>");
}]);

angular.module("portfolio/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("portfolio/index.tpl.html",
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
    "\n" +
    "    <!--make dynamic with angular-->\n" +
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
    "            <!--on click triangle show-->\n" +
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
    "</div>");
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
    "        <div class=\"flex-item-top\"></div>     \n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-large-list\">Home</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/about/\">\n" +
    "                <div class=\"list-item\">                 \n" +
    "                    <div class=\"nav-large-list\">About</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/portfolio/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-large-list\">Portfolio</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/contact/\">\n" +
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
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\" class=\"no-js\">\n" +
    "    \n" +
    "    <head>\n" +
    "        <meta charset=\"UTF-8\" />\n" +
    "        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"> \n" +
    "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> \n" +
    "        <link rel=\"stylesheet\" type=\"text/css\" href=\"src/app/templates/css/web-samples.css\" />\n" +
    "        <link rel=\"stylesheet\" type=\"text/css\" href=\"src/app/templates/css/web-overlay.css\" />\n" +
    "        <link rel=\"stylesheet\" type=\"text/css\" href=\"src/app/templates/css/transition-animations.css\" />\n" +
    "        <link rel=\"stylesheet\" type=\"text/css\" href=\"src/app/templates/css/bootstrap.min.css\" />      \n" +
    "        <link rel=\"stylesheet\" type=\"text/css\" href=\"src/app/templates/css/font-awesome.min.css\" />\n" +
    "        <script src=\"js/modernizr.custom.js\"></script>\n" +
    "    </head>\n" +
    "    \n" +
    "    <body>\n" +
    "    <div class=\"web-menu\">\n" +
    "        <div class=\"pt-wrapper\">\n" +
    "\n" +
    "            <!--Overlay Menu-->\n" +
    "\n" +
    "            <div class=\"overlay overlay-contentscale\">\n" +
    "                <button type=\"button\" class=\"overlay-close\">Close</button>\n" +
    "                \n" +
    "                    <div class=\"welcome-button\">\n" +
    "                        <div class=\"bt-sl-solid-l down out\"></div>\n" +
    "                        <div class=\"bt-sl-solid-r down out\"></div>\n" +
    "                        <div class=\"bt-slider-0 bt-slide-l out\"></div>\n" +
    "                        <div class=\"bt-slider-1 bt-slide-l out\"></div>\n" +
    "                        <div class=\"bt-slider-2 bt-slide-l out\"></div>\n" +
    "                        <div class=\"bt-slider-3 bt-slide-l out\"></div>\n" +
    "                        <div class=\"bt-slider-4 bt-slide-l out\"></div>\n" +
    "                        <a class=\"out lin-t main-pg pt-trigger overlay-close\" data-animation=\"27\" data-goto=\"1\">\n" +
    "                            Main Page\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                \n" +
    "                <nav>\n" +
    "                    <div class=\"container\">\n" +
    "                        <div class=\"row\">    \n" +
    "                            <div class=\"web-menu-home col-md-3 col-sm-6 col-xs-12\">\n" +
    "                                <a class=\"pt-trigger menu-icon icon-click1\" data-animation=\"27\" data-goto=\"2\">\n" +
    "                                    <img src=\"http://placehold.it/250x250\"/>\n" +
    "                                    <div class=\"menu-title\">Sample 1</div>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                            <div class=\"web-menu-home col-md-3 col-sm-6 col-xs-12\">\n" +
    "                                <a class=\"pt-trigger menu-icon icon-click2\" data-animation=\"27\" data-goto=\"3\">\n" +
    "                                    <img src=\"http://placehold.it/250x250\"/>\n" +
    "                                    <div class=\"menu-title\">Sample 2</div>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                            <div class=\"web-menu-home col-md-3 col-sm-6 col-xs-12\">\n" +
    "                                <a class=\"pt-trigger menu-icon icon-click3\" data-animation=\"27\" data-goto=\"4\">\n" +
    "                                    <img src=\"http://placehold.it/250x250\"/>\n" +
    "                                    <div class=\"menu-title\">Sample 3</div>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                            <div class=\"web-menu-home col-md-3 col-sm-6 col-xs-12\">\n" +
    "                                <a class=\"pt-trigger menu-icon icon-click4\" data-animation=\"27\" data-goto=\"5\">\n" +
    "                                    <img src=\"http://placehold.it/250x250\"/>\n" +
    "                                    <div class=\"menu-title\">Sample 4</div>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </nav>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--Page Menu-->\n" +
    "\n" +
    "            <div class=\"pt-page pt-page-1\">\n" +
    "                <div class=\"pt-trigger-container\">\n" +
    "                    <div class=\"title\">Sample Websites</div>\n" +
    "                    <div class=\"container\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"web-menu-home col-md-3\">\n" +
    "                                <a class=\"pt-trigger menu-icon\" data-animation=\"27\" data-goto=\"2\">\n" +
    "                                    <div class=\"menu-title\">Sample 1</div>\n" +
    "                                    <img src=\"http://placehold.it/250x250\"/>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                            <div class=\"web-menu-home col-md-3\">\n" +
    "                                <a class=\"pt-trigger menu-icon\" data-animation=\"27\" data-goto=\"3\">\n" +
    "                                    <div class=\"menu-title\">Sample 2</div>\n" +
    "                                    <img src=\"http://placehold.it/250x250\"/>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                            <div class=\"web-menu-home col-md-3\">\n" +
    "                                <a class=\"pt-trigger menu-icon\" data-animation=\"27\" data-goto=\"4\">\n" +
    "                                    <div class=\"menu-title\">Sample 3</div>\n" +
    "                                    <img src=\"http://placehold.it/250x250\"/>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                            <div class=\"web-menu-home col-md-3\">\n" +
    "                                <a class=\"pt-trigger menu-icon\" data-animation=\"27\" data-goto=\"5\">\n" +
    "                                    <div class=\"menu-title\">Sample 4</div>\n" +
    "                                    <img src=\"http://placehold.it/250x250\"/>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--Inner Pages-->\n" +
    "\n" +
    "            <div class=\"pt-page pt-page-2\">\n" +
    "                <div class=\"pt-trigger-container\">\n" +
    "                    <div class=\"overlay-nav\">\n" +
    "                        <a class=\"main-pg\" id=\"trigger-overlay1\">Choose Sample</a>\n" +
    "                    </div>\n" +
    "                    <iframe src=\"templates/sample1/index.html\"></iframe>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"pt-page pt-page-3\">\n" +
    "                <div class=\"pt-trigger-container\">\n" +
    "                    <div class=\"overlay-nav\">\n" +
    "                        <a class=\"main-pg\" id=\"trigger-overlay2\">Choose Sample</a>\n" +
    "                    </div>\n" +
    "                    <iframe src=\"templates/sample2/index.html\"></iframe>\n" +
    "                </div>\n" +
    "            </div> \n" +
    "\n" +
    "            <div class=\"pt-page pt-page-4\">\n" +
    "                <div class=\"pt-trigger-container\">\n" +
    "                    <div class=\"overlay-nav\">\n" +
    "                        <a class=\"main-pg\" id=\"trigger-overlay3\">Choose Sample</a>\n" +
    "                    </div>\n" +
    "                    <iframe src=\"templates/sample3/index.html\"></iframe>\n" +
    "                </div>\n" +
    "            </div>   \n" +
    "\n" +
    "            <div class=\"pt-page pt-page-5\">\n" +
    "                <div class=\"pt-trigger-container\">\n" +
    "                    <div class=\"overlay-nav\">\n" +
    "                        <a class=\"main-pg\" id=\"trigger-overlay4\">Choose Sample</a>\n" +
    "                    </div>\n" +
    "                    <iframe src=\"templates/sample4/index.html\"></iframe>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"pt-message\">\n" +
    "            <p>Your browser does not support CSS animations.</p>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "        \n" +
    "        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\" type=\"text/javascript\"></script>\n" +
    "        <!--[if lt IE 9]>\n" +
    "        <script src=\"//html5shim.googlecode.com/svn/trunk/html5.js\"></script>\n" +
    "        <![endif]-->\n" +
    "        <!--[if lt IE 9]>\n" +
    "        <script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js\"></script>\n" +
    "        <![endif]-->\n" +
    "        <script src=\"src/app/templates/js/transition.js\"></script>\n" +
    "        <script src=\"src/app/templates/js/classie.js\"></script>       \n" +
    "        <script src=\"src/app/templates/js/inner-html.js\"></script>\n" +
    "        <script src=\"src/app/templates/js/web-overlay.js\"></script>       \n" +
    "        <script src=\"src/app/templates/js/main-page-btn.js\"></script>\n" +
    "        \n" +
    "    </body>\n" +
    "</html>\n" +
    "");
}]);
