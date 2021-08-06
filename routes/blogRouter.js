const express = require('express');

const router = express.Router();
const { Blog } = require('../db/models');

router.get('/blogg', async (req, res) => {
  const allBlogs = await Blog.findAll();
  res.render('blogg', { allBlogs });
});

router.post('/blog', async (req, res) => {
  const { blogtitle, blogtext } = req.body;
  const pathToFile = req.file.path.slice(6);
  Blog.create({ blogtitle, blogtext, blogimg: pathToFile });
  res.redirect('/blogg');
});

module.exports = router;
