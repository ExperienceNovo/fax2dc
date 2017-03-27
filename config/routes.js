/**
 * Route Mappings
 * (sails.config.routes)
 *
 */

module.exports.routes = {

  'get /': 'HomeController.index',
  'get /admin': 'HomeController.index',
  'get /about': 'HomeController.index',
  'get /donate': 'HomeController.index',
  'get /fax/:id': 'HomeController.index',

  'get /login': 'HomeController.index',
  'get /logout': 'AuthController.logout',
  'get /register': 'HomeController.index',
  'get /verify/:path': 'HomeController.index',

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
   * Fax routes
   */
  'get /api/fax': 'FaxController.getAll',
  'get /api/fax/count': 'FaxController.getCount',
  'get /api/fax/unapproved': 'FaxController.getUnapproved',
  'post /api/fax/update': 'FaxController.update',
  'post /api/fax': 'FaxController.create',
  'post /api/fax/verify/:id': 'FaxController.verify',
  'get /api/fax/:id': 'FaxController.getOne',

  /**
   * Legislator routes
   */
  'get /api/legislator': 'LegislatorController.getAll',
  'get /api/legislator/location': 'LegislatorController.getByLocation',

  '/.well-known/acme-challenge/Dtkozjq3bbAFbmG2JYv2KB9RFoUIzyBiVd3Zxo0l7aM': 'HomeController.ssl',


};
