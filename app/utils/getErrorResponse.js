module.exports = function (err) {
  return {
    success: false,
    message: err.message,
  }
}