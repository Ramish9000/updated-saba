const express  = require('express');
const router   = express.Router();

// Controllers
const welcome = require('../controllers/welcome');
const signup = require('../controllers/signup');
const sessions = require('../controllers/sessions');
const questions = require('../controllers/questions');
const zodiacSigns = require('../controllers/zodiacSigns');

// Routes
router.route('/')
	.get(welcome.index);

router.route('/signup')
  	.get(signup.new)
  	.post(signup.create);

router.route('/login')
  	.get(sessions.new)
  	.post(sessions.create);

router.route('/logout')
  	.get(sessions.delete);

router.route('/questions')
  	.get(questions.index)
  	.put(questions.update);

router.route('/horoscope')
	.get(horoscope.show);

module.exports = router;