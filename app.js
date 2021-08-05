const express = require('express');

const app = express();
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/price', (req, res) => {
  res.render('pages/price');
});

app.get('/contacts', (req, res) => {
  res.render('pages/contacts');
});

app.get('/news', (req, res) => {
  res.render('pages/news');
});

app.get('/blog', (req, res) => {
  res.render('pages/blog');
});

app.get('/friends', (req, res) => {
  res.render('pages/friends');
});

app.get('/registration', (req, res) => {
  res.render('pages/registration');
});

app.get('/likvidatsiya-firm-v-permi', (req, res) => {
  res.render('pages/likvidatsiya-firm-v-permi');
});

app.get('/sud-i-arbitrazh', (req, res) => {
  res.render('pages/sud-i-arbitrazh');
});

app.get('/predostavlenie-yuridicheskih-adresov-v-permi', (req, res) => {
  res.render('pages/predostavlenie-yuridicheskih-adresov-v-permi');
});

app.get('/registratsiya-ip', (req, res) => {
  res.render('pages/registratsiya-ip');
});

app.get('/registratsiya-izmenenij', (req, res) => {
  res.render('pages/registratsiya-izmenenij');
});

app.get('/gotovye-firmy-v-permi', (req, res) => {
  res.render('pages/gotovye-firmy-v-permi');
});

app.get('/izgotovlenie-pechatej-i-shtampov', (req, res) => {
  res.render('pages/izgotovlenie-pechatej-i-shtampov');
});

app.get('/strahovaniye', (req, res) => {
  res.render('pages/strahovaniye');
});

app.get('/o-nas', (req, res) => {
  res.render('pages/o-nas');
});

app.get('/uslugi', (req, res) => {
  res.render('pages/uslugi');
});

// app.get('/:num', (req, res) => {
//   const { num } = req.params;
//   res.render(`pages/${num}`);
// });

app.listen(3000);
