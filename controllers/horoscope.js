const Horoscope = require('../models/horoscope.js');

function showRoute(req, res){
  Horoscope
    .findById(req.params.id)
    .exec()
    .then( horoscope =>{
      res.render('pages/horoscope', {horoscope});
    });
}

module.exports = {
  show: showRoute
};