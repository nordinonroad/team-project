const express = require('express');
const router = express.Router();
const { Blog } = require('../db/models');


router.get('/blog', async (req, res) => {
  const allBlogs = await Blog.findAll();
  res.render('blog', { allBlogs });
});

router.post('/blog', async (req, res) => {
  const { blogtitle, blogtext } = req.body;
  const pathToFile = req.file.path.slice(6);
  const createBlog = await Blog.create({ blogtitle, blogtext, blogimg: pathToFile });
  res.redirect('/blog');
});

router.delete('/blog/delete/:id', async (req, res) => {
  const { id } = req.params;
  const del = await Blog.findOne({ where: { id } });
  await del.destroy();
  res.sendStatus(200);
});


module.exports = router;
