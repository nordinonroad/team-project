const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('mainZero');
});

module.exports = router;
