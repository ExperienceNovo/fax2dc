angular.module('templates-app', ['about/about.tpl.html', 'about/index.tpl.html', 'blog-post/index.tpl.html', 'blog/index.tpl.html', 'contact/contacthead.tpl.html', 'contact/index.tpl.html', 'home/about.tpl.html', 'home/contact.tpl.html', 'home/index.tpl.html', 'home/portfolio.tpl.html', 'intro/index.tpl.html', 'portfolio/index.tpl.html', 'portfolio/portfoliohead.tpl.html', 'sidebar/index.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"about-outter\">\n" +
    "  <div class=\"about-topping\">\n" +
    "    <div class=\"about-title\">\n" +
    "      <p><span>The <img style=\"height:57px\" src=\"/images/logo.png\"> Experience</span></p>\n" +
    "      <hr>\n" +
    "    </div>\n" +
    "    <div class=\"about-desc\">\n" +
    "      Crafting an effective message is about delivering the right words in a way that&nbsp;will&nbsp;be&nbsp;remembered.\n" +
    "      <br>\n" +
    "      To us, that means transforming a vision into creative design engineered with&nbsp;the&nbsp;latest&nbsp;technology.\n" +
    "      <br>\n" +
    "      Each step is closely tailored to fit your identity, because at NOVO you're&nbsp;more&nbsp;than&nbsp;just&nbsp;a&nbsp;client&nbsp;— you're&nbsp;a&nbsp;partner.\n" +
    "      <br><br><br>\n" +
    "      <strong style=\"letter-spacing:5px;color:#14B795\">Let's bring your ideas&nbsp;to&nbsp;life.</strong>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"about-outter\">\n" +
    "    <div class=\"col-md-4 about-col\">\n" +
    "      <label class=\"card effect__check\" for=\"one\">\n" +
    "      <input type=\"checkbox\" id=\"one\" name=\"one\" />\n" +
    "        <span class=\"child\">\n" +
    "          <span class=\"about-card__front block\">\n" +
    "            <figure class=\"about-cards card-trev\">\n" +
    "              <h2>Design</h2>\n" +
    "            </figure>\n" +
    "          </span>\n" +
    "          <span class=\"about-card__back block\">\n" +
    "            <p>\n" +
    "            Our creative team's first and most important step is understanding who you are. Once we're sure that's achieved, there are no limits. From logos and print-work to fully formed brands, NOVO translates skill and experience into striking visuals that embody your core.<br> Design is in our DNA.</p>\n" +
    "          </span>\n" +
    "        </span>\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4 about-col\">\n" +
    "      <label class=\"card effect__check\" for=\"two\">\n" +
    "      <input type=\"checkbox\" id=\"two\" name=\"two\" />\n" +
    "        <span class=\"child\">\n" +
    "          <span class=\"about-card__front block\">\n" +
    "            <figure class=\"about-cards card-val\">\n" +
    "              <h2>Development</h2>\n" +
    "            </figure>\n" +
    "          </span>\n" +
    "          <span class=\"about-card__back block\">\n" +
    "            <p>\n" +
    "            Building websites with powerful, reliable, and modern technology is a given. Beyond that, user experience is the focus. Each click should lead an audience on a journey through your vision. <br>Tell your story with elements that seamlessly flow into each other.<br> Mobile-ready. Universally compatibale.</p>\n" +
    "          </span>\n" +
    "        </span>\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4 about-col\">\n" +
    "      <label class=\"card effect__check\" for=\"three\">\n" +
    "      <input type=\"checkbox\" id=\"three\" name=\"three\" />\n" +
    "        <span class=\"child\">\n" +
    "          <span class=\"about-card__front block\">\n" +
    "            <figure class=\"about-cards card-mt\">\n" +
    "              <h2>Marketing</h2>\n" +
    "            </figure>\n" +
    "          </span>\n" +
    "          <span class=\"about-card__back block\">\n" +
    "            <p>\n" +
    "            Extend your influence through comprehensive and efficient strategies. Our clients, on average, see a 500% increase in social media and domain traffic. Our marketing team is composed of experts in fields ranging from data science to content creation. Tell us where you want to go.<br> We'll tell you how to get there.</p>\n" +
    "          </span>\n" +
    "        </span>\n" +
    "      </label>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "<!--\n" +
    "  <div class=\"about-topping\">\n" +
    "    <div class=\"about-title\">\n" +
    "      <p>poop</p>\n" +
    "      <hr>\n" +
    "    </div>\n" +
    "    <form class=\"ctr newsletter-input\" action=\"//projectnovo.us11.list-manage.com/subscribe/post?u=a56f7f3f876fa9db4c36328af&amp;id=ff3d3ae826\" method=\"post\">\n" +
    "        <div class=\"loader\"></div>\n" +
    "        <input type=\"email\" name=\"EMAIL\" required>\n" +
    "        <div class=\"indicator\" data-content=\"Type Your Email Address\"></div>\n" +
    "    </form>-->\n" +
    "\n" +
    "    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n" +
    "<!--  <div class=\"display-none\">\n" +
    "        <div style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_a56f7f3f876fa9db4c36328af_ff3d3ae826\" tabindex=\"-1\" value=\"\"></div>\n" +
    "        <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n" +
    "    </div>\n" +
    "  </div>-->\n" +
    "</div>\n" +
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
    "\n" +
    "		<div ng-show=\"currentUser\">\n" +
    "			<button class=\"btn btn-primary\" ng-click=\"edit_post_toggle()\">edit</button>\n" +
    "		</div>\n" +
    "\n" +
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
    "\n" +
    "	<div ng-show=\"currentUser\">\n" +
    "		<div ng-show=\"edit\">\n" +
    "			<form class=\"blog-input\" role=\"form\" ng-submit=\"editPost(post)\">\n" +
    "				<div class=\"form-group\">\n" +
    "					<input type=\"text\" ng-model=\"post.title\" class=\"form-control\" id=\"postTitle\">\n" +
    "					<input type=\"text\" ng-model=\"post.url_title\" class=\"form-control\" id=\"postTitle\">\n" +
    "					<textarea ng-model=\"post.post_content\" class=\"form-control\" id=\"postContent\"></textarea>\n" +
    "				</div>\n" +
    "				<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
    "			</form>\n" +
    "\n" +
    "			<button class=\"btn btn-primary\" ng-click=\"destroyPost(post)\">delete</button>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
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

angular.module("contact/contacthead.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/contacthead.tpl.html",
    "<div class=\"contact-top\">\n" +
    "  <div class=\"social-wrapper\">\n" +
    "      <div class=\"stay-top\">stay connected</div>\n" +
    "      <div class=\"social\">\n" +
    "        <a target=\"_blank\" href=\"https://www.facebook.com/experienceNOVO\">&#62220;</a>\n" +
    "      </div>\n" +
    "      <div class=\"social\">\n" +
    "        <a target=\"_blank\" href=\"https://twitter.com/experienceNOVO\">&#62217;</a>\n" +
    "      </div>\n" +
    "      <div class=\"social\">\n" +
    "        <a target=\"_blank\" href=\"https://www.linkedin.com/company/novo---web-design-web-development-&-online-marketing?trk=biz-companies-cym\">&#62232;</a>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("contact/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/index.tpl.html",
    "<style type=\"text/css\">\n" +
    "    .angular-google-map-container { height: 400px; box-shadow: 0 0 10px rgba(0,0,0,0.5); }\n" +
    "</style>\n" +
    "<div ng-include=\"'contact/contacthead.tpl.html'\"></div>\n" +
    "<div class=\"contact-page-container\">\n" +
    "    <br><br>\n" +
    "    <div class=\"row contact-page-lower\">\n" +
    "        <div class=\"contact-title\">\n" +
    "            <p>three locations nationwide</p>\n" +
    "            <hr>\n" +
    "        </div>\n" +
    "        <div class=\"card-wrapper\">\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <label class=\"card effect__check\" for=\"one\">\n" +
    "                <input type=\"checkbox\" id=\"one\" name=\"one\" />\n" +
    "                <span class=\"child\">\n" +
    "                    <span class=\"card__front block\">\n" +
    "                        <figure class=\"cards card-trev\">\n" +
    "                            <figcaption>\n" +
    "                                <h2>Raleigh  <span>NC</span></h2>\n" +
    "                            </figcaption>\n" +
    "                        </figure>\n" +
    "                    </span>\n" +
    "                    <span class=\"card__back block\">\n" +
    "                        <span class=\"card__name smallest-text\">Trevor Overman</span>\n" +
    "                        <span class=\"card__phone smallest-text\">(865) 679-7229</span>\n" +
    "                    </span>\n" +
    "                </span>\n" +
    "                </label>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <label class=\"card effect__check\" for=\"two\">\n" +
    "                <input type=\"checkbox\" id=\"two\" name=\"two\" />\n" +
    "                <span class=\"child\">\n" +
    "                    <span class=\"card__front block\">\n" +
    "                        <figure class=\"cards card-val\">\n" +
    "                            <figcaption>\n" +
    "                                <h2>Chicago  <span>IL</span></h2>\n" +
    "                            </figcaption>\n" +
    "                        </figure>\n" +
    "                    </span>\n" +
    "                    <span class=\"card__back block\">\n" +
    "                        <span class=\"card__name smallest-text\">Valentino Constantinou</span>\n" +
    "                        <span class=\"card__phone smallest-text\">(865) 387-6121</span>\n" +
    "                    </span>\n" +
    "                </span>\n" +
    "                </label>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <label class=\"card effect__check\" for=\"three\">\n" +
    "                <input type=\"checkbox\" id=\"three\" name=\"three\" />\n" +
    "                <span class=\"child\">\n" +
    "                    <span class=\"card__front block\">\n" +
    "                        <figure class=\"cards card-mt\">\n" +
    "                            <figcaption>\n" +
    "                                <h2>Philadelphia  <span>PA</span></h2>\n" +
    "                            </figcaption>\n" +
    "                        </figure>\n" +
    "                    </span>\n" +
    "                    <span class=\"card__back block\">\n" +
    "                        <span class=\"card__name smallest-text\">Michael Thompson</span>\n" +
    "                        <span class=\"card__phone smallest-text\">(336) 580-0855</span>\n" +
    "                    </span>\n" +
    "                </span>\n" +
    "                </label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"work-outter bottom-contact\">\n" +
    "            <div class=\"contact-title\">\n" +
    "                <p>work with us</p>\n" +
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
    "        <div class=\"map-outter bottom-contact\">\n" +
    "            <div class=\"gmap-container\" id=\"gmap\">\n" +
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

angular.module("home/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/about.tpl.html",
    "<div class=\"about-outter\">\n" +
    "  <div class=\"about-topping\">\n" +
    "    <div class=\"about-title\">\n" +
    "      <p><span>The <img style=\"height:57px\" src=\"/images/novo/logo.png\"> Experience</span></p>\n" +
    "      <hr>\n" +
    "    </div>\n" +
    "    <div class=\"about-desc\">\n" +
    "      Crafting an effective message is about delivering the right words in a way that&nbsp;will&nbsp;be&nbsp;remembered.\n" +
    "      <br>\n" +
    "      To us, that means transforming a vision into creative design engineered with&nbsp;the&nbsp;latest&nbsp;technology.\n" +
    "      <br>\n" +
    "      Each step is closely tailored to fit your identity, because at NOVO you're&nbsp;more&nbsp;than&nbsp;just&nbsp;a&nbsp;client&nbsp;— you're&nbsp;a&nbsp;partner.\n" +
    "      <br><br>\n" +
    "      <strong style=\"letter-spacing:5px;color:#14B795\">Let's bring your ideas&nbsp;to&nbsp;life.</strong>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--\n" +
    "  <div class=\"about-outter\">\n" +
    "    <div class=\"col-md-4 about-col\">\n" +
    "      <label class=\"card effect__check\" for=\"one\">\n" +
    "      <input type=\"checkbox\" id=\"one\" name=\"one\" />\n" +
    "        <span class=\"child\">\n" +
    "          <span class=\"about-card__front block\">\n" +
    "            <figure class=\"about-cards card-design\">\n" +
    "              <h2>Design</h2>\n" +
    "            </figure>\n" +
    "          </span>\n" +
    "          <span class=\"about-card__back block\">\n" +
    "            <p>\n" +
    "            Our creative team's first and most important step is understanding who you are. Once we're sure that's achieved, there are no limits. From logos and print-work to fully formed brands, NOVO translates skill and experience into striking visuals that embody your core.<br> Design is in our DNA.</p>\n" +
    "          </span>\n" +
    "        </span>\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4 about-col\">\n" +
    "      <label class=\"card effect__check\" for=\"two\">\n" +
    "      <input type=\"checkbox\" id=\"two\" name=\"two\" />\n" +
    "        <span class=\"child\">\n" +
    "          <span class=\"about-card__front block\">\n" +
    "            <figure class=\"about-cards card-development\">\n" +
    "              <h2>Development</h2>\n" +
    "            </figure>\n" +
    "          </span>\n" +
    "          <span class=\"about-card__back block\">\n" +
    "            <p>\n" +
    "            Building websites with powerful, reliable, and modern technology is a given. Beyond that, user experience is the focus. Each click should lead an audience on a journey through your vision. <br>Tell your story with elements that seamlessly flow into each other.<br> Mobile-ready. Universally compatibale.</p>\n" +
    "          </span>\n" +
    "        </span>\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4 about-col\">\n" +
    "      <label class=\"card effect__check\" for=\"three\">\n" +
    "      <input type=\"checkbox\" id=\"three\" name=\"three\" />\n" +
    "        <span class=\"child\">\n" +
    "          <span class=\"about-card__front block\">\n" +
    "            <figure class=\"about-cards card-marketing\">\n" +
    "              <h2>Marketing</h2>\n" +
    "            </figure>\n" +
    "          </span>\n" +
    "          <span class=\"about-card__back block\">\n" +
    "            <p>\n" +
    "            Extend your influence through comprehensive and efficient strategies. Our clients, on average, see a 500% increase in social media and domain traffic. Our marketing team is composed of experts in fields ranging from data science to content creation. Tell us where you want to go.<br> We'll tell you how to get there.</p>\n" +
    "          </span>\n" +
    "        </span>\n" +
    "      </label>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"about-topping\">\n" +
    "    <div class=\"about-title\">\n" +
    "      <p>poop</p>\n" +
    "      <hr>\n" +
    "    </div>\n" +
    "    <form class=\"ctr newsletter-input\" action=\"//projectnovo.us11.list-manage.com/subscribe/post?u=a56f7f3f876fa9db4c36328af&amp;id=ff3d3ae826\" method=\"post\">\n" +
    "        <div class=\"loader\"></div>\n" +
    "        <input type=\"email\" name=\"EMAIL\" required>\n" +
    "        <div class=\"indicator\" data-content=\"Type Your Email Address\"></div>\n" +
    "    </form>-->\n" +
    "\n" +
    "    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n" +
    "<!--  <div class=\"display-none\">\n" +
    "        <div style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_a56f7f3f876fa9db4c36328af_ff3d3ae826\" tabindex=\"-1\" value=\"\"></div>\n" +
    "        <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n" +
    "    </div>\n" +
    "  </div>-->\n" +
    "\n" +
    "  <div class=\"about-outter\">\n" +
    "    <div class=\"col-md-4 about-col\">\n" +
    "      <div class=\"new-container\">\n" +
    "        <div class=\"new-card\" ng-click=\"toggle_card('design')\" ng-class=\"{'flipped': design == true}\">\n" +
    "          <div class=\"front front-one\">design</div>\n" +
    "          <div class=\"back\">u r gee</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4 about-col\">\n" +
    "      <div class=\"new-container\">\n" +
    "        <div class=\"new-card\" ng-click=\"toggle_card('development')\" ng-class=\"{'flipped': development == true}\">\n" +
    "          <div class=\"front front-two\">development</div>\n" +
    "          <div class=\"back\">u r gee</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4 about-col\">\n" +
    "      <div class=\"new-container\">\n" +
    "        <div class=\"new-card\" ng-click=\"toggle_card('marketing')\" ng-class=\"{'flipped': marketing == true}\">\n" +
    "          <div class=\"front front-three\">marketing</div>\n" +
    "          <div class=\"back\">u r gee</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/contact.tpl.html",
    "<div class=\"col-md-6 bottom-contain\">\n" +
    "  <div class=\"port\">\n" +
    "    <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "      <symbol id=\"contact-text\">\n" +
    "        <text text-anchor=\"middle\"\n" +
    "              x=\"960\"  \n" +
    "              y=\"530\"\n" +
    "              dy=\".35em\"\n" +
    "              class=\"large-medium-text\"\n" +
    "              >\n" +
    "          let's talk\n" +
    "        </text>    \n" +
    "      </symbol>\n" +
    "      <mask id=\"contact-mask\"\n" +
    "            maskunits=\"userSpaceOnUse\"\n" +
    "            maskcontentunits=\"userSpaceOnUse\">\n" +
    "        <rect\n" +
    "              width=\"100%\"\n" +
    "              height=\"100%\"\n" +
    "              class=\"mask__shape\">\n" +
    "        </rect>\n" +
    "        <use xlink:href=\"#contact-text\"\n" +
    "             class=\"mask__text\"\n" +
    "             ></use>\n" +
    "      </mask>\n" +
    "    </svg>\n" +
    "    <div class=\"contact-box\">\n" +
    "      <a href=\"/contact/\">\n" +
    "        <div class=\"text-fill\">\n" +
    "          <img id=\"contact-img-desktop\" src=\"/images/home/contact.jpg\"/>\n" +
    "          <img id=\"contact-img-mobile\" src=\"/images/home/contact-mobile.jpg\"/>\n" +
    "        </div>\n" +
    "        <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewcontact=\"0 0 1920 1080\" \n" +
    "             preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <rect\n" +
    "            id=\"contact-rect\"\n" +
    "            width=\"100%\"\n" +
    "            height=\"100%\"\n" +
    "            mask=\"url(#contact-mask)\"\n" +
    "            class=\"contact--fill\"/>\n" +
    "          <use \n" +
    "              id=\"fill-hover2\"\n" +
    "              xlink:href=\"#contact-text\"\n" +
    "              class=\"text--transparent\">\n" +
    "          </use>\n" +
    "        </svg> \n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<div class=\"surface-container-home\" ng-controller=\"HomeCtrl\">\n" +
    "	\n" +
    "    <div ng-include=\"'intro/index.tpl.html'\"></div>\n" +
    "\n" +
    "    <div ng-include=\"'home/about.tpl.html'\"></div>\n" +
    "	<br><br><br><br>\n" +
    "    <div ng-include=\"'home/portfolio.tpl.html'\"></div>\n" +
    "\n" +
    "    <div ng-include=\"'home/contact.tpl.html'\"></div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/portfolio.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/portfolio.tpl.html",
    "<div class=\"col-md-6 bottom-contain\">\n" +
    "  <div class=\"port\">\n" +
    "    <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "      <symbol id=\"port-text\">\n" +
    "        <text text-anchor=\"middle\"\n" +
    "              x=\"960\"  \n" +
    "              y=\"530\"\n" +
    "              dy=\".35em\"\n" +
    "              class=\"large-medium-text\"\n" +
    "              >\n" +
    "          portfolio\n" +
    "        </text>    \n" +
    "      </symbol>\n" +
    "      <mask id=\"mask-text\"\n" +
    "            maskunits=\"userSpaceOnUse\"\n" +
    "            maskcontentunits=\"userSpaceOnUse\">\n" +
    "        <rect\n" +
    "              width=\"100%\"\n" +
    "              height=\"100%\"\n" +
    "              class=\"mask__shape\">\n" +
    "        </rect>\n" +
    "        <use xlink:href=\"#port-text\"\n" +
    "             class=\"mask__text\"\n" +
    "             ></use>\n" +
    "      </mask>\n" +
    "    </svg>\n" +
    "    <div class=\"port-box\">\n" +
    "      <a href=\"/portfolio/\">\n" +
    "        <div class=\"text-fill\">\n" +
    "          <img src=\"/images/home/portfolio.jpg\"></img>\n" +
    "          <img class=\"port-mobile\" src=\"/images/home/portfolio-mobile.jpg\"></img>\n" +
    "        </div>\n" +
    "        <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" \n" +
    "             preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\" >\n" +
    "          <rect\n" +
    "            id=\"port-rect\"\n" +
    "            width=\"100%\"\n" +
    "            height=\"100%\"\n" +
    "            mask=\"url(#mask-text)\"\n" +
    "            class=\"port--fill\"/>\n" +
    "          <use \n" +
    "              id=\"fill-hover\"\n" +
    "              xlink:href=\"#port-text\"\n" +
    "              class=\"text--transparent\">\n" +
    "          </use>\n" +
    "        </svg> \n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("intro/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("intro/index.tpl.html",
    "<div class=\"intro\">\n" +
    "    <div class=\"intro-container\">\n" +
    "      <!-- this svg is invisible yo -->\n" +
    "      <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "        <symbol id=\"intro-desktop-text\">\n" +
    "          <text text-anchor=\"middle\"\n" +
    "                x=\"960\"  \n" +
    "                y=\"560\"\n" +
    "                dy=\".35em\"\n" +
    "                class=\"medium-text\"\n" +
    "                >\n" +
    "            full-stack design, development, and marketing\n" +
    "          </text>    \n" +
    "        </symbol>\n" +
    "        <mask id=\"intro-desktop-mask\"\n" +
    "              maskunits=\"userSpaceOnUse\"\n" +
    "              maskcontentunits=\"userSpaceOnUse\">\n" +
    "          <rect\n" +
    "                width=\"100%\"\n" +
    "                height=\"100%\"\n" +
    "                class=\"mask__shape\">\n" +
    "          </rect>\n" +
    "          <use xlink:href=\"#intro-desktop-text\"\n" +
    "               class=\"mask__text\"\n" +
    "               ></use>\n" +
    "          <use xlink:href=\"#intro-desktop-novo\" />\n" +
    "        </mask>\n" +
    "      </svg>\n" +
    "      <!--                  |\n" +
    "          so is this one    v    -->\n" +
    "      <svg style=\"height: 0; width: 0; position: absolute; visibility: hidden\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "        <symbol id=\"intro-desktop-novo\">\n" +
    "          <path transform=\"translate(510,560) scale(0.07,-0.07)\" d=\"m4315 3849c-390 -27 -601 -107 -745 -281c-136 -162 -180 -345 -196 -800l-7 -208l-158 0l-159 0l-2 643l-3 642l-156 3c-123 2 -159 0 -168 -11c-8 -10 -12 -309 -13 -1112l-3 -1098l-350 415c-192 229 -608 722 -922 1096c-315 374 -580 687 -589 696c-14 14 -53 16 -327 14l-312 -3l0 -1315l0 -1315l154 -3c104 -2 158 1 167 9c12 10 14 197 14 1180l0 1169l39 0l38 0l1004 -1180l1004 -1180l210 2l210 3l3 588l2 587l164 0l163 0l6 -172c13 -368 58 -541 181 -704c117 -156 303 -240 618 -280c176 -22 971 -32 1226 -15c198 13 369 40 463 72c277 94 430 284 483 599c17 105 36 327 36 433l0 67l456 -2l456 -3l297 -585l297 -585l210 -2l209 -3l300 590l300 590l461 0l461 0l6 -172c19 -517 122 -741 406 -883c184 -92 378 -116 985 -122c617 -7 909 14 1097 78c277 94 430 284 483 599c17 105 36 327 36 433l0 67l380 0l380 0l0 85l0 85l-378 0l-378 0l-12 238c-13 251 -33 434 -57 518c-30 103 -94 214 -169 289c-83 84 -147 122 -273 165c-206 69 -444 90 -1008 90c-748 0 -983 -37 -1191 -185c-121 -87 -215 -228 -255 -384c-28 -109 -47 -286 -55 -523l-7 -208l-414 0l-415 0l65 123c35 67 174 338 307 602c134 264 250 488 258 498c12 14 13 22 4 42l-12 25l-1511 -2c-1373 -3 -1513 -4 -1522 -19c-8 -12 5 -46 56 -145c456 -897 567 -1117 567 -1120c0 -2 -184 -4 -408 -4l-408 0l-12 238c-13 251 -33 434 -57 518c-8 28 -33 89 -56 134c-49 98 -152 208 -239 258c-129 72 -344 122 -615 142c-160 11 -934 11 -1100 -1zm4766 -391c-69 -133 -371 -718 -760 -1472c-114 -220 -211 -401 -217 -403c-6 -2 -64 101 -129 229c-65 128 -180 352 -255 498c-213 412 -650 1268 -650 1274c0 3 468 6 1040 6l1040 0l-69 -132zm-3621 41c256 -18 383 -57 454 -141c42 -49 92 -165 112 -258c14 -70 34 -337 34 -467l0 -73l-1182 0l-1181 0l7 178c23 602 120 727 587 761c169 12 1001 12 1169 0zm6460 0c256 -18 383 -57 454 -141c42 -49 92 -165 112 -258c14 -70 34 -337 34 -467l0 -73l-1182 0l-1181 0l7 178c23 602 120 727 587 761c169 12 1001 12 1169 0zm-5873 -1266c-12 -289 -50 -426 -147 -524c-103 -105 -202 -125 -674 -140c-400 -12 -976 1 -1116 26c-156 29 -260 96 -315 205c-48 95 -85 314 -85 506l0 84l1172 0l1171 0l-6 -157zm6460 0c-12 -289 -50 -426 -147 -524c-103 -105 -202 -125 -674 -140c-400 -12 -976 1 -1116 26c-156 29 -260 96 -315 205c-48 95 -85 314 -85 506l0 84l1172 0l1171 0l-6 -157z\"/>\n" +
    "        </symbol>\n" +
    "      </svg>\n" +
    "\n" +
    "      <!-- this is a box... with some text n vids n stuff-->\n" +
    "      <div class=\"box-with-text\">\n" +
    "        <div class=\"text-fill\">\n" +
    "          <video \n" +
    "              class=\"video\" \n" +
    "              src=\"videos/novo1.mp4\" \n" +
    "              preload=\"auto\" \n" +
    "              autoplay=\"autoplay\" \n" +
    "              loop=\"loop\" \n" +
    "              muted=\"muted\">\n" +
    "          </video>\n" +
    "        </div>\n" +
    "        <!-- this is the sweet, visible novo one -->\n" +
    "        <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" \n" +
    "             preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <rect\n" +
    "            width=\"100%\"\n" +
    "            height=\"100%\"\n" +
    "            mask=\"url(#intro-desktop-mask)\"\n" +
    "            class=\"shape--fill\"/>\n" +
    "          <use xlink:href=\"#intro-desktop-text\"\n" +
    "              class=\"text--transparent\">\n" +
    "          </use>\n" +
    "        </svg> \n" +
    "      </div>\n" +
    "  <!--<div class=\"continue-wrap\">\n" +
    "        <div class=\"svg-wrapper\">\n" +
    "          <svg height=\"60\" width=\"320\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <rect class=\"shape\" height=\"60\" width=\"320\" />\n" +
    "          </svg>\n" +
    "          <a ng-click=\"scrollTo('about-top')\"><div class=\"text\">Continue</div></a>\n" +
    "        </div>\n" +
    "      </div>-->\n" +
    "    </div>\n" +
    "    <!-- nifty mobile art of yosemite, to keep the theme goin nomesayin -->\n" +
    "    <div class=\"intro-mobile\"></div>\n" +
    "  </div>");
}]);

angular.module("portfolio/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("portfolio/index.tpl.html",
    "<style type=\"text/css\">\n" +
    "	.no-y {\n" +
    "		overflow:hidden;\n" +
    "	}\n" +
    "	html, body{\n" +
    "		min-height:100%;\n" +
    "		margin:0px;\n" +
    "		padding:0px;\n" +
    "		overflow:hidden;\n" +
    "	} \n" +
    "</style>\n" +
    "\n" +
    "<iframe class=\"content-iframe\" src=\"portfolio-slider/index.html\" \n" +
    "		allowfullscreen \n" +
    "		align=\"middle\" \n" +
    "		frameborder=\"0\" \n" +
    "		scrolling=\"auto\" \n" +
    "		vspace=\"0\" \n" +
    "		hspace=\"0\" \n" +
    "		marginwidth=\"0\" \n" +
    "		marginheight=\"0\" \n" +
    "		></iframe>");
}]);

angular.module("portfolio/portfoliohead.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("portfolio/portfoliohead.tpl.html",
    "<div class=\"portfolio-top\">\n" +
    "  <div class=\"portfolio-top-container\">\n" +
    "    <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "      <symbol id=\"portfolio-top-text\">\n" +
    "        <text text-anchor=\"middle\"\n" +
    "              x=\"965\"  \n" +
    "              y=\"530\"\n" +
    "              dy=\".35em\"\n" +
    "              class=\"stay-connected\"\n" +
    "              >\n" +
    "             portfolio\n" +
    "        </text>    \n" +
    "      </symbol>\n" +
    "      <mask id=\"portfolio-top-mask\"\n" +
    "            maskunits=\"userSpaceOnUse\"\n" +
    "            maskcontentunits=\"userSpaceOnUse\">\n" +
    "        <rect\n" +
    "              width=\"100%\"\n" +
    "              height=\"100%\"\n" +
    "              class=\"mask__shape\">\n" +
    "        </rect>\n" +
    "        <use xlink:href=\"#portfolio-top-text\"\n" +
    "             class=\"mask__text\"\n" +
    "             ></use>\n" +
    "      </mask>\n" +
    "    </svg>\n" +
    "    <div class=\"portfolio-top-box\">\n" +
    "      <div class=\"text-fill\">\n" +
    "        <img id=\"portfolio-top-img-desktop\" src=\"/images/s1.jpg\"/>\n" +
    "        <img id=\"portfolio-top-img-mobile\" src=\"/images/key-m.jpg\"/>\n" +
    "      </div>\n" +
    "      <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" \n" +
    "           preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "        <rect\n" +
    "          id=\"portfolio-top-rect\"\n" +
    "          width=\"100%\"\n" +
    "          height=\"100%\"\n" +
    "          mask=\"url(#portfolio-top-mask)\"\n" +
    "          class=\"portfolio-top--fill\"/>\n" +
    "        <use \n" +
    "            id=\"fill-hover\"\n" +
    "            xlink:href=\"#portfolio-top-text\"\n" +
    "            class=\"text--transparent\">\n" +
    "        </use>\n" +
    "      </svg> \n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "              ");
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
    "                <div class=\"nav-large-list nav-logo\"><img id=\"sidebar-logo\" src=\"/images/novo/tri.png\" style=\"max-width:25%\"/></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-large-list\">Home</div>\n" +
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
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/blog/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-large-list\">Blog</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"flex-item-bottom\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"mobile-menu\">\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
