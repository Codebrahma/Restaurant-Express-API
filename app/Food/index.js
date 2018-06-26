var router = require('express').Router();
var FoodController = require('./controller');
const Authorization = require('../utils/roleAuthorization');

module.exports = function (passport) {
  /* GET all Food or get food by id*/
  router.get('/',
    passport.authenticate('jwt', { session: false }),
    Authorization.roleAuthorization(['admin', 'user']),
    FoodController.getAllFood
  );

  /* POST New food */
  router.post('/',
    passport.authenticate('jwt', { session: false }),
    Authorization.roleAuthorization(['admin']),
    FoodController.createFood
  );

  /* Deletes a Food By ID */
  router.delete('/',
    passport.authenticate('jwt', { session: false }),
    Authorization.roleAuthorization(['admin']),
    FoodController.deleteFoodById
  );
  
  /* Updates a Food */
  router.patch('/:foodId',
    passport.authenticate('jwt', { session: false }),
    Authorization.roleAuthorization(['admin']),
    FoodController.updateFoodById
  );

  /* GET all Food or get food by id*/
  router.get('/types', 
    passport.authenticate('jwt', { session: false }),
    Authorization.roleAuthorization(['user']),
    FoodController.getFoodType
  );

  return router;
};