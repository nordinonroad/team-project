const express = require('express');

const app = express();
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/admin', (req, res) => {
  res.render('adminLoginPage');
});

app.get('/profile', (req, res) => {
  res.render('adminProfilePage');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000);
