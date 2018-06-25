var Router = require('express').Router();
var OrderController = require('./controller');
const Authorization = require('../utils/roleAuthorization');

module.exports = function (passport) {
  Router
    .post(
      '/',
      passport.authenticate('jwt', { session: false }),
      Authorization.roleAuthorization(['user']),
      OrderController.createOrder
    );
  
  Router
    .get(
      '/',
      passport.authenticate('jwt', { session: false }),
      Authorization.roleAuthorization(['user']),
      OrderController.getOrderByUser
    );
  
  return Router;
};
