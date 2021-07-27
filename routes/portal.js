var express = require('express');
var router = express.Router();
companyName = "Westnet S.A";
msgObject = {
  success : "Su pago ha sido registrado\nMuchas gracias por usar nuestros servicios de pago",
  billPayed : "Su factura se encuentra pagada.\nMuchas gracias por usar nuestros servicios de pago",
  errorIntentionPayment : "Su link de pago no pudo ser generado.\nAguarde unos minutos e intente nuevamente!\nMuchas gracias por usar nuestros servicios de pago",
  systemDisabled : "El sistema se encuentra inhabilitado, por favor, aguarde unos instantes.\nMuchas gracias por usar nuestros servicios de pago",
  errorBillDraft : "Esta factura no es valida para ser pagada.\nMuchas gracias por usar nuestros servicios de pago",
};

/* GET home page. */
router.get('/success', function(req, res, next) {
  res.render('success', {
    'redirectMessage' : msgObject.success,
    'companyName' : companyName
  });
});

router.get('/bill-payed', function(req, res, next) {
    res.render('success', {
      'redirectMessage' : msgObject.billPayed,
      'companyName' : companyName
    });
});

router.get('/error-intention-payment', function(req, res, next) {
    res.render('success', {
      'redirectMessage' : msgObject.errorIntentionPayment,
      'companyName' : companyName
    });
});

router.get('/system-disabled', function(req, res, next) {
    res.render('success', {
      'redirectMessage' : msgObject.systemDisabled,
      'companyName' : companyName
    });
});

router.get('/error-bill-draft', function(req, res, next) {
  res.render('success', {
    'redirectMessage' : msgObject.errorBillDraft,
    'companyName' : companyName
  });
});

module.exports = router;
