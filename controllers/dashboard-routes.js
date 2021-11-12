const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req,res) => {
    res.render('dashboard', {loggedIn: true })
  });

// route for get all events


//route for create event

router.get('/create_event', (req,res)=> {
  res.render('create-event', {loggedIn: true});
});

module.exports = router;