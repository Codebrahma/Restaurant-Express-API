var CryptoJS = require('crypto-js');

const secret = 'secretrestaurantapp';

const encrypt = function (password) {
  return CryptoJS.AES.encrypt(password, secret).toString();
};

const decrypt = function (hash) {
  const bytes = CryptoJS.AES.decrypt(hash.toString(), secret);
  return bytes.toString(CryptoJS.enc.Utf8);  
};

module.exports = {
  encrypt,
  decrypt,
};


