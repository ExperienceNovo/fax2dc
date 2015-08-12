angular.module('templates-app', ['about/index.tpl.html', 'blog-post/index.tpl.html', 'blog/index.tpl.html', 'contact/index.tpl.html', 'contact/index1.tpl.html', 'contact/index11.tpl.html', 'home/index.tpl.html', 'home/index1.tpl.html', 'intro/index.tpl.html', 'portfolio/index.tpl.html', 'portfolio/index1.tpl.html', 'portfolio/index2.tpl.html', 'portfolio/indextriangles.tpl.html', 'sidebar/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<div class=\"surface-container home-pad\">\n" +
    "    <div class=\"about\" id=\"about\">\n" +
    "        <div class=\"center about-top-area\">\n" +
    "            <div class=\"about-title-top\">Quality, Modernity, and Transparency\n" +
    "                <hr>\n" +
    "            </div>\n" +
    "            <div class=\"message-about\">\n" +
    "                <div class=\"interested-about\">\n" +
    "                    <br>\n" +
    "                    <p>\n" +
    "                        Our clients know what it means to be partners with NOVO. We provide quality work, employ the latest marketing and web development techniques, and  implement a workflow process that allows for complete transparency and client collaboration.\n" +
    "                    </p>\n" +
    "                    <br>\n" +
    "                    <hr>\n" +
    "                    <br>\n" +
    "                    <p style=\"font-size:22px;\"><a href=\"/portfolio/\">Our work speaks for itself</a></p>\n" +
    "                    <br>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
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
    "                            <h2 class=\"about-tile-title\" style=\"font-size: 35px;\">Design</h2>\n" +
    "                            <p class=\"hover-info\" style=\"margin-top: 5%;\">Graphics & Animation</p>\n" +
    "                            <p class=\"hover-info\">Company Branding</p>\n" +
    "                            <p class=\"hover-info\">UI/UX Design</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"about-tile-area\" style=\"background:url(/images/texture-bg.png) repeat;\">\n" +
    "            <div class=\"about-row\">\n" +
    "                <div class=\"about-tile right\" style=\"\">\n" +
    "                    <div class=\"hovereffect\">\n" +
    "                        <img class=\"img-responsive\" id=\"dev-div\" src=\"/images/about/devtile.jpg\" alt=\"\">\n" +
    "                        <div class=\"overlay-about\">\n" +
    "                            <h2 class=\"about-tile-title\" style=\"font-size: 35px;\">Development</h2>\n" +
    "                            <p class=\"hover-info\" style=\"margin-top: 5%;\">Mobile-First Web Design</p>\n" +
    "                            <p class=\"hover-info\">SEO Structuring</p>\n" +
    "                            <p class=\"hover-info\">Back-End Software Integration</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"about-des left\" id=\"developement-des\">\n" +
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
    "                            <h2 class=\"about-tile-title\" style=\"font-size: 35px;\">Marketing</h2>\n" +
    "                            <p class=\"hover-info\" style=\"margin-top: 5%;\">Social Media Management</p>\n" +
    "                            <p class=\"hover-info\">Email Marketing</p>\n" +
    "                            <p class=\"hover-info\">Content Creation</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div><!-- end center -->\n" +
    "        <!--\n" +
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
    "        -->\n" +
    "\n" +
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
    "  <br><br>\n" +
    "  <div id=\"post-container\">\n" +
    "    <h1 class=\"title\"><a href=\"/blog/{{post.url_title}}\">{{post.title}}</a></h1>\n" +
    "    <p class=\"lead\">{{post.post_content}}</p>\n" +
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
    "            <p>Contact Us</p>\n" +
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

angular.module("contact/index1.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/index1.tpl.html",
    "<!--we gotta load in the css in a better fashon than overwriting-->\n" +
    "<link href=\"/styles/css/contact.css\" type=\"text/css\">\n" +
    "<link href=\"/styles/css/home.css\" rel=\"stylesheet\" type=\"text/css\"/>\n" +
    "\n" +
    "<!--map isn't loading...-->\n" +
    "<!--<style type=\"text/css\">\n" +
    "    #map-canvas {\n" +
    "        width: 1024px;\n" +
    "        height: 600px;\n" +
    "    }\n" +
    "</style>\n" +
    "<div class=\"center\">\n" +
    "    <div id=\"map-container\" class=\"map-container\">\n" +
    "        <div id=\"map-canvas\"></div>\n" +
    "    </div>\n" +
    "</div>-->\n" +
    "\n" +
    "<div class=\"surface-container\">\n" +
    "    <div class=\"contact-container\">\n" +
    "        <div class=\"contact-title-home\">Get In Touch</div>\n" +
    "            <div id=\"newsletter\" class=\"contact-home\">\n" +
    "            <hr>\n" +
    "            <br>\n" +
    "            <div class=\"message-home\">\n" +
    "                <div class=\"interested-home\">Interested in working with NOVO?</div>\n" +
    "                <br>\n" +
    "                <div class=\"contact-us-home\">\n" +
    "                    Email us at <a href=\"mailto:info@projectnovo.co\" style=\"color: #1db996;\">info@projectnovo.co</a>\n" +
    "                </div>\n" +
    "                or \n" +
    "                <div class=\"contact-us-home\">Call us at one of our <span style=\"color: #1db996; font-weight: 500;\">four</span> locations!</div>\n" +
    "                <br>\n" +
    "                <div class=\"center\">\n" +
    "                    <div class=\"box2 small-medium\">\n" +
    "                        <img src=\"/images/contact/chap.jpeg\" class=\"img-fill opacity\">\n" +
    "                        <br>\n" +
    "                        <div class=\"city\" style=\"font-size: 22px;\">Chapel Hill, NC</div>\n" +
    "                        <a href=\"tel:+18656797229\">\n" +
    "                            <div class=\"subtitle\">(865) 679-7229</div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <br>\n" +
    "                    <div class=\"box2 small-medium\">\n" +
    "                        <img src=\"/images/contact/evanston.jpg\" class=\"img-fill opacity\">\n" +
    "                        <br>\n" +
    "                        <div class=\"city\" style=\"font-size: 22px;\">Chicago, IL</div>\n" +
    "                        <a href=\"tel:+18653876121\">\n" +
    "                            <div class=\"subtitle\">(865) 387-6121</div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <br>\n" +
    "                    <div class=\"box2 small-medium\">\n" +
    "                        <img src=\"/images/contact/knoxville.jpg\" class=\"img-fill opacity\">\n" +
    "                        <br>\n" +
    "                        <div class=\"city\" style=\"font-size: 22px;\">Knoxville, TN</div>\n" +
    "                        <a href=\"tel:+18656969382\">    \n" +
    "                            <div class=\"subtitle\">(865) 696-9382</div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <br>\n" +
    "                    <div class=\"box2 small-medium\">\n" +
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
    "                <!--\n" +
    "                <br>\n" +
    "                <p>Stay in the loop and learn about what we do!</p>\n" +
    "                <br>\n" +
    "                <span class=\"newsletter-home\">Sign Up for our Monthly Newsletter!</span>\n" +
    "                -->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <br>\n" +
    "    <!--map here-->\n" +
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
    "</div>\n" +
    "\n" +
    "<script src=\"/js/maps.js\" type='text/javascript'></script>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("contact/index11.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/index11.tpl.html",
    "<style type=\"text/css\">\n" +
    "    #map-canvas {\n" +
    "        width: 1900px;\n" +
    "        height: 450px;\n" +
    "    }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"surface-container home-pad\">\n" +
    "    <div class=\"title-surface-container\">\n" +
    "        <div class=\"contact-title-home\">\n" +
    "            <p>Contact Us</p>\n" +
    "            <hr>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"contact-icons\">\n" +
    "            <a class=\"envelope-icon\" href=\"mailto:info@projectnovo.co\"><i class=\"fa fa-envelope\"></i></a>\n" +
    "            <a class=\"facebook-icon\" href=\"https://www.facebook.com/experienceNOVO\"><i class=\"fa fa-facebook\"></i></a>\n" +
    "            <a class=\"twitter-icon\" href=\"https://twitter.com/experienceNOVO\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "            <a class=\"linkedin-icon\" href=\"https://www.linkedin.com/company/novo---web-design-web-development-&-online-marketing?trk=biz-companies-cym\"><i class=\"fa fa-linkedin\"></i></a>\n" +
    "        </div>\n" +
    "        <br><br><br>\n" +
    "            <!--\n" +
    "            <div class=\"message\">\n" +
    "                <a href=\"mailto:info@projectnovo.co\"><button class=\"mainbutton service-button\">email us: info@projectnovo.co</button></a>\n" +
    "                <br><br><br>\n" +
    "            </div>\n" +
    "            -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- i would like if the numbers were more visiable -->\n" +
    "<div class=\"surface-container home-pad\" style=\"background-color:rgb(0,0,0)\">\n" +
    "    <div class=\"contact-page-container\">\n" +
    "        <br><br><br><br><br>\n" +
    "        <div class=\"contact-title-location\">\n" +
    "            <p>Four Locations Nationwide</p>\n" +
    "            <hr>\n" +
    "            <!--<p>give us a call!</p>-->\n" +
    "        </div>\n" +
    "        <br><br><br>\n" +
    "        <div class=\"row\">    \n" +
    "            <div class=\"col-md-12 center\">\n" +
    "                <div class=\"col-md-3 office-contact\">\n" +
    "                    <div class=\"hovereffect\">\n" +
    "                        <img class=\"img-responsive\" src=\"/images/contact/raleigh-nc.jpg\" alt=\"\">\n" +
    "                        <div class=\"overlay\">\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "                            <h2><span class=\"contact-city\">Raleigh, NC</span></h2>\n" +
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
    "                            <h2><span class=\"contact-city\">Chicago, IL</span></h2>\n" +
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
    "                            <h2><span class=\"contact-city\">Knoxville, TN</span></h2>\n" +
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
    "                            <h2><span class=\"contact-city\">Philadelphia, PA</span></h2>\n" +
    "                            <p>\n" +
    "                                <a href=\"tel:+13365800855\">336.580.0855</a>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>    \n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <div class=\"map-center\">\n" +
    "            <div id=\"map-container\" class=\"map-container\">\n" +
    "                <div id=\"map-canvas\"></div>\n" +
    "            </div>\n" +
    "        </div>   \n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script src=\"/js/maps.js\" type='text/javascript'></script>\n" +
    "");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<div class=\"surface-container-home\">\n" +
    "    <div class=\"home-pad\">\n" +
    "        <div class=\"intro-container\">\n" +
    "            <svg class=\"intro\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1920 1080\" width=\"1920px\" height=\"1080px\" preserveAspectRatio=\"xMidYMid slice\">\n" +
    "                <defs>\n" +
    "                    <mask class=\"intro-mask\" id=\"intro-mask\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">\n" +
    "                        <rect class=\"intro-rect\" x=\"0\" y=\"0\" width=\"1920px\" height=\"1080px\"></rect>\n" +
    "                        <text x=\"960\" y=\"27%\" class=\"large-text\">welcome</text>\n" +
    "                        <text x=\"960\" y=\"46%\" class=\"medium-text desktop\">embrace change with NOVO</text>\n" +
    "                        <text x=\"960\" y=\"44%\" class=\"medium-text mobile\">embrace change</text>\n" +
    "                        <text x=\"960\" y=\"49%\" class=\"medium-text mobile\">with NOVO</text>\n" +
    "                        <text x=\"960\" y=\"51%\" class=\"small-text mantra\">a full-scale online marketing, design, and web development firm</text>\n" +
    "                        <text x=\"960\" y=\"67.5%\" class=\"small-text learn-more\">learn more</text>\n" +
    "                        <a href=\"#more\">\n" +
    "                            <svg class=\"tri-before bounce\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"883px\" y=\"68%\" width=\"150px\" height=\"150px\" viewBox=\"0 0 723 626\" enable-background=\"new 0 0 723 626\" xml:space=\"preserve\">\n" +
    "                                <g>\n" +
    "                                  <path fill=\"#232322\" d=\"M0,0h723v1.58c-3.72,4.37-5.58,9.96-8.89,14.62C596.69,219.439,479.44,422.79,361.96,626h-0.6\n" +
    "                                    C243.45,421.77,125.54,217.55,7.63,13.32C5.09,9.061,2.85,4.62,0,0.55V0z\"></path>\n" +
    "                                  <path fill=\"#FFFFFF\" d=\"M86.57,48.002c183.289,0.01,366.569-0.02,549.859,0.02c-40.779,70.681-81.6,141.33-122.39,212.01\n" +
    "                                    c-7.36,12.841-14.91,25.58-22.11,38.521l-0.229-0.01c-86.79-0.09-173.59-0.06-260.38-0.011h-0.211\n" +
    "                                    c-20.239-35.569-40.899-70.899-61.289-106.379C142.061,144.111,114.359,96.031,86.57,48.002z\"></path>\n" +
    "                                  <path fill=\"#21B795\" d=\"M231.311,298.599c86.79-0.049,173.59-0.079,260.38,0.011c-19.42,34.3-39.36,68.31-59,102.479\n" +
    "                                    c-23.71,41.091-47.44,82.16-71.15,123.25c-20.92-36.039-41.68-72.17-62.55-108.229C276.48,376.909,253.65,337.89,231.311,298.599z\"></path>\n" +
    "                                </g>\n" +
    "                            </svg>\n" +
    "                        </a>\n" +
    "                    </mask>\n" +
    "                </defs>\n" +
    "                <rect class=\"intro-rect\" x=\"0\" y=\"0\" width=\"1920px\" height=\"1080px\"></rect>\n" +
    "                <a href=\"#more\">\n" +
    "                    <svg class=\"tri-after\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"883px\" y=\"68%\" width=\"150px\" height=\"150px\" viewBox=\"0 0 723 626\" enable-background=\"new 0 0 723 626\" xml:space=\"preserve\">\n" +
    "                        <g>\n" +
    "                          <path fill=\"#232322\" d=\"M0,0h723v1.58c-3.72,4.37-5.58,9.96-8.89,14.62C596.69,219.439,479.44,422.79,361.96,626h-0.6\n" +
    "                            C243.45,421.77,125.54,217.55,7.63,13.32C5.09,9.061,2.85,4.62,0,0.55V0z\"></path>\n" +
    "                          <path fill=\"#FFFFFF\" d=\"M86.57,48.002c183.289,0.01,366.569-0.02,549.859,0.02c-40.779,70.681-81.6,141.33-122.39,212.01\n" +
    "                            c-7.36,12.841-14.91,25.58-22.11,38.521l-0.229-0.01c-86.79-0.09-173.59-0.06-260.38-0.011h-0.211\n" +
    "                            c-20.239-35.569-40.899-70.899-61.289-106.379C142.061,144.111,114.359,96.031,86.57,48.002z\"></path>\n" +
    "                          <path fill=\"#21B795\" d=\"M231.311,298.599c86.79-0.049,173.59-0.079,260.38,0.011c-19.42,34.3-39.36,68.31-59,102.479\n" +
    "                            c-23.71,41.091-47.44,82.16-71.15,123.25c-20.92-36.039-41.68-72.17-62.55-108.229C276.48,376.909,253.65,337.89,231.311,298.599z\"></path>\n" +
    "                        </g>\n" +
    "                    </svg>\n" +
    "                </a>\n" +
    "            </svg>\n" +
    "            <video id=\"video\" autoplay=\"autoplay\" muted=\"muted\" preload=\"auto\" loop=\"loop\">\n" +
    "                <source src=\"http://mazwai.com/system/posts/videos/000/000/161/preview_mp4_3/leonard_soosay--missfit.mp4?1424004876\" type=\"video/webm\">\n" +
    "                <object data=\"flvplayer.swf\" type=\"application/x-shockwave-flash\">\n" +
    "                    <param value=\"flvplayer.swf\" name=\"movie\"/>\n" +
    "                </object>\n" +
    "            </video>\n" +
    "            <img class=\"intro-img\" id=\"image\" src=\"http://36.media.tumblr.com/318b26ada390554e3940e1907c0e6d0f/tumblr_no0pwu8TmB1uuhx17o1_1280.jpg\">\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"services\" id=\"more\">\n" +
    "            <div class=\"section-head\">\n" +
    "                <h3>Our Services</h3>\n" +
    "                <hr>\n" +
    "            </div>\n" +
    "            <div class=\"services-list\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"col-md-4\">\n" +
    "                            <i class=\"fa fa-paint-brush fa-5x\"></i>\n" +
    "                            <div class=\"service-title\">\n" +
    "                                <h2>Design</h2>\n" +
    "                            </div>\n" +
    "                            <hr>\n" +
    "                            <div class=\"service-des\">\n" +
    "                                <p>Graphics & Animation</p>\n" +
    "                                <p>Custom Interface Design</p>\n" +
    "                                <p>Company Branding</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-4\">\n" +
    "                            <i class=\"fa fa-code fa-5x\"></i>\n" +
    "                            <div class=\"service-title\">\n" +
    "                                <h2>Development</h2>\n" +
    "                            </div>\n" +
    "                            <hr>\n" +
    "                            <div class=\"service-des\">\n" +
    "                                <p>Mobile-first Web Design</p>\n" +
    "                                <p>SEO Structuring</p>\n" +
    "                                <p>Back-end Software Integration</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-4\">\n" +
    "                            <i class=\"fa fa-users fa-5x\"></i>\n" +
    "                            <div class=\"service-title\">\n" +
    "                                <h2>Marketing</h2>\n" +
    "                            </div>\n" +
    "                            <hr>\n" +
    "                            <div class=\"service-des\">\n" +
    "                                <p>Social Media Management</p>\n" +
    "                                <p>Outreach Email Marketing</p>\n" +
    "                                <p>Content Creation</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <br><br>\n" +
    "                <a href=\"/about/\"><button class=\"mainbutton service-button\">More Info...</button></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"portfolio-home-container\">\n" +
    "            <a href=\"/portfolio/\">\n" +
    "                <svg class=\"portfolio-home\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1920 400\" width=\"1920px\" height=\"400px\" preserveAspectRatio=\"xMidYMid slice\">\n" +
    "                    <defs>\n" +
    "                        <mask class=\"portfolio-mask\" id=\"portfolio-mask\" x=\"0\" y=\"0\" width=\"1920px\" height=\"400px\">\n" +
    "                            <rect class=\"portfolio-rect\" x=\"0\" y=\"0\" width=\"1920px\" height=\"400px\"></rect>\n" +
    "                            <text x=\"960\" y=\"60%\" class=\"large-medium-text\">our portfolio</text>\n" +
    "                        </mask>\n" +
    "                    </defs>\n" +
    "                    <rect class=\"portfolio-rect\" x=\"0\" y=\"0\" width=\"1920px\" height=\"400px\"></rect>\n" +
    "                </svg>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"contact-container\">\n" +
    "            <div class=\"contact-title-home\">Get In Touch\n" +
    "                <hr>\n" +
    "                <br>\n" +
    "                <div class=\"message-home\">\n" +
    "                    <div class=\"interested-home\">Interested in working with NOVO?</div>\n" +
    "                    <br>\n" +
    "                    <div class=\"contact-us-home\">email us at\n" +
    "                        <a href=\"mailto:info@projectnovo.co\" style=\"color: #1db996;\">info@projectnovo.co</a></div> or <div class=\"contact-us-home\">call us at one of our <span style=\"color: #1db996; font-weight: 500;\">four</span> locations!</div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12 center\" style=\"margin-bottom: -100px;\">\n" +
    "                        <div class=\"col-md-3 office-home\">\n" +
    "                            <div class=\"hovereffect\">\n" +
    "                                <img class=\"img-responsive\" src=\"/images/contact/raleigh-nc-bw.jpg\" alt=\"\">\n" +
    "                                <div class=\"overlay\">\n" +
    "                                    <br>\n" +
    "                                    <br>\n" +
    "                                    <br>\n" +
    "                                    <h2><span class=\"contact-city\">Raleigh, NC</span></h2>\n" +
    "                                    <p>\n" +
    "                                        <a href=\"tel:+18656797229\">865.679.7229</a>\n" +
    "                                    </p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-3 office-home\">\n" +
    "                            <div class=\"hovereffect\">\n" +
    "                                <img class=\"img-responsive\" src=\"/images/contact/evanston-bw.jpg\" alt=\"\">\n" +
    "                                <div class=\"overlay\">\n" +
    "                                    <br>\n" +
    "                                    <br>\n" +
    "                                    <br>\n" +
    "                                    <h2><span class=\"contact-city\">Chicago, IL</span></h2>\n" +
    "                                    <p>\n" +
    "                                        <a href=\"tel:+18653876121\">865.387.6121</a>\n" +
    "                                    </p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-3 office-home\">\n" +
    "                            <div class=\"hovereffect\">\n" +
    "                                <img class=\"img-responsive\" src=\"/images/contact/knoxville-bw.jpg\" alt=\"\">\n" +
    "                                <div class=\"overlay\">\n" +
    "                                    <br>\n" +
    "                                    <br>\n" +
    "                                    <br>\n" +
    "                                    <h2><span class=\"contact-city\">Knoxville, TN</span></h2>\n" +
    "                                    <p>\n" +
    "                                        <a href=\"tel:+18656969382\">865.696.9382</a>\n" +
    "                                    </p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-3 office-home\">\n" +
    "                            <div class=\"hovereffect\">\n" +
    "                                <img class=\"img-responsive\" src=\"/images/contact/philly-bw.jpg\" alt=\"\">\n" +
    "                                <div class=\"overlay\">\n" +
    "                                    <br>\n" +
    "                                    <br>\n" +
    "                                    <br>\n" +
    "                                    <h2><span class=\"contact-city\">Philadelphia, PA</span></h2>\n" +
    "                                    <p>\n" +
    "                                        <a href=\"tel:+13365800855\">336.580.0855</a>\n" +
    "                                    </p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"newsletter-home-container\">\n" +
    "            <svg class=\"newsletter-home\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1920 400\" width=\"1920px\" height=\"500px\" preserveAspectRatio=\"xMidYMid slice\">\n" +
    "                <defs>\n" +
    "                    <mask class=\"newsletter-mask\" id=\"newsletter-mask\" x=\"0\" y=\"0\" width=\"1920px\" height=\"500px\">\n" +
    "                        <rect class=\"newsletter-rect\" x=\"0\" y=\"0\" width=\"1920px\" height=\"500px\"></rect>\n" +
    "                        <text x=\"960\" y=\"40%\" class=\"medium-text\">sign up for our newsletter</text>\n" +
    "                        <!-- I feel like we could say something a little better here. Let's do some research into this -->\n" +
    "                    </mask>\n" +
    "                 </defs>\n" +
    "                 <rect class=\"newsletter-rect\" x=\"0\" y=\"0\" width=\"1920px\" height=\"500px\"></rect>\n" +
    "            </svg>\n" +
    "            <div class=\"contact\" id=\"contact\">\n" +
    "                <div class=\"contact-section\">\n" +
    "                    <form class=\"ctr\" action=\"//projectnovo.us11.list-manage.com/subscribe/post?u=a56f7f3f876fa9db4c36328af&amp;id=ff3d3ae826\" method=\"post\">\n" +
    "                        <div class=\"loader\"></div>\n" +
    "                        <input type=\"email\" name=\"EMAIL\" required>\n" +
    "                        <div class=\"indicator\" data-content=\"Type Your Email Address\"></div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n" +
    "                <div class=\"display-none\">\n" +
    "                    <div style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_a56f7f3f876fa9db4c36328af_ff3d3ae826\" tabindex=\"-1\" value=\"\"></div>\n" +
    "                    <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "                    <!-- <div class=\"newsletter-section\">\n" +
    "                         <br>\n" +
    "                         <span class=\"newsletter-home\">sign up for our monthly newsletter!</span>\n" +
    "                         <br><br><br><br>\n" +
    "                         <div class=\"contact\" id=\"contact\">\n" +
    "                             <div class=\"contact-section\">\n" +
    "                                 <form class=\"ctr\" action=\"//projectnovo.us11.list-manage.com/subscribe/post?u=a56f7f3f876fa9db4c36328af&amp;id=ff3d3ae826\" method=\"post\">\n" +
    "                                     <div class=\"loader\"></div>\n" +
    "                                     <input type=\"email\" name=\"EMAIL\" required>\n" +
    "                                     <div class=\"indicator\" data-content=\"Type Your Email Address\"></div>\n" +
    "                                 </form>\n" +
    "                             </div>\n" +
    "\n" +
    "                             <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n" +
    "               <!-- <div class=\"display-none\">\n" +
    "                    <div style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_a56f7f3f876fa9db4c36328af_ff3d3ae826\" tabindex=\"-1\" value=\"\"></div>\n" +
    "                    <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>-->\n" +
    "        <div class=\"footer\">\n" +
    "            <div class=\"footer-text\">© 2015 NOVO, LLC.</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!--<div id=\"home2\">\n" +
    "            <div class=\"desc\" align=\"center\">\n" +
    "                <h3 class=\"portfolio-link\"><a href=\"/portfolio/\">View Our Portolio</a></h3>\n" +
    "                <!--\n" +
    "                <h3>Meet The Team</h3>\n" +
    "                <hr>\n" +
    "                <div id=\"team\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <div class=\"col-md-3 team-member\">\n" +
    "                                <img src=\"/images/team/val.png\" />\n" +
    "                                <br>\n" +
    "                                <br>\n" +
    "                                <div class=\"name\">Valentino</div>\n" +
    "                                <hr>\n" +
    "                                <h2>Data</h2>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-3 team-member\">\n" +
    "                                <img src=\"/images/team/mikey.png\" />\n" +
    "                                <br>\n" +
    "                                <br>\n" +
    "                                <div class=\"name\">Michael</div>\n" +
    "                                <hr>\n" +
    "                                <h2>Design</h2>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-3 team-member\">\n" +
    "                                <img src=\"/images/team/trevor.png\" />\n" +
    "                                <br>\n" +
    "                                <br>\n" +
    "                                <div class=\"name\">Trevor</div>\n" +
    "                                <hr>\n" +
    "                                <h2>Development</h2>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-3 team-member\">\n" +
    "                                <img src=\"/images/team/garrett.png\" />\n" +
    "                                <br>\n" +
    "                                <br>\n" +
    "                                <div class=\"name\">Garrett</div>\n" +
    "                                <hr>\n" +
    "                                <h2>Marketing</h2>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                -->\n" +
    "<!-- </div>\n" +
    "</div> -->");
}]);

angular.module("home/index1.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index1.tpl.html",
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
    "                <div class=\"center\">\n" +
    "                    <div class=\"box2 small-medium\">\n" +
    "                        <img src=\"/images/contact/chap.jpeg\" class=\"img-fill opacity\">\n" +
    "                        <br>\n" +
    "                        <div class=\"city\" style=\"font-size: 22px;\">Chapel Hill, NC</div>\n" +
    "                        <a href=\"tel:+18656797229\">\n" +
    "                            <div class=\"subtitle\">(865) 679-7229</div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <br>\n" +
    "                    <div class=\"box2 small-medium\">\n" +
    "                        <img src=\"/images/contact/evanston.jpg\" class=\"img-fill opacity\">\n" +
    "                        <br>\n" +
    "                        <div class=\"city\" style=\"font-size: 22px;\">Chicago, IL</div>\n" +
    "                        <a href=\"tel:+18653876121\">\n" +
    "                            <div class=\"subtitle\">(865) 387-6121</div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <br>\n" +
    "                    <div class=\"box2 small-medium\">\n" +
    "                        <img src=\"/images/contact/knoxville.jpg\" class=\"img-fill opacity\">\n" +
    "                        <br>\n" +
    "                        <div class=\"city\" style=\"font-size: 22px;\">Knoxville, TN</div>\n" +
    "                        <a href=\"tel:+18656969382\">    \n" +
    "                            <div class=\"subtitle\">(865) 696-9382</div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <br>\n" +
    "                    <div class=\"box2 small-medium\">\n" +
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

angular.module("intro/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("intro/index.tpl.html",
    "<link href='http://fonts.googleapis.com/css?family=Jura:400,300,500|Quicksand:400,300' rel='stylesheet' type='text/css'>\n" +
    "\n" +
    "<div class=\"intro-container\">\n" +
    "    <svg class=\"intro\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1920 1080\" width=\"1920px\" height=\"1080px\" preserveAspectRatio=\"xMidYMid slice\">\n" +
    "        <defs>\n" +
    "            <mask class=\"intro-mask\" id=\"mask\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">\n" +
    "                <rect x=\"0\" y=\"0\" width=\"1920px\" height=\"1080px\"></rect>\n" +
    "                <text x=\"960\" y=\"27%\" class=\"large-text\">welcome</text>\n" +
    "                <text x=\"960\" y=\"46%\" class=\"medium-text desktop\">embrace change with NOVO</text>\n" +
    "                <text x=\"960\" y=\"44%\" class=\"medium-text mobile\">embrace change</text>\n" +
    "                <text x=\"960\" y=\"49%\" class=\"medium-text mobile\">with NOVO</text>\n" +
    "                <text x=\"960\" y=\"51%\" class=\"small-text mantra\">a full-scale online marketing, design, and web development firm</text>\n" +
    "                <text x=\"960\" y=\"67.5%\" class=\"small-text learn-more\">learn more</text>\n" +
    "                <a href=\"#more\">\n" +
    "                    <svg class=\"tri-before bounce\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"883px\" y=\"68%\" width=\"150px\" height=\"150px\" viewBox=\"0 0 723 626\" enable-background=\"new 0 0 723 626\" xml:space=\"preserve\">\n" +
    "                        <g>\n" +
    "                          <path fill=\"#232322\" d=\"M0,0h723v1.58c-3.72,4.37-5.58,9.96-8.89,14.62C596.69,219.439,479.44,422.79,361.96,626h-0.6\n" +
    "                            C243.45,421.77,125.54,217.55,7.63,13.32C5.09,9.061,2.85,4.62,0,0.55V0z\"></path>\n" +
    "                          <path fill=\"#FFFFFF\" d=\"M86.57,48.002c183.289,0.01,366.569-0.02,549.859,0.02c-40.779,70.681-81.6,141.33-122.39,212.01\n" +
    "                            c-7.36,12.841-14.91,25.58-22.11,38.521l-0.229-0.01c-86.79-0.09-173.59-0.06-260.38-0.011h-0.211\n" +
    "                            c-20.239-35.569-40.899-70.899-61.289-106.379C142.061,144.111,114.359,96.031,86.57,48.002z\"></path>\n" +
    "                          <path fill=\"#21B795\" d=\"M231.311,298.599c86.79-0.049,173.59-0.079,260.38,0.011c-19.42,34.3-39.36,68.31-59,102.479\n" +
    "                            c-23.71,41.091-47.44,82.16-71.15,123.25c-20.92-36.039-41.68-72.17-62.55-108.229C276.48,376.909,253.65,337.89,231.311,298.599z\"></path>\n" +
    "                        </g>\n" +
    "                    </svg>\n" +
    "                </a>\n" +
    "            </mask>\n" +
    "        </defs>\n" +
    "        <rect x=\"0\" y=\"0\" width=\"1920px\" height=\"1080px\"></rect>\n" +
    "        <a href=\"#more\">\n" +
    "            <svg class=\"tri-after\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"883px\" y=\"68%\" width=\"150px\" height=\"150px\" viewBox=\"0 0 723 626\" enable-background=\"new 0 0 723 626\" xml:space=\"preserve\">\n" +
    "                <g>\n" +
    "                  <path fill=\"#232322\" d=\"M0,0h723v1.58c-3.72,4.37-5.58,9.96-8.89,14.62C596.69,219.439,479.44,422.79,361.96,626h-0.6\n" +
    "                    C243.45,421.77,125.54,217.55,7.63,13.32C5.09,9.061,2.85,4.62,0,0.55V0z\"></path>\n" +
    "                  <path fill=\"#FFFFFF\" d=\"M86.57,48.002c183.289,0.01,366.569-0.02,549.859,0.02c-40.779,70.681-81.6,141.33-122.39,212.01\n" +
    "                    c-7.36,12.841-14.91,25.58-22.11,38.521l-0.229-0.01c-86.79-0.09-173.59-0.06-260.38-0.011h-0.211\n" +
    "                    c-20.239-35.569-40.899-70.899-61.289-106.379C142.061,144.111,114.359,96.031,86.57,48.002z\"></path>\n" +
    "                  <path fill=\"#21B795\" d=\"M231.311,298.599c86.79-0.049,173.59-0.079,260.38,0.011c-19.42,34.3-39.36,68.31-59,102.479\n" +
    "                    c-23.71,41.091-47.44,82.16-71.15,123.25c-20.92-36.039-41.68-72.17-62.55-108.229C276.48,376.909,253.65,337.89,231.311,298.599z\"></path>\n" +
    "                </g>\n" +
    "            </svg>\n" +
    "        </a>\n" +
    "    </svg>\n" +
    "    <video id=\"video\" autoplay=\"autoplay\" muted=\"muted\" preload=\"auto\" loop=\"loop\">\n" +
    "        <source src=\"http://mazwai.com/system/posts/videos/000/000/161/preview_mp4_3/leonard_soosay--missfit.mp4?1424004876\" type=\"video/webm\">\n" +
    "        <object data=\"flvplayer.swf\" type=\"application/x-shockwave-flash\">\n" +
    "            <param value=\"flvplayer.swf\" name=\"movie\"/>\n" +
    "        </object>\n" +
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
    "            	<div class=\"hovereffect2\">\n" +
    "	                <img lass=\"img-responsive\" src=\"/images/portfolio/absolute/symbol300.png\">\n" +
    "	                <div class=\"overlay2\">\n" +
    "				        <h2>Absolute Yachts</h2>\n" +
    "				        <p>\n" +
    "				        	<a href=\"http://www.absoluteyachtsna.com/\">\n" +
    "				                <i class=\"fa fa-play\"></i>\n" +
    "				            </a>\n" +
    "				            <a href=\"https://www.facebook.com/pages/Absolute-North-America/1467350980243678\">\n" +
    "				                <i class=\"fa fa-facebook\"></i>\n" +
    "				            </a>\n" +
    "				            <a href=\"https://twitter.com/AbsoluteNA\">\n" +
    "				                <i class=\"fa fa-twitter\"></i>\n" +
    "				            </a>\n" +
    "				            <a href=\"https://instagram.com/absoluteyachtsna/\">\n" +
    "				                <i class=\"fa fa-instagram\"></i>\n" +
    "				            </a>\n" +
    "				        </p>\n" +
    "				    </div>\n" +
    "				</div>\n" +
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

angular.module("portfolio/index2.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("portfolio/index2.tpl.html",
    "<div class=\"container home-pad\">\n" +
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
    "<div class='container home-pad' style=\"margin: 180px auto 0;\">\n" +
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
    "<div class=\"container home-pad\">\n" +
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

angular.module("portfolio/indextriangles.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("portfolio/indextriangles.tpl.html",
    "<link rel=\"stylesheet\" href=\"/styles/css/portfolio.css\">\n" +
    "\n" +
    "<!--<div class=\"surface-container\">\n" +
    "    <div class=\"center top-area\">\n" +
    "        <div class=\"title-top\">Quality, Modernity, and Transparency\n" +
    "        <hr>\n" +
    "        </div>\n" +
    "        <div class=\"message-portfolio\">\n" +
    "            <div class=\"interested-portfolio\">\n" +
    "                <br>\n" +
    "                <p>\n" +
    "                    Our clients know what it means to be partners with NOVO. We provide quality work, employ the latest marketing and web development techniques, and  implement a workflow process that allows for complete transparency and client collaboration.\n" +
    "                </p>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <p style=\"font-size:22px;\">Our work speaks for itself.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"surface-container\">\n" +
    "    <div class=\"center\" style=\"background:url(/images/texture-bg.png) repeat;\">\n" +
    "        <div class=\"portfolio-tile\" style=\"\">\n" +
    "            <div class=\"hovereffect\">\n" +
    "                <img class=\"img-responsive\" src=\"/images/portfolio/absolute/absolute-outside.jpg\" alt=\"\">\n" +
    "                <div class=\"overlay\">\n" +
    "                    <h2 style=\"font-size: 25px;\">Absolute Yachts North America</h2>\n" +
    "                    <div class=\"hover-info\">\n" +
    "                        Absolute is an Italian yacht brand based in Piacenza, manufacturing yachts\n" +
    "                        ranging from 40 to 72 feet. NOVO is responsible for Absolute North America's online marketing,\n" +
    "                        including web design and development, email marketing, and social media marketing.\n" +
    "                    </div>\n" +
    "                    <p style=\"font-size: 40px;\">\n" +
    "                        <a href=\"http://www.absoluteyachtsna.com/\">\n" +
    "                            <i class=\"fa fa-globe\"></i>\n" +
    "                        </a>\n" +
    "                        <a href=\"https://www.facebook.com/pages/Absolute-North-America/1467350980243678\">\n" +
    "                            <i class=\"fa fa-facebook\"></i>\n" +
    "                        </a>\n" +
    "                        <a href=\"https://twitter.com/AbsoluteNA\">\n" +
    "                            <i class=\"fa fa-twitter\"></i>\n" +
    "                        </a>\n" +
    "                        <a href=\"https://instagram.com/absoluteyachtsna/\">\n" +
    "                            <i class=\"fa fa-instagram\"></i>\n" +
    "                        </a>\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"portfolio-tile\" style=\"\">\n" +
    "            <div class=\"hovereffect\">\n" +
    "                <img class=\"img-responsive\" src=\"/images/portfolio/stock1.jpg\" alt=\"\">\n" +
    "                <div class=\"overlay\">\n" +
    "                    <h2 style=\"font-size: 25px;\">Comprehensive Online Marketing</h2>\n" +
    "                    <p>\n" +
    "                        <br>\n" +
    "                        Web Design and Development\n" +
    "                        <br>\n" +
    "                        Graphic Design and Brand Development\n" +
    "                        <br>\n" +
    "                        Social Media Marketing\n" +
    "                        <br>\n" +
    "                        Email Marketing\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"portfolio-tile\" style=\"\">\n" +
    "            <div class=\"hovereffect\">\n" +
    "                <img class=\"img-responsive\" src=\"/images/portfolio/stock2.jpg\" alt=\"\">\n" +
    "                <div class=\"overlay\">\n" +
    "                    <h2 style=\"font-size: 25px;\">Contact Us</h2>\n" +
    "                    <p>\n" +
    "                        <br>\n" +
    "                        We would love the opportunity to work with you and your company on your next online marketing project.\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                        <a href=\"/contact/\" style=\"font-size: 40px;\">Get in touch.</a>\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"center bottom-area\">\n" +
    "        <div class=\"title-bottom\">How We Build It\n" +
    "            <hr>\n" +
    "        </div>\n" +
    "        <div class=\"message-portfolio\">\n" +
    "            <div class=\"interested-portfolio\">\n" +
    "                <br>\n" +
    "                <p>\n" +
    "                   The latest technology, mobile-friendly, and unparalleled in custom design. Each site is custom-tailored.\n" +
    "                </p>\n" +
    "                <a href=\"/about/\"><button class=\"mainbutton service-button\">More Info...</button></a>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>-->\n" +
    "<div class=\"home-pad\">\n" +
    "<div class=\"container\">\n" +
    "    <div id=\"\" class=\"info\">\n" +
    "        <div class=\"title\" style=\"font-weight:400;\">Quality, Modernity, and Transparency</div>\n" +
    "        <br>\n" +
    "        <hr>\n" +
    "        <br>\n" +
    "        <div class=\"portfolio-message\">\n" +
    "            <p>Our clients know what it means to be partners with NOVO. We provide quality work, employ the latest marketing and web development techniques, and  implement a workflow process that allows for complete transparency and client collaboration.</p>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <p>We believe our work speaks for itself.</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!--make dynamic with angular-->\n" +
    "<div class=\"container\" style=\"margin: 120px auto 0;\">\n" +
    "    <div class=\"wrap\" ng-click=\"select_portfolio('client1')\">\n" +
    "        <div class=\"crop\">\n" +
    "            <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"wrap\" ng-click=\"select_portfolio('client2')\">\n" +
    "        <div class=\"crop\">\n" +
    "            <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"wrap\" ng-click=\"select_portfolio('client3')\">\n" +
    "        <div class=\"crop\">\n" +
    "            <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"wrap\" ng-click=\"select_portfolio('client4')\">\n" +
    "        <div class=\"crop\">\n" +
    "            <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"wrap\" ng-click=\"select_portfolio('absolute')\">\n" +
    "        <div class=\"crop\">\n" +
    "            <img src=\"/images/portfolio/absolute/symbol300.png\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"wrap\" ng-click=\"select_portfolio('client1')\">\n" +
    "        <div class=\"crop\">\n" +
    "            <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"wrap\" ng-click=\"select_portfolio('client2')\">\n" +
    "        <div class=\"crop\">\n" +
    "            <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"wrap\" ng-click=\"select_portfolio('client3')\">\n" +
    "        <div class=\"crop\">\n" +
    "            <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"wrap\" ng-click=\"select_portfolio('client4')\">\n" +
    "        <div class=\"crop\">\n" +
    "            <img src=\"\" style=\"background-color: #1db996;\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<br><br><br>\n" +
    "\n" +
    "<div style=\"background-color:rgb(0,0,0)\">\n" +
    "    <div class=\"container\">\n" +
    "        <div id=\"absolute\" class=\"info\" ng-show=\"currently_selected=='absolute'\">\n" +
    "            <div class=\"title\">Absolute Yachts North America</div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <div class=\"portfolio-message\" style=\"color:#fff\">\n" +
    "                Absolute is an Italian yacht brand based in Piacenza, Italy, manufacturing yachts\n" +
    "                ranging from 40 to 72 feet. Communicating the Absolute's focus on design, efficiency, performance\n" +
    "                and serviceability are a high priority. NOVO is responsible for Absolute North America's online marketing,\n" +
    "                including web design and development, email marketing, and social media marketing.\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"height:50px;\"></div>\n" +
    "            <div style=\"text-align:center;\" class=\"link\">\n" +
    "                <a style=\"color:#1db996;font-size:30px;\" href=\"www.absoluteyachtsna.com\">absoluteyachtsna.com</a>\n" +
    "            </div>\n" +
    "            <div style=\"height:80px;\"></div>\n" +
    "\n" +
    "            <a href=\"http://www.absoluteyachtsna.com/\" style=\"text-align:cener;\">\n" +
    "                <img src=\"/images/portfolio/absolute/absolute-screenshot.png\" class=\"img-fill\" style=\"width: 100%\">\n" +
    "            </a>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <!--on click triangle show-->\n" +
    "        <div id=\"client1\" class=\"info\" ng-show=\"currently_selected=='client1'\">\n" +
    "            <div class=\"title\">Client 1</div>\n" +
    "            <div class=\"portfolio-message\" style=\"color:#fff\">hey client 1</div>\n" +
    "            <div class=\"link\"></div>\n" +
    "            <div style=\"height:80px;\"></div>\n" +
    "            <a href=\"#\" style=\"text-align:cener;\">\n" +
    "                <img src=\"/images/portfolio/stock1.jpg\" class=\"img-fill\" style=\"width: 100%\">\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div id=\"client2\" class=\"info\" ng-show=\"currently_selected=='client2'\">\n" +
    "            <div class=\"title\">Client 2</div>\n" +
    "            <div class=\"portfolio-message\" style=\"color:#fff\">hey client 2</div>\n" +
    "            <div class=\"link\"></div>\n" +
    "            <div style=\"height:80px;\"></div>\n" +
    "            <a href=\"#\" style=\"text-align:cener;\">\n" +
    "                <img src=\"/images/portfolio/stock2.jpg\" class=\"img-fill\" style=\"width: 100%\">\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div id=\"client3\" class=\"info\" ng-show=\"currently_selected=='client3'\">\n" +
    "            <div class=\"title\">Client 3</div>\n" +
    "            <div class=\"portfolio-message\" style=\"color:#fff\">hey client 3</div>\n" +
    "            <div class=\"link\"></div>\n" +
    "            <div style=\"height:80px;\"></div>\n" +
    "            <a href=\"#\" style=\"text-align:cener;\">\n" +
    "                <img src=\"/images/portfolio/absolute/absolute-outside.jpg\" class=\"img-fill\" style=\"width: 100%\">\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div id=\"client4\" class=\"info\" ng-show=\"currently_selected=='client4'\">\n" +
    "            <div class=\"title\">Client 4</div>\n" +
    "            <div class=\"portfolio-message\" style=\"color:#fff\">hey client 4</div>\n" +
    "            <div class=\"link\"></div>\n" +
    "            <div style=\"height:80px;\"></div>\n" +
    "            <a href=\"#\" style=\"text-align:cener;\">\n" +
    "                <img src=\"/images/portfolio/vidhop-screenshot.png\" class=\"img-fill\" style=\"width: 100%\">\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
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
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/about/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\"><i class=\"fa fa-info\"></i></div>\n" +
    "                    <div class=\"nav-large-list\">About</div>\n" +
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
    "            <a href=\"/contact/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\"><i class=\"fa fa-comment-o\"></i></div>\n" +
    "                    <div class=\"nav-large-list\">Contact</div>\n" +
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
    "");
}]);
