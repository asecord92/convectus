const router = require('express').Router();
const apiRoutes = require('./api/index.js');
router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});
module.exports = router;

