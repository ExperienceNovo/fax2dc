angular.module('templates-app', ['about/index.tpl.html', 'home/index.tpl.html', 'intro/index.tpl.html', 'sidebar/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<h1>Fax2DC</h1>\n" +
    "\n" +
    "<p>Grassroots lobbying is a key to political change.</p><br>\n" +
    "<p>Mail is slow, email is ignored, but a fax is quick, physical, and easy.</p><br>\n" +
    "\n" +
    "<img src=\"images/congress.jpg\">");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<!--img src=\"images/capitol.jpg\"-->\n" +
    "\n" +
    "    <h3>Send Fax</h3>\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "          <div class=\"panel-heading\">\n" +
    "            <h3>Legislators</h3>\n" +
    "            <form>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label>Search:</label>\n" +
    "                <input ng-model=\"query\" class=\"form-control\" type=\"text\"/>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "          <table class='table table-fixed'>\n" +
    "            <thead>\n" +
    "              <tr>\n" +
    "                <th class=\"col-xs-4\"><a href=\"#\" ng-click=\"changeSorting('last_name')\">Last</a></th>\n" +
    "                <th class=\"col-xs-4\"><a href=\"#\" ng-click=\"changeSorting('first_name')\">First</a></th>\n" +
    "                <th class=\"col-xs-2\"><a href=\"#\" ng-click=\"changeSorting('state')\">State</a></th>\n" +
    "                <th class=\"col-xs-2\"><a href=\"#\" ng-click=\"changeSorting('party')\">Party</a></th>\n" +
    "              </tr>\n" +
    "            </thead>\n" +
    "              <tbody>\n" +
    "                <tr ng-repeat=\"legislator in legislators | filter:query | orderBy:sortField:reverse\" ng-click=\"legislator.selected = !legislator.selected\" ng-class=\"getClass(legislator)\">\n" +
    "                  <td class=\"col-xs-4\">{{legislator.last_name}}</td>\n" +
    "                  <td class=\"col-xs-4\">{{legislator.first_name}} </td>\n" +
    "                  <td class=\"col-xs-2\">{{legislator.state}}</td>\n" +
    "                  <td class=\"col-xs-2\">{{legislator.party}}</td>\n" +
    "                </tr>\n" +
    "              </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class='row form-container'>\n" +
    "        <form id=\"faxForm\" ng-submit=\"submitFax()\">\n" +
    "          <div class=\"col-xs-6\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <label>message</label>\n" +
    "              <textarea class=\"form-control\" rows=\"7\" ng-model=\"newFax.faxContent\"></textarea>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-4\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <label>name</label>\n" +
    "              <input type=\"text\" class=\"form-control\" placeholder=\"your name\"ng-model=\"newFax.name\" />\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "              <label>email</label>\n" +
    "              <input type=\"email\" class=\"form-control\" placeholder=\"wow.look@you.com\"ng-model=\"newFax.email\" />\n" +
    "            </div>\n" +
    "            <input class=\"btn btn-default\" type=\"submit\" id=\"submit-form\" value=\"Send Fax\" />\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-2\"></div>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <br><br>\n" +
    "\n" +
    "    <img src=\"images/congress.jpg\">\n" +
    "");
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
    "            Fax2DC is the place to be!\n" +
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
    "          <use xlink:href=\"#intro-desktop-fax2dc\" />\n" +
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
    "          <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-fax2dc\" class=\"text--transparent\"></use>\n" +
    "        </svg> \n" +
    "      </div>\n" +
    "    </div>\n" +
    "  <div class=\"intro-mobile\"></div>\n" +
    "</div>");
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
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-large-list\">Home</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/about/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-large-list\">About</div>\n" +
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
