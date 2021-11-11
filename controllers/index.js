const router = require('express').Router();
const apiRoutes = require('./api/index.js');
const dashboardRoutes = require('./dashboard-routes');
const homeRoutes = require('./home-routes');
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes )
router.use('/', homeRoutes);


router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});
module.exports = router;

