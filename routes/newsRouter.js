const express = require('express');

const router = express.Router();
const { New } = require('../db/models');

router.get('/news', async (req, res) => {
  const allNews = await New.findAll();
  res.render('news', { allNews });
});

router.post('/news', async (req, res) => {
  const { newstitle, newstext } = req.body;
  const pathToFile = req.file.path.slice(6);
  console.log('======>', req.file);
  New.create({ newstitle, newstext, newsimg: pathToFile });
  res.redirect('/admin/news');
});

module.exports = router;
