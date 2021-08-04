const router = require("express").Router();

router.get('/buttonAdminAction', (req, res) =>{
  res.render('buttonAdminAction');
});

router.post('/buttonAdminAction', (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  console.log('artemloh', id);
  res.json({id});
});

module.exports = router;
