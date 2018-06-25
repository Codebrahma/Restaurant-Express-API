const controller = require('./controller');
const router = require('express').Router();
const Authorization = require('../utils/roleAuthorization');

module.exports = function (passport) {
  
  router.get('/health', 
    passport.authenticate('jwt', { session: false }),
    Authorization.roleAuthorization(['admin']),
    controller.index
  );
  
  return router;
};
