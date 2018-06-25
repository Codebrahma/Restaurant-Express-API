const User = require('../User/model');
const findIndex = require('lodash/findIndex');

const roleAuthorization = function (roles) {
  return function (req, res, next) {
    const userId = req.user._id;
    User
      .findById(userId)
      .exec()
      .then((user) => {
        const isPresent = (findIndex(roles, role => role === user.role) !== -1);
        if (!isPresent) {
          return res.status(401).json({
            message: 'Not Authorized'
          });
        } else {
          return next();
        }
      })
      .catch((e) => {
        res
          .status(42)
          .json({
            message: 'User Does not exist'
          });
      });
  };
};

module.exports = {
  roleAuthorization,
};


