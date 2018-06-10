
/*!
 * Module dependencies.
 */

module.exports.index = function (req, res) {
  console.log(req.user);
  res.send('SUCCESS')
};
