var router = require('express').Router();
var FoodController = require('./controller');

module.exports = function (passport) {
  /* GET all Food or get food by id*/
  router.get('/', FoodController.getAllFood);

  /* POST New food */
  router.post('/', FoodController.createFood);

  /* Deletes a Food By ID */
  router.delete('/', FoodController.deleteFoodById);
  
  /* Updates a Food */
  router.patch('/:foodId', FoodController.updateFoodById);

  return router;
};