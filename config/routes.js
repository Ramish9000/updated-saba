const express  = require('express');
const router   = express.Router();

// Controllers
const welcome = require('../controllers/welcome');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const horoscope = require('../controllers/horoscope');
const zodiacSigns = require('../controllers/zodiacSigns');

// Routes
router.route('/')
	.get(welcome.index);

router.route('/registrations')
  	.get(registrations.new)
  	.post(registrations.create);

router.route('/login')
  	.get(sessions.new)
  	.post(sessions.create);

router.route('/logout')
  	.get(sessions.delete);

router.route('/zodiacSigns')
  	.get(zodiacSigns.index)

router.route('/horoscope/:id')
	.get(horoscope.show)

module.exports = router;