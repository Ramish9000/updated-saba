const User = require('../models/user');

function indexRoute(req, res) {
  User
    .find()
    .exec()
    .then((user) => res.render('welcome', { user }));
}

module.exports = {
  index: indexRoute
};