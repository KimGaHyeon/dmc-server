var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('team', { title: 'Distributed Mobile Computing' });
});

module.exports = router;
