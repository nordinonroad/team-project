const express = require('express');
const router = express.Router();


router.get('/news', (req, res) => {
  res.render('news');
});

router.post('/news', (req, res) => {
  console.log('########', req.body)
  console.log('++++++++', req.file);
  res.redirect('/admin/news');
});


module.exports = router;
