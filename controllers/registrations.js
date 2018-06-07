const User = require('../models/user');

function newRoute(req, res) {
  res.render('pages/registration');
}

function createRoute(req, res){
  User
    .create(req.body)
    .then((user)=>{
      console.log(user);
      res.redirect('/zodiacSigns');
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};