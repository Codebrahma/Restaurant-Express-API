const controller = require('./controller');
const router = require('express').Router();



module.exports = function (passport) {
  router.get('/health', controller.index);
  
  return router;
};
