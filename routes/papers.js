var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('papers', { title: 'Distributed Mobile Computing' });
});

module.exports = router;