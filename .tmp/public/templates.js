angular.module('templates-app', ['blog-post/index.tpl.html', 'blog/index.tpl.html', 'contact/contacthead.tpl.html', 'contact/index.tpl.html', 'dashboard/index.tpl.html', 'home/about.tpl.html', 'home/contact.tpl.html', 'home/index.tpl.html', 'home/portfolio.tpl.html', 'intro/index.tpl.html', 'login/index.tpl.html', 'member/index.tpl.html', 'portfolio/index.tpl.html', 'portfolio/portfoliohead.tpl.html', 'register/index.tpl.html', 'sidebar/index.tpl.html']);

angular.module("blog-post/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("blog-post/index.tpl.html",
    "<!--Specific to Blog page. Font not used elsewhere.-->\n" +
    "<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800,600' rel='stylesheet' type='text/css'>\n" +
    "\n" +
    "<div ng-controller=\"BlogPostCtrl\">\n" +
    "    <!--Header Box-->\n" +
    "    <div class=\"title-box\">\n" +
    "        <div class=\"title-text\">{{post.title}}</div>\n" +
    "    </div>\n" +
    "\n" +
    "    <br>\n" +
    "    <br>\n" +
    "    <br>\n" +
    "    <br>\n" +
    "\n" +
    "	<div class=\"blog-post-container\">\n" +
    "		<div style=\"height:100px;\"></div>\n" +
    "\n" +
    "		<div ng-show=\"currentUser\">\n" +
    "			<button class=\"btn btn-primary\" ng-click=\"edit_post_toggle()\">edit</button>\n" +
    "		</div>\n" +
    "\n" +
    "		<!--<div class=\"post-title-container\">\n" +
    "			<h1>{{post.title}}</h1>\n" +
    "		</div>-->\n" +
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
    "</div>");
}]);

angular.module("blog/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("blog/index.tpl.html",
    "<!--Specific to Blog page. Font not used elsewhere.-->\n" +
    "<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800,600' rel='stylesheet' type='text/css'>\n" +
    "\n" +
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
    "<img itemscope itemtype=\"ImageObject\" id=\"\" class=\"blog-logo\" src=\"https://s3.amazonaws.com/novollc/images/novo/tri.png\" style=\"\"/></div>\n" +
    "\n" +
    "<!--Header Box-->\n" +
    "<div class=\"header-box\">\n" +
    "    <div class=\"header-text\">Blog</div>\n" +
    "</div>\n" +
    "\n" +
    "<div itemscope itemtype=\"Article\" class=\"post-list-container\">\n" +
    "  <br><br><br><br><br>\n" +
    "  <div itemprop=\"SocialMediaPosting\" class=\"post-container\" ng-repeat=\"post in posts | orderBy:'-createdAt'\">\n" +
    "    <h1 itemprop=\"BlogPosting\" class=\"title\"><a href=\"/blog/{{post.url_title}}\">{{post.title}}</a></h1>\n" +
    "  </div>\n" +
    "  <br><br>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"footer-box\">\n" +
    "    <!--scrolling blog titles and other stats (fb likes, insta followers, etc.) here.-->\n" +
    "</div>\n" +
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
    "  <br>\n" +
    "  <a href=\"mailTo:experiencenovo@gmail.com\" style=\"font-size:25px;color:#fff;font-family:'Monda',sans-serif;\">experiencenovo@gmail.com</a>\n" +
    "</div>");
}]);

angular.module("contact/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/index.tpl.html",
    "<style type=\"text/css\">\n" +
    "    .angular-google-map-container { height: 400px; box-shadow: 0 0 10px rgba(0,0,0,0.5); }\n" +
    "</style>\n" +
    "<div ng-include=\"'contact/contacthead.tpl.html'\"></div>\n" +
    "<div itemscope itemtype=\"ContactPage\" class=\"contact-page-container\">\n" +
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
    "                <form itemscope itemtype=\"InterAction\" role=\"form\" ng-submit=\"submitEmail(newEmail)\">\n" +
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
    "                    <button itemprop=\"RegisterAction\" type=\"submit\">Submit</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div itemscope itemtype=\"Map\" class=\"map-outter bottom-contact\">\n" +
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

angular.module("dashboard/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/index.tpl.html",
    "<div ng-show=\"currentUser\">\n" +
    "	<p>dashboard</p>\n" +
    "	<p>financial entries</p>\n" +
    "	<button class=\"btn btn-primary blog-button\" ng-click=\"newEntryToggleFunction()\">+ entry</button>\n" +
    "	<div ng-show=\"newEntryToggle\">\n" +
    "	    <div>\n" +
    "	      <form class=\"blog-input\" role=\"form\" ng-submit=\"createEntry(newEntry)\">\n" +
    "	        <div class=\"form-group\">\n" +
    "	       		<input type=\"text\" placeholder= \"entry type\" ng-model=\"newEntry.type\" class=\"form-control\" id=\"\">\n" +
    "	         	<input type=\"text\" placeholder= \"entry title\" ng-model=\"newEntry.title\" class=\"form-control\" id=\"\">\n" +
    "	         	<input type=\"text\" placeholder= \"entry amount\" ng-model=\"newEntry.amount\" class=\"form-control\" id=\"\">\n" +
    "	        </div>\n" +
    "	        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
    "	      </form>\n" +
    "	    </div>\n" +
    "  	</div>\n" +
    "  	<div class=\"entry-container\" ng-repeat=\"entry in entries\">\n" +
    "		{{entry}}\n" +
    "	</div>\n" +
    "	<button class=\"btn btn-primary blog-button\" ng-click=\"newTaskToggleFunction()\">+ task</button>\n" +
    "	<div ng-show=\"newTaskToggle\">\n" +
    "	    <div>\n" +
    "	      <form class=\"blog-input\" role=\"form\" ng-submit=\"createTask(newTask)\">\n" +
    "	        <div class=\"form-group\">\n" +
    "	       		<input type=\"text\" placeholder= \"task title\" ng-model=\"newTask.title\" class=\"form-control\" id=\"\">\n" +
    "	         	<input type=\"text\" placeholder= \"task content\" ng-model=\"newTask.content\" class=\"form-control\" id=\"\">\n" +
    "	        </div>\n" +
    "	        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
    "	      </form>\n" +
    "	    </div>\n" +
    "  	</div>\n" +
    "  	 <div class=\"task-container\" ng-repeat=\"task in tasks\">\n" +
    "		{{task}}\n" +
    "	</div>\n" +
    "  	<br><br><br><br>\n" +
    "	<p>members</p>\n" +
    "	<div class=\"member-container\" ng-repeat=\"member in members\">\n" +
    "		<a href=\"/member/{{member.username}}\">{{member.username}}</a>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/about.tpl.html",
    "<div class=\"about-outter\">\n" +
    "  <div class=\"about-topping\">\n" +
    "    <div class=\"about-title\" id=\"about-title\">\n" +
    "      The\n" +
    "      <img itemscope itemtype=\"ImageObject Brand\" src=\"https://s3.amazonaws.com/novollc/images/novo/logo.png\">\n" +
    "      Experience\n" +
    "    </div>\n" +
    "    <div class=\"about-desc\">\n" +
    "      <hr style=\"margin-bottom: -45px;border-top: 2px solid #fff;width: 90%;\">\n" +
    "      <hr>\n" +
    "      <p>\n" +
    "        Crafting an effective message is about communicating your vision in a way that&nbsp;will&nbsp;always&nbsp;be&nbsp;remembered.\n" +
    "        <br>\n" +
    "        To us, that means transforming a vision into creative solutions, engineered to deliver with&nbsp;the&nbsp;latest&nbsp;technology.\n" +
    "        <br>\n" +
    "        Each step is tailored to your identity, because at NOVO you're&nbsp;more&nbsp;than&nbsp;just&nbsp;a&nbsp;client&nbsp;— you're&nbsp;a&nbsp;partner.\n" +
    "      </p>\n" +
    "      <hr>\n" +
    "      <hr style=\"margin-top: -45px;border-top: 2px solid #fff;width: 90%;\">\n" +
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
    "          <img itemscope itemtype=\"ImageObject\" id=\"contact-img-desktop\" src=\"https://s3.amazonaws.com/novollc/images/home/contact.jpg\"/>\n" +
    "          <img itemscope itemtype=\"ImageObject\" id=\"contact-img-mobile\" src=\"https://s3.amazonaws.com/novollc/images/home/contact-mobile.jpg\"/>\n" +
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
    "<div itemscope=\"LocalBusiness\" itemtype=\"ProfessionalService\" class=\"surface-container-home\" ng-controller=\"HomeCtrl\">\n" +
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
    "          <img itemscope itemtype=\"ImageObject\" src=\"https://s3.amazonaws.com/novollc/images/home/portfolio.jpg\"></img>\n" +
    "          <img itemscope itemtype=\"ImageObject\" class=\"port-mobile\" src=\"https://s3.amazonaws.com/novollc/images/home/portfolio-mobile.jpg\"></img>\n" +
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
    "                y=\"570\"\n" +
    "                dy=\".35em\"\n" +
    "                class=\"medium-text\"\n" +
    "                >\n" +
    "            fax2dc is the place to be!\n" +
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
    "      <div class=\"box-with-text\">\n" +
    "        <div class=\"text-fill\">\n" +
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
    "    </div>\n" +
    "  <div class=\"intro-mobile\"></div>\n" +
    "</div>");
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

angular.module("member/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/index.tpl.html",
    "<h1>{{member.username}}</h1>\n" +
    "\n" +
    "<p>past work</p>\n" +
    "<p>current tasks</p>\n" +
    "{{tasks}}\n" +
    "<p>open payment?</p>\n" +
    "<p>message - follow - ???</p>\n" +
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
    "<iframe itemscope itemtype=\"CollectionPage\" class=\"content-iframe\" src=\"portfolio-slider/index.html\"\n" +
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
    "        <img itemscope itemtype=\"ImageObject\" id=\"portfolio-top-img-desktop\" src=\"/images/s1.jpg\"/>\n" +
    "        <img itemscope itemtype=\"ImageObject\" id=\"portfolio-top-img-mobile\" src=\"/images/key-m.jpg\"/>\n" +
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
    "                    <input type=\"text\" class=\"form-control\" id=\"inputFirstName3\" name=\"firstName\" placeholder=\"First Name\" value=\"\">\n" +
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
    "<div itemscope itemtype=\"SiteNavigationElement\" ng-controller=\"SidebarCtrl\">\n" +
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
    "                <div class=\"nav-large-list nav-logo\"><img itemscope itemtype=\"ImageObject\" id=\"sidebar-logo\" src=\"https://s3.amazonaws.com/novollc/images/novo/tri.png\" style=\"max-width:25%\"/></div>\n" +
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
    "            <a href=\"/contact/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-large-list\">Contact</div>\n" +
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
