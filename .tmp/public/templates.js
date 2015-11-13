angular.module('templates-app', ['blog-post/index.tpl.html', 'blog/index.tpl.html', 'contact/contacthead.tpl.html', 'contact/index.tpl.html', 'home/about.tpl.html', 'home/contact.tpl.html', 'home/index.tpl.html', 'home/portfolio.tpl.html', 'intro/index.tpl.html', 'login/index.tpl.html', 'portfolio/index.tpl.html', 'portfolio/portfoliohead.tpl.html', 'register/index.tpl.html', 'sidebar/index.tpl.html']);

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
    "			<br>\n" +
    "			<button class=\"btn btn-primary blog-button\" ng-click=\"destroyPost(post)\">delete</button>\n" +
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
    "  <button class=\"btn btn-primary blog-button\" ng-click=\"new_post_toggle()\">+ post</button>\n" +
    "  <br><br>\n" +
    "</div>\n" +
    "<div ng-show=\"currentUser\">\n" +
    "  <div ng-show=\"new_post\">\n" +
    "    <div>\n" +
    "      <form class=\"blog-input\" role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <input type=\"text\" placeholder= \"post title\" ng-model=\"newPost.title\" class=\"form-control\" id=\"postTitle\">\n" +
    "          <input type=\"text\" placeholder= \"post url\" ng-model=\"newPost.url_title\" class=\"form-control\" id=\"postTitle\">\n" +
    "          <textarea placeholder= \"post content\" ng-model=\"newPost.post_content\" class=\"form-control\" id=\"postContent\"></textarea>\n" +
    "        </div>\n" +
    "        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<!--/if logged in-->\n" +
    "\n" +
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
    "        <div class=\"contact-outter\">\n" +
    "          <div class=\"col-md-4 contact-col\">\n" +
    "            <div class=\"contact-card-container\">\n" +
    "              <div class=\"contact-card\" ng-click=\"toggle_card('raleigh')\" ng-class=\"{'flipped': raleigh == true}\">\n" +
    "                <div class=\"front front-one\"><h2>Raleigh <span>NC</span></h2></div>\n" +
    "                <div class=\"back\"><a href=\"tel:8656797229\"><p><strong>Trevor Overman</strong><br>(865) 679-7229</p></a></div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-4 contact-col\">\n" +
    "            <div class=\"contact-card-container\">\n" +
    "              <div class=\"contact-card\" ng-click=\"toggle_card('chicago')\" ng-class=\"{'flipped': chicago == true}\">\n" +
    "                <div class=\"front front-two\"><h2>Chicago <span>IL</span></h2></div>\n" +
    "                <div class=\"back\"><a href=\"tel:8653876121\"><p><strong>Valentino Constantinou</strong><br>(865) 387-6121</p></a></div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-4 contact-col\">\n" +
    "            <div class=\"contact-card-container\">\n" +
    "              <div class=\"contact-card\" ng-click=\"toggle_card('philadelphia')\" ng-class=\"{'flipped': philadelphia == true}\">\n" +
    "                <div class=\"front front-three\"><h2>Philadelphia <span>PA</span></h2></div>\n" +
    "                <div class=\"back\"><a href=\"tel:3365800855\"><p><strong>Michael Thompson</strong><br>(336) 580-0855</p></a></div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"work-outter bottom-contact\">\n" +
    "            <div class=\"contact-title\">\n" +
    "                <p>work with us</p>\n" +
    "                <hr>\n" +
    "            </div>\n" +
    "            <div class=\"margin\">\n" +
    "                <form role=\"form\" ng-submit=\"submitEmail(newEmail)\">\n" +
    "                    <div class=\"inputGroup\">\n" +
    "                        <input required=\"\" type=\"text\" ng-model=\"newEmail.name\"> \n" +
    "                        <span class=\"inputBar\"></span> \n" +
    "                        <label>Name</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"inputGroup\">\n" +
    "                        <!--type == email, css -->\n" +
    "                        <input required=\"\" type=\"text\" ng-model=\"newEmail.email\">\n" +
    "                        <span class=\"inputBar\"></span> \n" +
    "                        <label>Email</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"inputGroup\">\n" +
    "                        <textarea required=\"\" ng-model=\"newEmail.message\"></textarea>\n" +
    "                        <span class=\"inputBar\"></span> \n" +
    "                        <label>Message</label>\n" +
    "                    </div>\n" +
    "                    <button type=\"submit\">Submit</button>\n" +
    "                </form>\n" +
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
    "                                <br>email: <a href=\"mailto:info@projectnovo.co\">info@projectnovo.co</a>\n" +
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
    "                                <br>email: <a href=\"mailto:info@projectnovo.co\">info@projectnovo.co</a>\n" +
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
    "                                <br>email: <a href=\"mailto:info@projectnovo.co\">info@projectnovo.co</a>\n" +
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
    "</div>");
}]);

angular.module("home/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/about.tpl.html",
    "<div class=\"about-outter\">\n" +
    "  <div class=\"about-topping\">\n" +
    "    <div class=\"about-title\">\n" +
    "      The\n" +
    "      <img src=\"https://s3.amazonaws.com/novollc/images/novo/logo-w.png\">\n" +
    "      Experience\n" +
    "    </div>\n" +
    "    <div class=\"about-desc\">\n" +
    "      <hr style=\"margin-bottom: -45px;border-top: 1px solid #000;width: 90%;\">\n" +
    "      <hr>\n" +
    "      <p>\n" +
    "        Crafting an effective message is about communicating your vision in a way that&nbsp;will&nbsp;always&nbsp;be&nbsp;remembered.\n" +
    "        <br>\n" +
    "        To us, that means transforming a vision into creative solutions, engineered to deliver with&nbsp;the&nbsp;latest&nbsp;technology.\n" +
    "        <br>\n" +
    "        Each step is tailored to your identity, because at NOVO you're&nbsp;more&nbsp;than&nbsp;just&nbsp;a&nbsp;client&nbsp;— you're&nbsp;a&nbsp;partner.\n" +
    "      </p>\n" +
    "      <hr>\n" +
    "      <hr style=\"margin-top: -45px;border-top: 1px solid #000;width: 90%;\">\n" +
    "    </div>\n" +
    "    <div class=\"about-bar\">\n" +
    "      Let's bring your ideas to <span style=\"color:#fff\">life</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4 about-col\">\n" +
    "    <div class=\"about-container\">\n" +
    "      <div class=\"about-card\" ng-click=\"toggle_card('design')\" ng-class=\"{'flipped': design == true}\">\n" +
    "        <div class=\"front front-one\"><h2>design</h2></div>\n" +
    "        <div class=\"back\"><p><strong style=\"color:#14B795\">Design</strong><br>Our creative team's first and most important step is understanding who you are. Once we're sure that's achieved, there are no limits. From logos and print-work to fully formed brands, NOVO translates skill and experience into striking visuals that embody your core.<br><strong style=\"color:#14B795\">Design is in our DNA.</strong></p></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4 about-col\">\n" +
    "    <div class=\"about-container\">\n" +
    "      <div class=\"about-card\" ng-click=\"toggle_card('development')\" ng-class=\"{'flipped': development == true}\">\n" +
    "        <div class=\"front front-two\"><h2>development</h2></div>\n" +
    "        <div class=\"back\"><p><strong style=\"color:#14B795\">Development</strong><br>Building websites with powerful, reliable, and modern technology is a given. Beyond that, user experience is the focus. Each&nbsp;click&nbsp;should&nbsp;lead&nbsp;an&nbsp;audience on&nbsp;a&nbsp;journey&nbsp;through&nbsp;your&nbsp;vision. <br>Tell your story with elements that seamlessly flow into each other.<br><strong style=\"color:#14B795\">Mobile-ready. Universally compatible.</strong></p></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-4 about-col\">\n" +
    "    <div class=\"about-container\">\n" +
    "      <div class=\"about-card\" ng-click=\"toggle_card('marketing')\" ng-class=\"{'flipped': marketing == true}\">\n" +
    "        <div class=\"front front-three\"><h2>marketing</h2></div>\n" +
    "        <div class=\"back\"><p><strong style=\"color:#14B795\">Marketing</strong><br>Extend your influence through comprehensive, efficient, and effective strategies. Our clients often see 400% increase in social media followers after launching with NOVO. Our marketing team consists of data scientists, designers, and advertisers. <br>Tell&nbsp;us&nbsp;where&nbsp;you&nbsp;want&nbsp;to&nbsp;go.<br><strong style=\"color:#14B795\"> We'll get you there.</strong></p></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!--<form class=\"ctr newsletter-input\" action=\"//projectnovo.us11.list-manage.com/subscribe/post?u=a56f7f3f876fa9db4c36328af&amp;id=ff3d3ae826\" method=\"post\">\n" +
    "      <div class=\"loader\"></div>\n" +
    "      <input type=\"email\" name=\"EMAIL\" required>\n" +
    "      <div class=\"indicator\" data-content=\"Type Your Email Address\"></div>\n" +
    "  </form>\n" +
    "   real people should not fill this in and expect good things - do not remove this or risk form bot signups\n" +
    "  <div class=\"display-none\">\n" +
    "      <div style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_a56f7f3f876fa9db4c36328af_ff3d3ae826\" tabindex=\"-1\" value=\"\"></div>\n" +
    "      <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n" +
    "  </div>-->\n" +
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
    "          <img id=\"contact-img-desktop\" src=\"https://s3.amazonaws.com/novollc/images/home/contact.jpg\"/>\n" +
    "          <img id=\"contact-img-mobile\" src=\"https://s3.amazonaws.com/novollc/images/home/contact-mobile.jpg\"/>\n" +
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
    "\n" +
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
    "          <img src=\"https://s3.amazonaws.com/novollc/images/home/portfolio.jpg\"></img>\n" +
    "          <img class=\"port-mobile\" src=\"https://s3.amazonaws.com/novollc/images/home/portfolio-mobile.jpg\"></img>\n" +
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
    "\n" +
    "\n" +
    "      <svg style=\"height: 0; width: 0; position: absolute; visibility: hidden\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" style=\"enable-background:new 0 0 1920 1080;\" xml:space=\"preserve\">\n" +
    "        <g>\n" +
    "          <symbol id=\"intro-desktop-novo\">\n" +
    "            <path transform=\"translate(-1015,-700) scale(2.5)\" d=\"M790.6,444.7c0.3,0,0.6,0,0.9,0c5.9,0,11.8,0,17.8,0\n" +
    "    c0.2,0,0.5,0,0.7,0c0.4,0,0.3-0.3,0.3-0.5c0-0.2-0.1-0.4-0.2-0.6c-1.6-3.2-3.1-6.5-4.9-9.6c-1.4-2.6-2.7-5.2-4-7.8\n" +
    "    c-1.3-2.6-2.5-5.2-3.9-7.7c-0.7-1.2-1.2-2.4-2-3.5c-0.3-0.4,0.1-1.4,0.7-1.4c0.2,0,0.5,0,0.7,0c23.4,0,46.8,0,70.2,0\n" +
    "    c1.8,0,1.7,0.8,1.2,1.9c-0.8,1.7-1.7,3.4-2.6,5c-2.4,4.5-4.5,9.1-6.9,13.6c-1.8,3.4-3.6,6.9-5.3,10.4c0,0.1,0,0.2,0,0.3\n" +
    "    c0.2,0,0.4,0,0.7,0c6.1,0,12.2,0,18.4,0c0.1,0,0.2,0,0.4,0c0.6,0,0.7-0.2,0.7-0.8c0-0.2,0-0.4,0-0.6c0-2,0-4,0-6\n" +
    "    c0-1.6,0.2-3.3,0.2-4.9c0-0.4,0.3-0.7,0.3-1.1c0-0.4-0.1-0.8,0.1-1.3c0.2-0.3,0-0.8,0.1-1.1c0.6-1.7,0.8-3.6,1.7-5.2\n" +
    "    c0.7-1.3,1.4-2.5,2.4-3.6c0.1-0.1,0.3-0.3,0.4-0.4c1.4-1.7,3.3-2.8,5.3-3.8c1.1-0.6,2.4-0.8,3.6-1.2c1.1-0.4,2.3-0.3,3.4-0.7\n" +
    "    c0,0,0.1,0,0.1,0c1.2,0.1,2.3-0.4,3.5-0.2c1.8-0.4,3.6,0,5.3-0.3c1.9-0.3,3.8-0.2,5.7-0.2c4-0.1,7.9,0,11.9,0\n" +
    "    c0.9,0,1.8,0.2,2.7,0.2c0.9,0,1.8-0.1,2.6,0c0.8,0.2,1.6,0.1,2.4,0.2c0.6,0.1,1.2,0.2,1.8,0.2c0.6,0.1,1.2,0.1,1.7,0.2\n" +
    "    c0.8,0.2,1.6,0.2,2.3,0.5c0.7,0.3,1.5,0.2,2.1,0.7c0.9-0.1,1.6,0.5,2.3,0.8c1,0.4,2,0.8,2.7,1.5c0.9,0.8,2.1,1.4,2.6,2.6\n" +
    "    c0.9,0.8,1.5,1.9,2,2.9c0.7,1.3,1.4,2.7,1.5,4.3c0.4,0.5,0,1.1,0.3,1.6c0.3,0.5,0.1,1,0.2,1.5c0.1,0.5,0.2,1,0.2,1.5\n" +
    "    c0.1,0.5-0.1,1,0.2,1.5c0,0,0,0.2,0,0.2c-0.1,2.1,0.4,4.1,0.2,6.1c-0.2,1.6,0.4,3.2,0.2,4.9c6.1,0,12.2,0,18.2,0c0,1.3,0,2.5,0,3.8\n" +
    "    c-6,0-12.1,0-18.2,0c0,0.3,0,0.6,0,0.9c0,2.1-0.4,4.1-0.2,6.1c-0.4,0.8-0.1,1.6-0.3,2.4c-0.2,0.7,0,1.4-0.3,1.9\n" +
    "    c-0.3,0.6,0,1.3-0.4,1.9c-0.3,0.5-0.4,1.2-0.5,1.8c-0.3,2.1-1.3,3.9-2.6,5.5c-1.2,1.6-1.8,2.2-3.8,3.6c-1.2,0.9-2.6,1.4-4,2\n" +
    "    c-0.5,0.2-1,0.3-1.5,0.5c-0.5,0.2-1,0.3-1.5,0.4c-0.5,0.2-1,0-1.6,0.2c-0.7,0.3-1.6,0.2-2.4,0.3c-0.6,0.1-1.1,0.2-1.7,0.2\n" +
    "    c-0.5,0.1-1.1-0.2-1.6,0.2c-0.1,0.1-0.4,0-0.6,0c-2.3-0.2-4.6,0.3-7,0.3c-2.4,0-4.7,0-7.1,0c-2.4,0-4.7,0-7.1,0\n" +
    "    c-0.9,0-1.8-0.4-2.8-0.3c-0.9,0.1-1.9,0.2-2.7,0c-0.9-0.2-1.8-0.1-2.7-0.2c-0.6-0.1-1.2-0.2-1.8-0.2c-0.6-0.1-1.1-0.3-1.7-0.2\n" +
    "    c-0.4-0.5-1-0.1-1.5-0.4c-0.5-0.3-1.1-0.2-1.7-0.3c-0.5-0.1-1-0.3-1.5-0.5c-1.6-0.6-3.2-1.3-4.7-2.4c-0.9-0.7-1.8-1.6-2.6-2.4\n" +
    "    c-0.5-0.6-0.9-1.3-1.3-2c-1-1.5-1.5-3.1-2.1-4.8c-0.2-0.5-0.2-1.1-0.3-1.7c-0.1-0.4-0.2-0.8-0.2-1.2c-0.1-0.4,0.2-0.9-0.2-1.2\n" +
    "    c0,0,0-0.1,0-0.2c-0.1-1.2-0.3-2.5-0.2-3.7c0-1.1-0.3-2.1-0.3-3.1c0-1.1,0-2.2,0-3.3c-0.3,0-0.6,0-0.9,0c-6.8,0-13.7,0-20.5,0\n" +
    "    c-0.7,0-1,0.2-1.3,0.8c-1.7,3.4-3.4,6.8-5.1,10.1c-2.3,4.5-4.5,9-6.8,13.5c-0.6,1.2-1.3,2.3-1.8,3.5c-0.1,0.3-0.4,0.4-0.7,0.4\n" +
    "    c-2.9,0-5.8,0-8.8,0c-0.4,0-0.6-0.1-0.8-0.6c-1.3-2.6-2.6-5.2-4-7.8c-2.4-4.7-4.8-9.4-7.2-14.2c-0.7-1.4-1.3-2.7-2-4.1\n" +
    "    c-0.2-0.5-0.5-0.9-0.8-1.3c-0.1-0.2-0.4-0.2-0.6-0.3c-0.1,0-0.2,0-0.4,0c-6.9,0-13.8,0-20.6,0c-0.1,0-0.2,0-0.4,0\n" +
    "    c0,0.8,0,1.5,0,2.3c0,0.7-0.4,1.3-0.3,2.1c0.2,1.7-0.2,3.4-0.3,5.1c-0.1,1.1-0.3,2.2-0.5,3.3c-0.2,1-0.5,2-0.7,3\n" +
    "    c-0.3,1-0.7,2-1.2,2.9c-0.5,0.9-1.1,1.9-1.8,2.6c-0.4,0.3-0.6,0.9-1,1.1c-1.1,0.8-2,1.8-3.2,2.4c-0.6,0.3-1.1,0.5-1.7,0.8\n" +
    "    c-0.5,0.3-1.2,0.3-1.7,0.6c-0.8,0.6-1.9,0.5-2.8,0.9c-0.4,0.2-1,0.1-1.6,0.2c-0.8,0.2-1.7,0.2-2.5,0.3c-0.5,0-1,0.3-1.6,0.3\n" +
    "    c-0.5,0-1.1-0.2-1.6,0.2c-0.1,0.1-0.3,0-0.5,0c-2.2-0.2-4.4,0.3-6.6,0.2c-2.3,0-4.6,0-6.8,0c-2.2,0-4.5-0.1-6.7,0\n" +
    "    c-1.1,0-2.2-0.3-3.3-0.3c-1.1,0-2.2,0.1-3.2,0c-0.9-0.1-1.7-0.2-2.5-0.2c-0.6,0-1.1-0.3-1.7-0.3c-0.5,0-1.1-0.1-1.6-0.2\n" +
    "    c-0.6-0.1-1.2,0-1.7-0.3c-0.5-0.3-1.1,0-1.6-0.4c-0.4-0.3-1.1-0.3-1.6-0.5c-1.7-0.6-3.4-1.3-4.9-2.5c-1.7-1.3-3.1-2.9-4.1-4.8\n" +
    "    c-0.8-1.6-1.4-2.9-1.9-5c-0.1-0.5-0.1-1-0.2-1.5c-0.2-0.5-0.2-0.9-0.2-1.4c-0.1-0.5-0.2-1-0.2-1.5c-0.1-0.5,0.1-1-0.2-1.5\n" +
    "    c-0.1-0.2,0-0.5,0-0.8c-0.1-2.4-0.2-4.9-0.3-7.3c-2.6,0-5.2,0-7.9,0c0,0.3,0,0.7,0,1c0,8.6,0,17.2,0,25.8c0,0.3,0,0.6,0,0.8\n" +
    "    c0,0.4-0.2,0.5-0.6,0.6c-0.1,0-0.2,0-0.4,0c-2.9,0-5.8,0-8.8,0c-0.4,0-0.6-0.1-0.8-0.5c-0.3-0.6-0.9-1.1-1.3-1.6\n" +
    "    c-0.7-0.8-1.4-1.5-2-2.3c-1-1.2-2-2.4-3-3.5c-0.9-1-1.7-2-2.6-3c-1-1.2-2-2.3-3-3.5c-0.9-1-1.7-2-2.6-3c-1-1.1-2-2.3-3-3.5\n" +
    "    c-0.9-1-1.7-2-2.5-3c-1-1.3-2.2-2.4-3.1-3.7c-0.6-0.9-1.4-1.6-2.1-2.4c-0.4-0.4-0.7-0.9-1.1-1.3c-0.3-0.4-0.8-0.7-1-1.2\n" +
    "    c-0.4-0.6-0.9-1.1-1.4-1.7c-0.8-0.9-1.6-1.6-2.3-2.5c-1-1.3-2.2-2.4-3.1-3.8c-0.4-0.6-1-1-1.5-1.7c-0.5-0.8-1.3-1.5-1.9-2.2\n" +
    "    c-0.4-0.4-0.7-0.8-1-1.3c-0.3-0.4-0.9-0.7-1-1.3c0-0.1-0.2-0.2-0.3-0.3c-0.9-0.9-1.6-1.9-2.4-2.8c-0.5-0.7-1.1-1.3-1.7-1.9\n" +
    "    c-1.2-1.3-2.4-2.7-3.5-4.1c-0.3-0.3-0.4-0.5-0.9-0.5c-0.5,0-1,0-1.7,0c0,0.4,0,0.8,0,1.3c0,18,0,35.9,0,53.9c0,0.2,0,0.3,0,0.5\n" +
    "    c0,1,0,1-1,1c-1.9,0-3.8,0-5.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-6.3,0-12.6,0-19c0-13.8,0-27.6,0-41.4c0-0.2,0-0.5,0-0.7\n" +
    "    c0-0.7,0.4-1.1,1.1-1.1c2.3,0,4.6,0,6.8,0c2.2,0,4.3,0,6.5,0c0.4,0,0.7,0.1,1,0.4c0.8,0.8,1.5,1.7,2.1,2.6c0.5,0.6,1,1.2,1.5,1.8\n" +
    "    c1.1,1.3,2.2,2.5,3.3,3.8c0.8,1,1.7,2,2.5,3c0.9,1.2,2,2.3,2.8,3.5c0.6,0.8,1.3,1.4,1.9,2.2c0.6,0.8,1.3,1.4,1.8,2.2\n" +
    "    c0.4,0.6,0.9,1,1.4,1.6c0.6,0.8,1.4,1.5,2,2.3c0.9,1.2,2,2.3,2.9,3.6c0.4,0.5,0.9,0.9,1.3,1.5c0.6,0.8,1.3,1.5,1.9,2.2\n" +
    "    c0.4,0.5,0.8,1,1.2,1.4c0.4,0.5,0.9,0.9,1.2,1.4c0.3,0.5,0.9,1,1.3,1.5c1,1.3,2.1,2.4,3.1,3.6c0.9,1.1,1.8,2.2,2.7,3.2\n" +
    "    c0.8,0.9,1.6,1.8,2.3,2.8c1,1.3,2.1,2.4,3.1,3.7c0.5,0.7,1.2,1.3,1.8,2c0.5,0.8,1.3,1.3,1.7,2.2c0.2,0.3,0.5,0.6,0.9,1\n" +
    "    c0-0.5,0-0.9,0-1.3c0-16.8,0-33.7,0-50.5c0-0.5-0.1-0.9,0.2-1.3c0.2-0.3,0.3-0.5,0.7-0.5c2.2,0,4.3,0,6.5,0c0.5,0,0.7,0.2,0.7,0.7\n" +
    "    c0,0.3,0,0.6,0,0.8c0,9.4,0,18.8,0,28.2c0,0.3,0,0.6,0,0.8c0,0.4,0.2,0.6,0.7,0.6c2.2,0,4.4,0,6.6,0c0.4,0,0.6-0.2,0.7-0.6\n" +
    "    c0-0.2,0-0.5,0-0.7c0-1.9,0-3.8,0-5.8c0-1.7,0.1-3.5,0.3-5.2c0.1-1.2,0.2-2.4,0.5-3.5c0.4-1.5,0.7-3,1.3-4.4c0.8-2,2.1-3.6,3.5-5.2\n" +
    "    c1.6-1.8,3.7-2.8,5.9-3.9c0.8-0.4,1.7-0.5,2.6-0.8c1.2-0.3,2.4-0.5,3.7-0.7c1.1-0.2,2.2-0.2,3.3-0.3c0.9,0,1.8-0.3,2.8-0.3\n" +
    "    c1,0.1,2,0.2,2.9,0c1.3-0.3,2.6-0.2,3.9-0.2c4.3,0,8.6,0,13,0c1,0,1.9,0.3,2.9,0.3c1,0,2-0.1,3,0c0.9,0.1,1.7,0.1,2.5,0.2\n" +
    "    c1.1,0.2,2.2,0.2,3.3,0.5c1.5,0.3,3,0.6,4.5,1c1.4,0.4,2.6,1,3.9,1.6c0.6,0.3,1.3,0.7,1.8,1.2c0.3,0.3,0.8,0.5,1.1,0.9\n" +
    "    c1,1.1,1.9,2.2,2.6,3.5c0.8,1.3,1.2,2.7,1.8,4.1c0.2,0.5,0.1,1,0.3,1.4c0.2,0.8,0.2,1.7,0.3,2.5c0.1,0.5,0.2,1,0.2,1.5\n" +
    "    c0.1,0.5-0.2,1,0.2,1.5c0.1,0.1,0,0.2,0,0.4c0,2.6,0.4,5.1,0.3,7.7c0,0.5,0.2,1.1,0.2,1.6C790.6,443.5,790.6,444.1,790.6,444.7z\n" +
    "     M726,444.7c0.4,0,0.8,0,1.2,0c10.4,0,20.8,0,31.2,0c7.8,0,15.5,0,23.3,0c0.9,0,1-0.1,1-0.9c-0.1-2.2,0.2-4.3-0.2-6.5\n" +
    "    c-0.1-0.6-0.1-1.3,0-1.9c0.1-0.6-0.3-1.2-0.2-1.8c0-0.6-0.1-1.2-0.2-1.8c-0.1-0.6-0.3-1.2-0.4-1.7c-0.3-0.9-0.7-1.7-1-2.5\n" +
    "    c-0.3-0.8-0.7-1.6-1.3-2.2c-0.9-0.9-1.8-1.7-3.1-2.1c-0.8-0.2-1.6-0.6-2.4-0.8c-1.1-0.2-2.3-0.3-3.4-0.5c-0.6-0.1-1.3-0.1-1.9,0\n" +
    "    c-0.6,0.1-1.2-0.3-1.8-0.3c-2.8,0-5.7,0-8.5,0c-2.9,0-5.8,0-8.6,0c-2.8,0.1-5.6-0.3-8.4,0.2c-0.8,0.1-1.8-0.2-2.5,0.1\n" +
    "    c-0.8,0.3-1.7-0.1-2.5,0.4c-0.9-0.1-1.6,0.3-2.4,0.5c-1.5,0.4-3.4,1.6-4.2,2.5c-1.2,1.5-1.9,3.3-2.4,5.1c-0.4,1.5-0.5,3-0.7,4.5\n" +
    "    c-0.2,1.1-0.1,2.2-0.2,3.3C725.9,440.4,726,442.5,726,444.7z M881.1,444.7c10.7,0,21.3,0,31.9,0c7.9,0,15.8,0,23.6,0\n" +
    "    c1.1,0,1.1,0,1.1-1c-0.1-2.1,0.1-4.2-0.2-6.4c-0.2-1.9-0.2-3.8-0.5-5.7c-0.1-0.6-0.3-1.1-0.4-1.6c-0.2-0.9-0.7-1.6-1-2.5\n" +
    "    c-0.3-0.9-0.8-1.6-1.4-2.3c-0.9-0.9-1.8-1.6-3-2.1c-0.8-0.3-1.6-0.6-2.4-0.7c-1.1-0.3-2.3-0.3-3.4-0.5c-0.7-0.1-1.4-0.1-2.2,0\n" +
    "    c-0.7,0-1.3-0.3-2.1-0.3c-6,0-11.9,0-17.9,0c-1.2,0-2.4,0-3.6,0c-1.2,0-2.3-0.1-3.5,0.2c-0.8,0.2-1.8-0.2-2.6,0.1\n" +
    "    c-0.9,0.3-1.8-0.1-2.6,0.4c-0.9-0.1-1.6,0.3-2.4,0.5c-1.6,0.5-3.1,1.3-4.2,2.6c-1.2,1.4-1.7,3.3-2.3,5c0.2,0.5-0.3,1-0.2,1.5\n" +
    "    c0.1,0.6-0.3,1-0.3,1.6c0.1,0.5-0.2,1-0.2,1.5c-0.1,1.1-0.1,2.2-0.2,3.3C881,440.4,881.1,442.5,881.1,444.7z M856.8,419.8\n" +
    "    c-16.7,0-33.4,0-50.1,0c0.2,0.3,0.4,0.6,0.5,0.9c2.2,4.2,4.2,8.4,6.4,12.6c2.2,4.1,4.2,8.3,6.3,12.4c1.6,3,3.1,6.1,4.7,9.1\n" +
    "    c2.3,4.3,4.3,8.9,6.7,13.1c0.1,0.1,0.1,0.2,0.2,0.4c0.2-0.1,0.4-0.2,0.5-0.3c0.4-0.8,0.8-1.7,1.3-2.5c1.6-2.8,2.9-5.9,4.5-8.7\n" +
    "    c1.5-2.6,2.7-5.4,4.1-8.1c1.2-2.3,2.4-4.6,3.6-6.9c1.4-2.6,2.7-5.3,4.1-7.9c1.5-2.9,2.9-5.9,4.5-8.8\n" +
    "    C855.1,423.3,855.9,421.5,856.8,419.8z M726,448.6c0,1.1,0,2.1,0.2,3.2c0.2,1.2-0.1,2.5,0.3,3.7c0.1,0.4-0.1,0.9,0.1,1.3\n" +
    "    c0.2,0.4,0.2,0.7,0.2,1.1c0.1,0.4,0.1,0.8,0.2,1.2c0.2,0.8,0.3,1.6,0.6,2.4c0.6,1.4,1.2,2.7,2.4,3.7c0.4,0.3,0.7,0.7,1.1,0.9\n" +
    "    c0.9,0.5,1.8,0.9,2.8,1.2c1,0.3,2.1,0.4,3.1,0.7c0.7,0.2,1.4,0.1,2.1,0.2c0.8,0.2,1.7,0,2.5,0c0.8,0,1.6,0.2,2.4,0.2\n" +
    "    c2.6,0,5.1,0,7.7,0c2.5,0,5,0,7.6,0c2.5-0.1,5.1,0.2,7.6-0.2c1.1-0.2,2.3,0.1,3.5-0.2c0.8-0.2,1.7,0,2.5-0.3\n" +
    "    c0.8-0.2,1.6-0.3,2.3-0.5c1.5-0.5,2.8-1.2,4-2.3c0.7-0.8,1.1-1.7,1.6-2.6c0.4-0.8,0.7-1.6,0.9-2.4c0.2-0.9,0.4-1.8,0.5-2.7\n" +
    "    c0.1-1.6,0.5-3.1,0.3-4.7c0-0.3,0-0.6,0-1c0-0.2-0.1-0.4,0-0.6c0.4-0.8,0.1-1.7,0.2-2.5C763.7,448.6,744.9,448.6,726,448.6z\n" +
    "     M881.1,448.6c0.1,1,0,2,0.2,3c0.2,1.3-0.1,2.7,0.3,4c0.1,0.5,0,1.1,0.2,1.7c0.2,0.5,0.1,1.1,0.2,1.7c0.4,1.4,0.7,2.7,1.4,4\n" +
    "    c0.6,1.3,1.7,2,2.6,3c1.5,0.8,3,1.4,4.6,1.7c1.2,0.3,2.4,0.2,3.6,0.5c0.8,0.2,1.7,0,2.5,0c0.8,0,1.6,0.2,2.4,0.2\n" +
    "    c6.2,0,12.4,0,18.6,0c1.3,0,2.6,0.1,3.9-0.2c1.4-0.2,2.8,0,4.2-0.3c0.6-0.1,1.3-0.1,1.9-0.2c1-0.2,2-0.4,3.1-0.7\n" +
    "    c0.9-0.3,1.7-0.7,2.5-1.3c0.8-0.6,1.4-1.3,1.9-2.2c0.3-0.6,0.6-1.3,0.9-1.9c0.3-0.7,0.5-1.4,0.7-2.1c0.3-0.8,0.1-1.6,0.5-2.3\n" +
    "    c0-1.6,0.4-3.2,0.2-4.8c0-0.3,0-0.6,0-1c0-0.2,0-0.3,0-0.5c0.4-0.8,0.1-1.7,0.2-2.5C918.8,448.6,899.9,448.6,881.1,448.6z\"/>\n" +
    "            </symbol>\n" +
    "        </g>\n" +
    "      </svg>\n" +
    "\n" +
    "      <div class=\"box-with-text\">\n" +
    "        <div class=\"text-fill\">\n" +
    "          <video \n" +
    "              class=\"video\" \n" +
    "              src=\"https://s3.amazonaws.com/novollc/videos/geometry.mp4\"\n" +
    "              preload=\"auto\" \n" +
    "              autoplay=\"autoplay\" \n" +
    "              loop=\"loop\" \n" +
    "              muted=\"muted\">\n" +
    "          </video>\n" +
    "        </div>\n" +
    "        <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" \n" +
    "             preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <rect\n" +
    "            width=\"100%\"\n" +
    "            height=\"100%\"\n" +
    "            mask=\"url(#intro-desktop-mask)\"\n" +
    "            class=\"shape--fill\"/>\n" +
    "          <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-text\" class=\"text--transparent\"></use>\n" +
    "          <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-novo\" class=\"text--transparent\"></use>\n" +
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
    "    <div class=\"intro-mobile\"></div>\n" +
    "  </div>");
}]);

angular.module("login/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/index.tpl.html",
    "<!--login-->\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <h3>Login</h3>\n" +
    "        <form class=\"form-horizontal\" role=\"form\" action=\"/auth/local\" method=\"post\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputUsername3\" class=\"col-sm-2 control-label\">Username</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"inputUsername3\" name=\"identifier\" placeholder=\"Username\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" name=\"password\" placeholder=\"Password\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
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

angular.module("register/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("register/index.tpl.html",
    "<!--register-->\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <h3>Create an Account</h3>\n" +
    "        <form class=\"form-horizontal\" role=\"form\" action=\"/auth/local/register\" method=\"post\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputUsername3\" class=\"col-sm-2 control-label\">Username</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"inputUsername3\" name=\"username\" placeholder=\"Username\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" name=\"password\" placeholder=\"Password\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" name=\"email\" placeholder=\"Email\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputFirstName3\" class=\"col-sm-2 control-label\">First Name</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"inputFirstName3\" name=\"first_name\" placeholder=\"First Name\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<a href=\"/login\">already have an account?</a>");
}]);

angular.module("sidebar/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sidebar/index.tpl.html",
    "<div ng-controller=\"SidebarCtrl\">\n" +
    "    <div ng-show=\"sidebar_color == 'white'\" class=\"side-bars\">\n" +
    "        <div class=\"icon-bar\"></div>\n" +
    "        <div class=\"icon-bar\"></div>\n" +
    "        <div class=\"icon-bar\"></div>\n" +
    "    </div>\n" +
    "    <div ng-show=\"sidebar_color == 'black'\" class=\"side-bars\">\n" +
    "        <div class=\"icon-bar-black\"></div>\n" +
    "        <div class=\"icon-bar-black\"></div>\n" +
    "        <div class=\"icon-bar-black\"></div>\n" +
    "    </div>      \n" +
    "    <div class=\"page-nav-zone\">\n" +
    "        <div class=\"flex-item-top\"></div>\n" +
    "        <div class=\"item-container\" id=\"logo-container\">\n" +
    "            <div class=\"list-item\">\n" +
    "                <div class=\"nav-large-list nav-logo\"><img id=\"sidebar-logo\" src=\"https://s3.amazonaws.com/novollc/images/novo/tri.png\" style=\"max-width:25%\"/></div>\n" +
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
