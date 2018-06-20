const controller = require('./controller');
const router = require('express').Router();

module.exports = function (passport) {
  
  router.get('/health', passport.authenticate('jwt', { session: false }), controller.index);
  
  return router;
};
