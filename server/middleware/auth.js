const models = require('../models');
const Promise = require('bluebird');


module.exports.createSession = (req, res, next) => {
  Promise.resolve(req.cookies.shortlyid).then((hash) => {
    return models.Sessions.get({hash});
  }).tap(value => {
    if (!value) {
      throw value;
    }
  }).catch(() => {
    return models.Sessions.create()
      .then(results => {
        return models.Sessions.get({ id: results.insertId });
      })
      .tap(session => {
        res.cookie('shortlyid', session.hash);
      });
  })
    .then(session => {
      req.session = session;
      next();
    });
  };

// module.exports.loggedIn = (req, res, next) => {
//   Promise.resolve(req).then((test) => {
//     console.log('$$$$$$$$$$$$$$$$$$$$', test)
//   }) ; 
// };

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/


























  // Promise.resolve(req.cookies.shortlyid)
  //   .then(hash => {
  //     if (!hash) {
  //       throw hash;
  //     }
  //     return models.Sessions.get({ hash });
  //   })
  //   .tap(session => {
  //     if (!session) {
  //       throw session;
  //     }
  //   })
  //   // initializes a new session
  //   .catch(() => {
  //     return models.Sessions.create()
  //       .then(results => {
  //         return models.Sessions.get({ id: results.insertId });
  //       })
  //       .tap(session => {
  //         res.cookie('shortlyid', session.hash);
  //       });
  //   })
  //   .then(session => {
  //     req.session = session;
  //     next();
  //   });
  // };