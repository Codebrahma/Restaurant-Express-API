const controller = require('./controller');
const router = require('express').Router();

const a = function (req, res, next) {
  console.log('came ')

    console.log(' came in a ');
    return next();
}

const b = function (req, res, next) {
    console.log(' came in b ');
    return next();
}

module.exports = function (passport) {
  
  router.get('/health', a, b, controller.index);
  
  return router;
};
