const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req,res) => {
    res.render('dashboard', {loggedIn: true });
  })


module.exports = router;

// route for get all events


//route for create event



module.exports = router;