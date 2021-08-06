const router = require("express").Router();

router.get('/buttonAdminAction', (req, res) =>{
  res.render('buttonAdminAction');
});

router.post('/buttonAdminAction', (req, res) => {
  const { id } = req.body;
  // res.json({id});
  if(id == 1) {
    return res.render('news')
  } 
  res.render('blog')
});

module.exports = router;
