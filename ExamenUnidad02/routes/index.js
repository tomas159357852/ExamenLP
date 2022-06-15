var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/tramites', function(req, res, next) {
  res.render('tramites', { title: 'Tramites' });
});
router.get('/general', function(req, res, next) {
  res.render('general', { title: 'General' });
});


module.exports = router;
