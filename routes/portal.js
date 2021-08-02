var express = require('express');
var router = express.Router();
companyName = "Westnet";
msgTnx = "\nMuchas gracias por usar nuestros servicios de pago";
msgObject = {
  success : "Su pago ha sido registrado en nuestro sistema\n"+msgTnx,
  billPayed : "Su factura ya se encuentra pagada\nNo registra saldos pendientes\n"+msgTnx,
  errorIntentionPayment : "Su link de pago no pudo ser generado\nIntente nuevamente más tarde\n"+msgTnx,
  systemDisabled : "El sistema se encuentra inhabilitado\nPor favor, intente nuevamente más tarde\n"+msgTnx,
  errorBillDraft : "Esta factura no es valida para ser pagada\n"+msgTnx,
  canceledPay : "Usted ha cancelado su pago\nSi desea pagar  de nuevo, inicie el proceso nuevamente\n"+msgTnx,
  notSuccess : "Su pago no pudo ser completado\nIntente nuevamente más tarde\n"+msgTnx,
};

/* GET home page. */
router.get('/payment-intention/:id', function(req, res, next) {
  //console.log(process.env.URL_REDIRECT_GESTION.replace('${customer_id}',req.params.id));
  res.redirect(process.env.URL_REDIRECT_GESTION.replace('${customer_id}',req.params.id));
});

/* GET home page. */
router.get('/success', function(req, res, next) {
  res.render('redirect', {
    'redirectMessage' : msgObject.success,
    'companyName' : companyName
  });
});

router.get('/bill-payed', function(req, res, next) {
    res.render('redirect', {
      'redirectMessage' : msgObject.billPayed,
      'companyName' : companyName
    });
});

router.get('/error-intention-payment', function(req, res, next) {
    res.render('redirect', {
      'redirectMessage' : msgObject.errorIntentionPayment,
      'companyName' : companyName
    });
});

router.get('/system-disabled', function(req, res, next) {
    res.render('redirect', {
      'redirectMessage' : msgObject.systemDisabled,
      'companyName' : companyName
    });
});

router.get('/error-bill-draft', function(req, res, next) {
  res.render('redirect', {
    'redirectMessage' : msgObject.errorBillDraft,
    'companyName' : companyName
  });
});

router.get('/canceled-pay', function(req, res, next) {
  res.render('redirect', {
    'redirectMessage' : msgObject.canceledPay,
    'companyName' : companyName
  });
});

router.get('/not-success', function(req, res, next) {
  res.render('redirect', {
    'redirectMessage' : msgObject.notSuccess,
    'companyName' : companyName
  });
});

module.exports = router;
