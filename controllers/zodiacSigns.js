const Zodiac = require('../models/zodiac.js');


function indexRoute(req, res){
  Zodiac
    .find()
    .exec()
    .then( zodiac =>{
      res.render('pages/zodiacSign', {zodiac});
    });
}


module.exports = {
  index: indexRoute
};