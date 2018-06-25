var Router = require('express').Router();
var RestaurantController = require('./controller');
const Authorization = require('../utils/roleAuthorization');

module.exports = function (passport) {
  /* Gets All Restaurants or by query id */
  Router.get('/',
    passport.authenticate('jwt', { session: false }),
    Authorization.roleAuthorization(['admin', 'user']),
    RestaurantController.getAllRestaurants
  );

  /* Gets Restaurants by type */
  Router.get('/filter', 
    passport.authenticate('jwt', { session: false }),
    Authorization.roleAuthorization(['admin', 'user']),
    RestaurantController.getRestaurantsByType
  );
  
  /* Creates a new Restaurant */
  Router.post('/', 
    passport.authenticate('jwt', { session: false }),
    Authorization.roleAuthorization(['admin']),
    RestaurantController.createRestaurant
  );
  
  /* Delete a restaurant */
  Router.delete('/', 
    passport.authenticate('jwt', { session: false }),
    Authorization.roleAuthorization(['admin']), 
    RestaurantController.deleteRestaurant
  );

  /* Adds a food to a restaurant */
  Router.post('/addFoodToRestaurant', 
    passport.authenticate('jwt', { session: false }),
    Authorization.roleAuthorization(['admin']),
    RestaurantController.addFoodToRestaurant
  );

  /* Changes a food in a restaurant to the given state (In stock or Out of stock) */
  
  return Router;
}