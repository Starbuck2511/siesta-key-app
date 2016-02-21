angular.module("naut").run(["$templateCache", function($templateCache) {$templateCache.put("templates/footer.html","<span>&copy; {{app.year}} - {{ app.name }}</span>");
$templateCache.put("templates/layer-search.html","<form action=\"\">\n   <p class=\"help-block\">Type and hit enter to search</p>\n   <input type=\"text\" placeholder=\"I\'m looking for...\" ng-model=\"searchTerm\" class=\"form-control input-huge\" />\n   <button type=\"submit\" class=\"hidden\">Search</button>\n</form>\n<div class=\"row\">\n   <div class=\"col-md-4 col-sm-6 pv\">\n      <h4 class=\"text-bold pv-lg\">People (4)</h4>\n      <br/>\n      <ul class=\"list-unstyled\">\n         <!-- START User-->\n         <li class=\"media\">\n            <div class=\"media-left media-middle\">\n               <!-- Contact avatar-->\n               <div class=\"point-pin\">\n                  <a href=\"\">\n                     <img src=\"app/img/user/05.jpg\" alt=\"Image\" class=\"media-object img-circle thumb40\" />\n                  </a>\n                  <div class=\"point point-success point-lg\"></div>\n               </div>\n            </div>\n            <!-- Contact info-->\n            <div class=\"media-body\">\n               <div class=\"media-heading\"><a href=\"\" class=\"text-md\">Marc Fuller</a>\n               </div>\n            </div>\n         </li>\n         <!-- END User-->\n         <!-- START User-->\n         <li>\n            <hr/>\n         </li>\n         <li class=\"media\">\n            <div class=\"media-left media-middle\">\n               <!-- Contact avatar-->\n               <div class=\"point-pin\">\n                  <a href=\"\">\n                     <img src=\"app/img/user/06.jpg\" alt=\"Image\" class=\"media-object img-circle thumb40\" />\n                  </a>\n                  <div class=\"point point-success point-lg\"></div>\n               </div>\n            </div>\n            <!-- Contact info-->\n            <div class=\"media-body\">\n               <div class=\"media-heading\"><a href=\"\" class=\"text-md\">Wade Wade</a>\n               </div>\n            </div>\n         </li>\n         <!-- END User-->\n         <!-- START User-->\n         <li>\n            <hr/>\n         </li>\n         <li class=\"media\">\n            <div class=\"media-left media-middle\">\n               <!-- Contact avatar-->\n               <div class=\"point-pin\">\n                  <a href=\"\">\n                     <img src=\"app/img/user/07.jpg\" alt=\"Image\" class=\"media-object img-circle thumb40\" />\n                  </a>\n                  <div class=\"point point-danger point-lg\"></div>\n               </div>\n            </div>\n            <!-- Contact info-->\n            <div class=\"media-body\">\n               <div class=\"media-heading\"><a href=\"\" class=\"text-md\">Alan Boyd</a>\n               </div>\n            </div>\n         </li>\n         <!-- END User-->\n         <!-- START User-->\n         <li>\n            <hr/>\n         </li>\n         <li class=\"media\">\n            <div class=\"media-left media-middle\">\n               <!-- Contact avatar-->\n               <div class=\"point-pin\">\n                  <a href=\"\">\n                     <img src=\"app/img/user/01.jpg\" alt=\"Image\" class=\"media-object img-circle thumb40\" />\n                  </a>\n                  <div class=\"point point-danger point-lg\"></div>\n               </div>\n            </div>\n            <!-- Contact info-->\n            <div class=\"media-body\">\n               <div class=\"media-heading\"><a href=\"\" class=\"text-md\">Ryan Carr</a>\n               </div>\n            </div>\n         </li>\n         <!-- END User-->\n      </ul>\n   </div>\n   <div class=\"col-md-4 col-sm-6 pv\">\n      <h4 class=\"text-bold pv-lg\">Pages (3)</h4>\n      <br/>\n      <ul class=\"list-unstyled\">\n         <li class=\"media\">\n            <div class=\"media-left media-middle\">\n               <div class=\"thumb40 bg-success circle text-center text-bold\">D</div>\n            </div>\n            <div class=\"media-body\">\n               <div class=\"media-heading clearfix\"><a ui-sref=\"app.dashboard\" layer-morph-close=\"\" class=\"pull-left text-md\">Dashboard</a>\n                  <small class=\"text-muted pull-right mt\">3 matches</small>\n               </div>\n            </div>\n         </li>\n         <li>\n            <hr/>\n         </li>\n         <li class=\"media\">\n            <div class=\"media-left media-middle\">\n               <div class=\"thumb40 bg-purple circle text-center text-bold\">P</div>\n            </div>\n            <div class=\"media-body\">\n               <div class=\"media-heading clearfix\"><a ui-sref=\"app.extras.profile\" layer-morph-close=\"\" class=\"pull-left text-md\">Profile</a>\n                  <small class=\"text-muted pull-right mt\">3 matches</small>\n               </div>\n            </div>\n         </li>\n         <li>\n            <hr/>\n         </li>\n         <li class=\"media\">\n            <div class=\"media-left media-middle\">\n               <div class=\"thumb40 bg-danger circle text-center text-bold\">P</div>\n            </div>\n            <div class=\"media-body\">\n               <div class=\"media-heading clearfix\"><a ui-sref=\"app.extras.projects\" layer-morph-close=\"\" class=\"pull-left text-md\">Projects</a>\n                  <small class=\"text-muted pull-right mt\">2 match(es)</small>\n               </div>\n            </div>\n         </li>\n      </ul>\n   </div>\n</div>");
$templateCache.put("templates/settings.html","<div class=\"settings-inner\">\n   <div ng-click=\"showSettings = !showSettings\" class=\"settings-button\">\n      <em class=\"icon-cog\"></em>\n   </div>\n   <div ng-controller=\"SettingsController as config\" class=\"settings\">\n      <div class=\"settings-inner\">\n         <div class=\"settings-content\">\n            <div class=\"pt ph\">\n               <p class=\"text-muted\">THEMES</p>\n               <div class=\"clearfix mb\">\n                  <div ng-repeat=\"theme in config.themes\" class=\"pull-left wd-tiny mb\">\n                     <div class=\"setting-color\">\n                        <label>\n                           <input type=\"radio\" name=\"setting-theme\" ng-model=\"app.themeId\" ng-value=\"$index\" ng-change=\"config.setTheme($index)\" />\n                           <span class=\"icon-check\"></span>\n                           <ul class=\"list-table\">\n                              <li ng-class=\"theme.sidebar\"></li>\n                              <li ng-class=\"theme.brand\"></li>\n                              <li ng-class=\"theme.topbar\"></li>\n                           </ul>\n                        </label>\n                     </div>\n                  </div>\n               </div>\n            </div>\n            <hr/>\n            <div class=\"p\">\n               <p class=\"text-muted\">LAYOUT</p>\n               <div class=\"clearfix\">\n                  <p class=\"pull-left\">Fixed</p>\n                  <div class=\"pull-right\">\n                     <label class=\"switch switch-info\">\n                        <input type=\"checkbox\" ng-model=\"app.layout.isFixed\" ng-disabled=\"app.layout.isMaterial\" />\n                        <span></span>\n                     </label>\n                  </div>\n               </div>\n               <div class=\"clearfix\">\n                  <p class=\"pull-left\">Boxed</p>\n                  <div class=\"pull-right\">\n                     <label class=\"switch switch-info\">\n                        <input type=\"checkbox\" ng-model=\"app.layout.isBoxed\" ng-disabled=\"app.layout.isMaterial\" />\n                        <span></span>\n                     </label>\n                  </div>\n               </div>\n               <div class=\"clearfix\">\n                  <p class=\"pull-left\">Material</p>\n                  <div class=\"pull-right\">\n                     <label ng-click=\"app.layout.isBoxed = false; app.layout.isFixed = true\" class=\"switch switch-info\">\n                        <input type=\"checkbox\" ng-model=\"app.layout.isMaterial\" ng-disabled=\"app.layout.isDocked || app.sidebar.isMini\" />\n                        <span></span>\n                     </label>\n                  </div>\n               </div>\n            </div>\n            <div class=\"p\">\n               <p class=\"text-muted\">SIDEBAR</p>\n               <div class=\"clearfix\">\n                  <p class=\"pull-left\">Mini</p>\n                  <div class=\"pull-right\">\n                     <label ng-click=\"app.layout.isMaterial = false;\" class=\"switch switch-info\">\n                        <input type=\"checkbox\" ng-model=\"app.sidebar.isMini\" />\n                        <span></span>\n                     </label>\n                  </div>\n               </div>\n               <div class=\"clearfix\">\n                  <p class=\"pull-left\">Right</p>\n                  <div class=\"pull-right\">\n                     <label class=\"switch switch-info\">\n                        <input type=\"checkbox\" ng-model=\"app.sidebar.isRight\" />\n                        <span></span>\n                     </label>\n                  </div>\n               </div>\n            </div>\n            <div class=\"p\">\n               <p class=\"text-muted\">FOOTER</p>\n               <div class=\"clearfix\">\n                  <p class=\"pull-left\">Hidden</p>\n                  <div class=\"pull-right\">\n                     <label class=\"switch switch-info\">\n                        <input type=\"checkbox\" ng-model=\"app.footer.hidden\" />\n                        <span></span>\n                     </label>\n                  </div>\n               </div>\n            </div>\n            <hr/>\n            <div class=\"p\">\n               <!-- START Language list-->\n               <div class=\"pull-right\">\n                  <div uib-dropdown=\"\" is-open=\"language.listIsOpen\" class=\"btn-group btn-group-sm\"><a uib-dropdown-toggle=\"\" class=\"dropdown-toggle clickable\">{{language.selected}}<span class=\"caret\"></span></a>\n                     <ul role=\"menu\" class=\"dropdown-menu dropdown-menu-right animated fadeInLeft2\">\n                        <li ng-repeat=\"(localeId, langName) in language.available\"><a ng-click=\"language.set(localeId, $event)\" href=\"\">{{langName}}</a>\n                        </li>\n                     </ul>\n                  </div>\n               </div>\n               <!-- END Language list    -->\n               <p class=\"text-muted\">LANGUAGE</p>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>");
$templateCache.put("templates/sidebar.html","<!-- START Sidebar-->\n<div class=\"sidebar-wrapper\">\n   <div ui-sidebar=\"\" class=\"sidebar\">\n      <div class=\"sidebar-nav\">\n         <ul class=\"nav\">\n            <!-- Iterates over all sidebar items-->\n            <li class=\"nav-heading\">\n               <span translate=\"sidebar.heading.HEADER\" class=\"text-muted\">Navigation</span>\n            </li>\n\n            <!-- Authentication -->\n            <li ng-class=\"{active:$state.includes(\'app\')}\">\n               <a href=\"\" title=\"Authentication\" ripple=\"\">\n                  <em class=\"sidebar-item-icon fa fa-sign-in\"></em>\n                  <em class=\"sidebar-item-caret fa pull-right fa-angle-right\"></em>\n                  <span>Authentication</span>\n               </a>\n               <ul class=\"nav sidebar-subnav\">\n                  <li class=\"sidebar-subnav-header\">\n                     <a>\n                        <em class=\"sidebar-item-icon fa fa-angle-right\"></em>Authentication</a>\n                  </li>\n                  <li ui-sref-active=\"active\">\n                     <a ui-sref=\"outside.login\" title=\"Login\" ripple=\"\">\n                        <em class=\"sidebar-item-icon\"></em>\n                        <span>Login</span>\n                     </a>\n                  </li>\n                  <li ui-sref-active=\"active\">\n                     <a ui-sref=\"outside.register\" title=\"Sign up\" ripple=\"\">\n                        <em class=\"sidebar-item-icon\"></em>\n                        <span>Sign up</span>\n                     </a>\n                  </li>\n               </ul>\n            </li>\n\n            <!-- Groups -->\n            <li ng-class=\"{active:$state.includes(\'app\')}\">\n               <a href=\"\" title=\"Groups\" ripple=\"\">\n                  <em class=\"sidebar-item-icon fa fa-users\"></em>\n                  <em class=\"sidebar-item-caret fa pull-right fa-angle-right\"></em>\n                  <span>Groups</span>\n               </a>\n               <ul class=\"nav sidebar-subnav\">\n                  <li class=\"sidebar-subnav-header\">\n                     <a>\n                        <em class=\"sidebar-item-icon fa fa-angle-right\"></em>Groups</a>\n                  </li>\n                  <li ui-sref-active=\"active\">\n                     <a ui-sref=\"app.group\" title=\"My groups\" ripple=\"\">\n                        <em class=\"sidebar-item-icon\"></em>\n                        <span>My groups</span>\n                     </a>\n                  </li>\n                  <li ui-sref-active=\"active\">\n                     <a ui-sref=\"app.group-add\" title=\"Add group\" ripple=\"\">\n                        <em class=\"sidebar-item-icon\"></em>\n                        <span>Add group</span>\n                     </a>\n                  </li>\n               </ul>\n            </li>\n         </ul>\n      </div>\n   </div>\n</div>\n<!-- END Sidebar-->");
$templateCache.put("templates/top-navbar-dock.html","<!-- START Top Navbar-->\n<nav role=\"navigation\" ng-controller=\"HeaderNavController as header\" class=\"navbar topnavbar\">\n   <!-- START button offset-->\n   <div class=\"btn-offset\">\n      <button type=\"button\" btn-layer-morph=\"\" target=\"#layer-search\" ripple=\"\" class=\"btn btn-info btn-circle btn-lg shadow-z1\">\n         <em class=\"fa fa-search\"></em>\n      </button>\n   </div>\n   <!-- START button offset-->\n   <!-- START navbar header-->\n   <div ng-class=\"app.theme.brand\" class=\"navbar-header\">\n      <a ui-sref=\"app.dashboard\" class=\"navbar-brand\">\n         <img src=\"app/img/logo.png\" alt=\"App Logo\" class=\"brand-logo\" />\n      </a>\n      <!-- Mobile buttons-->\n      <div class=\"mobile-toggles\">\n         <!-- Button to show/hide the header menu on mobile. Visible on mobile only.-->\n         <a href=\"\" ng-click=\"header.toggleHeaderMenu()\" class=\"menu-toggle pull-left\">\n            <em class=\"fa fa-navicon fa-fw\"></em>\n         </a>\n      </div>\n   </div>\n   <!-- END navbar header-->\n   <!-- START Nav wrapper-->\n   <div uib-collapse=\"header.headerMenuCollapsed\" class=\"nav-wrapper collapse navbar-collapse\">\n      <!-- START Left navbar-->\n      <ul class=\"nav navbar-nav\">\n         <li><a href=\"#/\">Back</a>\n         </li>\n         <li uib-dropdown=\"\" class=\"dropdown\"><a href=\"\" uib-dropdown-toggle=\"\" class=\"dropdown-toggle\">Dropdown</a>\n            <!-- START Dropdown menu-->\n            <ul class=\"dropdown-menu bg-white\">\n               <!-- START list item-->\n               <li><a href=\"\">Sub menu 1</a>\n               </li>\n               <li><a href=\"\">Sub menu 2</a>\n               </li>\n               <li><a href=\"\">Sub menu 3</a>\n               </li>\n            </ul>\n         </li>\n      </ul>\n      <!-- END Left navbar-->\n   </div>\n</nav>\n<!-- END Top Navbar-->");
$templateCache.put("templates/top-navbar.html","<!-- START Top Navbar-->\n<nav role=\"navigation\" ng-controller=\"HeaderNavController as header\" class=\"navbar topnavbar\">\n   <!-- START button offset-->\n   <div class=\"btn-offset\">\n      <button type=\"button\" btn-layer-morph=\"\" target=\"#layer-search\" ripple=\"\" class=\"btn btn-info btn-circle btn-lg shadow-z1\">\n         <em class=\"fa fa-search\"></em>\n      </button>\n   </div>\n   <!-- START button offset-->\n   <!-- START navbar header-->\n   <div class=\"navbar-header\">\n      <a ui-sref=\"app.home\" class=\"navbar-brand\">\n         <img src=\"app/img/logo.png\" alt=\"App Logo\" class=\"brand-logo\" />\n      </a>\n      <!-- Mobile buttons-->\n      <div class=\"mobile-toggles\">\n         <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->\n         <a href=\"\" ng-click=\"app.sidebar.isOffscreen = !app.sidebar.isOffscreen\" class=\"sidebar-toggle\">\n            <em class=\"fa fa-navicon\"></em>\n         </a>\n         <!-- Button to show/hide the header menu on mobile. Visible on mobile only.-->\n         <a href=\"\" ng-click=\"header.toggleHeaderMenu()\" class=\"menu-toggle hidden-material\">\n            <em class=\"fa fa-ellipsis-v fa-fw\"></em>\n         </a>\n      </div>\n   </div>\n   <!-- END navbar header-->\n   <!-- START Nav wrapper-->\n   <div uib-collapse=\"header.headerMenuCollapsed\" class=\"nav-wrapper collapse navbar-collapse\">\n      <!-- START Left navbar-->\n      <ul class=\"nav navbar-nav hidden-material\">\n         <li>\n            <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\n            <a href=\"\" ng-click=\"app.sidebar.isOffscreen = !app.sidebar.isOffscreen\" class=\"hidden-xs\">\n               <em ng-class=\"app.sidebar.isOffscreen ? \'fa-caret-right\':\'fa-caret-left\'\" class=\"fa\"></em>\n            </a>\n         </li>\n      </ul>\n      <!-- END Left navbar-->\n   </div>\n   <!-- END Nav wrapper-->\n\n</nav>\n<!-- END Top Navbar-->");}]);