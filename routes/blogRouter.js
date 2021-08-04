const express = require('express');
const router = express.Router();


router.get('/blog', (req, res) => {
  res.render('blog');
});

router.post('/blog', (req, res) => {
  console.log('########', req.body)
  console.log('++++++++', req.file);
  res.redirect('/blog');
});


module.exports = router;
