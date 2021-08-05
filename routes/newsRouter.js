const express = require('express');
const router = express.Router();
const { New } = require('../db/models');


router.get('/news', (req, res) => {
  res.render('news');
});

router.post('/news', async (req, res) => {
  const { newstitle, newstext } = req.body;
  const pathToFile = req.file.path.slice(6);
  const createNews = await New.create({ newstitle, newstext, newsimg: pathToFile});
  res.redirect('/admin/news');
});


module.exports = router;
