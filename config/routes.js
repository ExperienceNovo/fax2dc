/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  'get /': {
    controller: 'HomeController',
    action: 'index'
  },

  'get /about': 'HomeController.index',

  'get /contact': 'HomeController.index',
  'post /contact/email': 'EmailController.send',
  'get /dashboard': 'HomeController.index',
  'get /member/:path': 'HomeController.index',
  'get /portfolio': 'HomeController.index',
  'get /templates': 'HomeController.index',


  'get /login': 'HomeController.index',
  'get /logout': 'AuthController.logout',
  'get /register': 'HomeController.index',

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',

  /**
   * User routes
   */
  'get /api/user': 'UserController.getAll',
  'get /api/user/:id': 'UserController.getOne',
  'get /api/user/username/:path': 'UserController.getByUsername',
  'post /api/user': 'UserController.create',

  /**
   * Post routes
   */
  'get /api/post': 'PostController.getAll',
  'get /api/post/:id': 'PostController.getOne',
  'get /api/post/url/:path': 'PostController.getByUrlTitle',
  'post /api/post': 'PostController.create',
  'post /api/post/:id': 'PostController.update',
  'delete /api/post/:id': 'PostController.destroy',

  /**
   * Entry routes
   */
  'get /api/entry': 'EntryController.getAll',
  'get /api/entry/:id': 'EntryController.getOne',
  'post /api/entry': 'EntryController.create',
  'delete /api/entry/:id': 'EntryController.destroy',

  /**
   * Task routes
   */
  'get /api/task': 'TaskController.getAll',
  'get /api/task/:id': 'TaskController.getOne',
  'get /api/task/user/:id': 'TaskController.getByUser',
  'post /api/task': 'TaskController.create',
  'delete /api/task/:id': 'TaskController.destroy',


  // If a request to a URL doesn't match any of the custom routes above, it is matched 
  // against Sails route blueprints.  See `config/blueprints.js` for configuration options
  // and examples.

};
