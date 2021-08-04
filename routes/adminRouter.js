const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('adminMain');
});

router.get('/newsblogdiv', (req, res) => {
  res.render('newsblogdiv');
});

router.post('/newsblogdiv', async (req, res) => {
  const { login, password } = req.body;
  // console.log('=================>', req.body);
  // let adminEntering = await user.findOne({ where: { login } });
  // if (newUser) {
    if ((login === 'artem') && (password === '123')) {
      // req.session.login = login;
      // req.session.password = password;
 
      // req.session.username = newUser.login;
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  // }
})

module.exports = router;
