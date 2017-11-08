const parseCookies = (req, res, next) => {
  var startsWithSpace = function(string) {
    if (string.indexOf(string.trim()) !== 0) {
      return string.trim();
    } else {
      return string;
    }
  };
  var obj = {};
  if (req.headers.cookie) {
    var numCookies = req.headers.cookie.split(';');
    var splitCookie = req.headers.cookie.split('=');
    for (var i = 0; i < numCookies.length; i++) {
      if (numCookies[i]) {
        var temp = numCookies[i].split('=');
      }
      obj[startsWithSpace(temp[0])] = temp[1];
      
      // req.cookies = req._setCookiesVariable(startsWithSpace(temp[0]), temp[1]);
    }
  } 
  //console.log(req)
  req.cookies = obj;
  next();
};

module.exports = parseCookies;


// const parseCookies = (req, res, next) => {

//   let cookieString = req.get('Cookie') || '';

//   parsedCookies = cookieString.split('; ').reduce((cookies, cookie) => {
//     if (cookie.length) {
//       let index = cookie.indexOf('=');
//       let key = cookie.slice(0, index);
//       let token = cookie.slice(index + 1);
//       cookies[key] = token;
//     }
//     return cookies;
//   }, {});

//   req.cookies = parsedCookies;

//   next();
//   };

// module.exports = parseCookies;