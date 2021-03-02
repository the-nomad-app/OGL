const jwt_decode = require("jwt-decode");

function getToken(headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
}

function decode(token) {
  return jwt_decode(token);
}

module.exports = {
  getToken,
  decode,
};
