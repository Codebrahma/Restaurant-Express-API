var router = require('express').Router();
var FoodController = require('./controller');

module.exports = function (passport) {
  /* GET all Food or get food by id*/
  router.get('/', passport.authenticate('jwt', { session: false }), FoodController.getAllFood);

  /* POST New food */
  router.post('/', passport.authenticate('jwt', { session: false }), FoodController.createFood);

  /* Deletes a Food By ID */
  router.delete('/', passport.authenticate('jwt', { session: false }), FoodController.deleteFoodById);
  
  /* Updates a Food */
  router.patch('/:foodId', passport.authenticate('jwt', { session: false }), FoodController.updateFoodById);

  /* GET all Food or get food by id*/
  router.get('/types', passport.authenticate('jwt', { session: false }), FoodController.getFoodType);

  return router;
};