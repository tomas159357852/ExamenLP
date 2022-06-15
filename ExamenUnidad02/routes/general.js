var express = require('express');
var router = express.Router();

function cambiarpage(){
    res.redirect("/general");
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('general', { title: 'Express' });
});
router.get('/tramites', function(req, res, next) {
    res.render('tramites', { title: 'Express' });
  });

router.get('/index', function(req, res, next) {
    res.render('index', { title: 'index' });
  });

module.exports = router;
