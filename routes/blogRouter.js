const express = require('express');
const router = express.Router();
const { Blog } = require('../db/models');


router.get('/blog', (req, res) => {
  res.render('blog');
});

router.post('/blog', async (req, res) => {
  const { blogtitle, blogtext } = req.body;
  const pathToFile = req.file.path.slice(6);
  const createBlog = await Blog.create({ blogtitle, blogtext, blogimg: pathToFile });
  res.redirect('/blog');
});


module.exports = router;
