var express = require('express');
var router = express.Router();
companyName = "Westnet S.A";
msgObject = {
  success : "Su pago ha sido registrado en nuestro sistema.\n Muchas gracias por usar nuestros servicios. ",
  billPayed : "Su factura ya se encuentra pagada y no registra saldos pendientes.\n Muchas gracias por usar nuestros servicios.",
  errorIntentionPayment : "Su link de pago no pudo ser generado.\n Intente nuevamente más tarde.\nMuchas gracias por usar nuestros servicios.",
  systemDisabled : "El sistema se encuentra inhabilitado momentaneamente, por favor, intente nuevamente más tarde. \nMuchas gracias por usar nuestros servicios.",
  errorBillDraft : "Esta factura no es valida para ser pagada.\nMuchas gracias por usar nuestros servicios.",
  canceledPay: "Usted ha cancelado su pago. Si desea pagar nuevamente, inicie el proceso nuevamente. \nMuchas gracias por usar nuestros servicios.",
  notSuccess: "Su pago no pudo ser completado. \n Intente nuevamente más tarde.\nMuchas gracias por usar nuestros servicios.",
};

/* GET home page. */
router.get('/payment-intention/:id', function(req, res, next) {
  res.redirect(process.env.URL_REDIRECT_GESTION.replace('${customer_id}',req.params.id));
});

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
