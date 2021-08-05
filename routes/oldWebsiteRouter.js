const router = require('express').Router();

const { Blog } = require('../db/models');
const { New } = require('../db/models');

router.get('/index', (req, res) => {
  res.render('index');
});

router.get('/price', (req, res) => {
  res.render('pages/price');
});

router.get('/contacts', (req, res) => {
  res.render('pages/contacts');
});

router.get('/newsPage', async (req, res) => {
  const allNews = await New.findAll();
  res.render('newsPage', { allNews });
});

router.get('/blogg', async (req, res) => {
  const allBlogs = await Blog.findAll();
  res.render('blogg', { allBlogs });
});

router.get('/friends', (req, res) => {
  res.render('pages/friends');
});

router.get('/registration', (req, res) => {
  res.render('pages/registration');
});

router.get('/likvidatsiya-firm-v-permi', (req, res) => {
  res.render('pages/likvidatsiya-firm-v-permi');
});

router.get('/sud-i-arbitrazh', (req, res) => {
  res.render('pages/sud-i-arbitrazh');
});

router.get('/predostavlenie-yuridicheskih-adresov-v-permi', (req, res) => {
  res.render('pages/predostavlenie-yuridicheskih-adresov-v-permi');
});

router.get('/registratsiya-ip', (req, res) => {
  res.render('pages/registratsiya-ip');
});

router.get('/registratsiya-izmenenij', (req, res) => {
  res.render('pages/registratsiya-izmenenij');
});

router.get('/gotovye-firmy-v-permi', (req, res) => {
  res.render('pages/gotovye-firmy-v-permi');
});

router.get('/izgotovlenie-pechatej-i-shtampov', (req, res) => {
  res.render('pages/izgotovlenie-pechatej-i-shtampov');
});

router.get('/strahovaniye', (req, res) => {
  res.render('pages/strahovaniye');
});

router.get('/o-nas', (req, res) => {
  res.render('pages/o-nas');
});

router.get('/uslugi', (req, res) => {
  res.render('pages/uslugi');
});

module.exports = router;
