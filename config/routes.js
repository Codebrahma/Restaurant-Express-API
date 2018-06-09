'use strict';
/**
 * Expose
 */

module.exports = function (app, passport) {

  // Home Routes
  app.use('/', require('../app/Home')(passport));

  app.use('/food', require('../app/Food')(passport));

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
    });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).json({
      success: false,
    });
  });
};
