var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/success', function(req, res, next) {
  res.render('success');
});

router.get('/bill-payed', function(req, res, next) {
    res.render('bill-payed');
  });

router.get('/error-intention-payment', function(req, res, next) {
    res.render('error-intention-payment');
});

router.get('/system-disabled', function(req, res, next) {
    res.render('system-disabled');
});

router.get('/error-bill-draft', function(req, res, next) {
  res.render('error-bill-draft');
});

module.exports = router;
