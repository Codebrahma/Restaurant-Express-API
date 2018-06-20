var Router = require('express').Router();
var RestaurantController = require('./controller');

module.exports = function (passport) {
  /* Gets All Restaurants or by query id */
  Router.get('/', passport.authenticate('jwt', { session: false }), RestaurantController.getAllRestaurants);

  /* Gets Restaurants by type */
  Router.get('/:type', passport.authenticate('jwt', { session: false }), RestaurantController.getRestaurantsByType);
  
  /* Creates a new Restaurant */
  Router.post('/', passport.authenticate('jwt', { session: false }), RestaurantController.createRestaurant);
  
  /* Delete a restaurant */
  Router.delete('/', passport.authenticate('jwt', { session: false }), RestaurantController.deleteRestaurant);

  /* Adds a food to a restaurant */
  Router.post('/addFoodToRestaurant', passport.authenticate('jwt', { session: false }), RestaurantController.addFoodToRestaurant);

  /* Changes a food in a restaurant to the given state (In stock or Out of stock) */
  
  return Router;
}