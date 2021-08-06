const express = require('express');

const router = express.Router();
const { New } = require('../db/models');

router.get('/newsPage', async (req, res) => {
  const allNews = await New.findAll({ order: [['id', 'DESC']] });
  res.render('newsPage', { allNews });
});

router.post('/admin/news', async (req, res) => {
  const { newstitle, newstext } = req.body;
  const pathToFile = req.file.path.slice(6);
  console.log('======>', req.file);
  New.create({ newstitle, newstext, newsimg: pathToFile });
  res.redirect('/newsPage');
});

router.delete('/admin/newsPage/delete/:id', async (req, res) => {
  const { id } = req.params;
  const delElement = await New.findOne({ where: { id } });
  if (delElement) {
    delElement.destroy();
    return res.sendStatus(200);
  }
  return res.sendStatus(404);
});

module.exports = router;
