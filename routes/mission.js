var express = require('express');
var router = express.Router();

/* GET mission page. */
router.get('/', function(req, res, next) {
  res.render('mission', { title: 'Mission' });
});

module.exports = router;
