'use strict';
/**
 * Expose
 */

module.exports = function (app, passport) {

  // Home Routes
  app.use('/', require('../app/Home')(passport));

  // User Routes
  app.use('/auth', require('../app/User')(passport));

  // Food Routes
  app.use('/food', require('../app/Food')(passport));

  // Restaurant Routes
  app.use('/restaurant', require('../app/Restaurant')(passport));
  

  /**
   * Error handling
   */
  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).json({
      success: false,
      message: err.message,
    });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).json({
      success: false,
    });
  });
};
