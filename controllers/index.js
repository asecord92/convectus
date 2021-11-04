const router = require('express').Router();
const apiRoutes = require('./api/index.js');
router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;

