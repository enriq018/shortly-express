const parseCookies = (req, res, next) => {
  var startsWithSpace = function(string) {
    if (string.indexOf(string.trim()) !== 0) {
      return string.trim();
    } else {
      return string;
    }
  };
  
  if (req.headers.cookie) {
    var numCookies = req.headers.cookie.split(';');
    var splitCookie = req.headers.cookie.split('=');
    for (var i = 0; i < numCookies.length; i++) {
      if (numCookies[i]) {
        var temp = numCookies[i].split('=');
      }
      req._setCookiesVariable(startsWithSpace(temp[0]), temp[1]);
    }
  } 
  console.log(req)
  next();
};

module.exports = parseCookies;