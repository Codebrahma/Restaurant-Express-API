var Router = require('express').Router();
var RestaurantController = require('./controller');

module.exports = function (passport) {
  /* Gets All Restaurants or by query id */
  Router.get('/', RestaurantController.getAllRestaurants);

  /* Gets Restaurants by type */
  Router.get('/:type', RestaurantController.getRestaurantsByType);
  
  /* Creates a new Restaurant */
  Router.post('/', RestaurantController.createRestaurant);
  
  /* Delete a restaurant */
  Router.delete('/', RestaurantController.deleteRestaurant);

  /* Adds a food to a restaurant */
  Router.post('/addFoodToRestaurant', RestaurantController.addFoodToRestaurant);

  /* Changes a food in a restaurant to the given state (In stock or Out of stock) */
  
  return Router;
}