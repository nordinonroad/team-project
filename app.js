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

app.listen(3000);
