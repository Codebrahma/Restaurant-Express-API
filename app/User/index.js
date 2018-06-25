var Router = require('express').Router();
var UserController = require('./controller');

module.exports = function (passport) {
  
  Router.post('/register', UserController.register);

  Router.get('/users', UserController.getUsers);

  Router.delete('/:userId', passport.authenticate('jwt', { session: false }), UserController.deleteUserById);

  Router.post('/login', UserController.login(passport));

  return Router;
}