const parseCookies = (req, res, next) => {
  var someRandomObj = {};
  var startsWithSpace = function(string) {
  if (string.indexOf(string.trim()) != 0) {
    return string.trim();
  } else {
    return string
  }
  };

  if (req.headers.cookie) {
    var numCookies = req.headers.cookie.split(';');
    var splitCookie = req.headers.cookie.split('=');
    console.log(numCookies);
      for (var i = 0; i < numCookies.length; i++) {
        if (numCookies[i])
      var temp = numCookies[i].split('=');
      
      //console.log(temp)
      req._setCookiesVariable(startsWithSpace(temp[0]),temp[1]);
      //req._setSessionVariable(temp[0], temp[1]);
    }
    //console.log(numCookies)
  } 
  //   console.log('---------------', numCookies)
  //   console.log(splitCookie)

   
  //console.log(req)
  // console.log(numCookies)
  //console.log(req);
  console.log(req)
  next();

};

module.exports = parseCookies;