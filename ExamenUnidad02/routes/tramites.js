var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tramites', { title: 'Express' });
});
router.get('/general', function(req, res, next) {
    res.render('general', { title: 'Registrar' });
  });
  router.get('/index', function(req, res, next) {
    res.render('index', { title: 'index' });
  });
module.exports = router;
