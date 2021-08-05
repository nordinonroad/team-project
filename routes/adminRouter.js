const router = require('express').Router();

// protection middleware
const sessionChecker = (req, res, next) => {
  if (req.session.login) {
    next();
  } else {
    res.redirect('/');
  }
};

router.get("/", (req, res) => {
  res.render("adminMain");
});

router.get("/newsblogdiv", sessionChecker, (req, res) => {
  res.render("newsblogdiv");
});

//login
router.post("/newsblogdiv", async (req, res) => {
  const { login, password } = req.body;
  // console.log('=================>', req.body);
  // let adminEntering = await user.findOne({ where: { login } });
  // if (newUser) {
  if (login === "artem" && password === "123") {
    req.session.login = login;
    req.session.password = password;
    console.log('=======>', req.session.login);
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

//logout

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('login');
  res.cookie('login', '', { expire: 1 });
  res.redirect('/');
});

module.exports = router;
