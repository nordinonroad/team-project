const express = require('express');

const router = express.Router();
const { Blog } = require('../db/models');

router.get('/blogg', async (req, res) => {
  const allBlogs = await Blog.findAll({ order: [['id', 'DESC']] });
  res.render('blogg', { allBlogs });
});

router.post('/blog', async (req, res) => {
  const { blogtitle, blogtext } = req.body;
  const pathToFile = req.file.path.slice(6);
  Blog.create({ blogtitle, blogtext, blogimg: pathToFile });
  res.redirect('/blogg');
});

router.delete('/admin/blogg/delete/:id', async (req, res) => {
  const { id } = req.params;
  const delElement = await Blog.findOne({ where: { id } });
  if (delElement) {
    delElement.destroy();
    return res.sendStatus(200);
  }
  return res.sendStatus(404);
});

module.exports = router;
