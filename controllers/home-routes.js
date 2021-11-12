const router = require('express').Router();
const sequelize = require('../config/connection')
const {Event, User, Rsvp } = require('../models');

//render events

router.get('/', (req, res) => {
    res.render('homepage');
  });

  router.get('/login', (req, res) => {
    res.render('login');
  });
  router.get('/signup', (req, res) => {
    res.render('signup');
  });
  module.exports = router;
