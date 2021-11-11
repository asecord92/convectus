const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req,res) => {
    if (req.session.loggedIn) {
      res.render('dashboard');
    } else {
      res.render('login');
    }
  })


module.exports = router;