const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth')

router.get('/', withAuth, (req,res) => {
    res.render('dashboard', {loggedIn: true })
  });

// route for get all events


//route for create event

router.get('/create_event', withAuth, (req,res)=> {
  res.render('create-event', {loggedIn: true});
});

module.exports = router;