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
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

     '/': {
       view: 'homepage'
     },
     '/register': {
       view: 'homepage'
     },

     'GET /collection/homeCollection/:ownerID': 'CollectionController.getHomeCollection',

     'GET /collectionBook/:collectionID': 'CollectionBookController.getCollectionBooks',

     'GET /collectionUser/:collectionID': 'CollectionUserController.getCollectionUsers',
     'POST /collectionUser': 'CollectionUserController.addUserToCollection',
     
     'GET /comment/booksComments': 'CommentController.getBooksComments',

     'GET /loan/myLoans': 'LoanController/getMyLoans',

     'POST /reading/update': 'ReadingController.update',
     'GET /reading/myReadings': 'ReadingController.getMyReadings',
     'GET /reading/lastRead': 'ReadingController.getLastRead',
     'GET /reading/nowRead': 'ReadingController.getNowRead',


     'POST /user': 'User2Controller.create',
     'POST /user/login': 'User2Controller.login',
     'GET /user/findByID': 'User2Controller.findByID',

};
