var express = require('express');
var router = express.Router();
let middlewares = require('./middlewares');
const api = require('./api');

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
  companyDisabled: "Actualmente no se encuentra habilitado este medio de pago en su cuenta\nPor favor aguarde nuevas mejoras\n"+msgTnx,
};

/* GET home page. */
router.get('/payment-intention/:id', function(req, res, next) {
  //console.log(process.env.URL_REDIRECT_GESTION.replace('${customer_id}',req.params.id));
  res.redirect(process.env.URL_REDIRECT_GESTION.replace('${customer_id}',req.params.id));
});

router.route('/success/:id').get(middlewares.isHavePaymentIntentionValoration, function(req, res, next){
  res.render('redirect', {
    'id': req.params.id,
    'redirectMessage' : msgObject.success,
    'companyName' : companyName
  });
})


router.get('/bill-payed', function(req, res, next) {
    res.render('redirect', {
      'id': req.params.id,
      'redirectMessage' : msgObject.billPayed,
      'companyName' : companyName
    });
});

router.route('/error-intention-payment/:id').get(middlewares.isHavePaymentIntentionValoration, function(req, res, next) {
    res.render('redirect', {
      'id': req.params.id,
      'redirectMessage' : msgObject.errorIntentionPayment,
      'companyName' : companyName
    });
});

router.route('/system-disabled').get(middlewares.isHavePaymentIntentionValoration, function(req, res, next) {
    res.render('redirect', {
      'id': req.params.id,
      'redirectMessage' : msgObject.systemDisabled,
      'companyName' : companyName
    });
});

router.route('/error-bill-draft').get(middlewares.isHavePaymentIntentionValoration, function(req, res, next) {
  res.render('redirect', {
    'id': req.params.id,
    'redirectMessage' : msgObject.errorBillDraft,
    'companyName' : companyName
  });
});

router.route('/canceled-pay/:id').get(middlewares.isHavePaymentIntentionValoration, function(req, res, next) {
  res.render('redirect', {
    'id': req.params.id,
    'redirectMessage' : msgObject.canceledPay,
    'companyName' : companyName
  });
});

router.route('/not-success/:id').get(middlewares.isHavePaymentIntentionValoration, function(req, res, next) {
  res.render('redirect', {
    'id': req.params.id,
    'redirectMessage' : msgObject.notSuccess,
    'companyName' : companyName
  });
});

router.get('/company-disabled', function(req, res, next) {
  res.render('redirect', {
    'redirectMessage' : msgObject.companyDisabled,
    'companyName' : companyName
  });
});


//Route with form
router.get('/success/:id/:form', function(req, res, next){
  res.render('redirect', {
    'id': req.params.id,
    'redirectMessage' : msgObject.success,
    'companyName' : companyName,
    'form': true
  });
})

router.get('/error-intention-payment/:id/:form', function(req, res, next) {
    res.render('redirect', {
      'id': req.params.id,
      'redirectMessage' : msgObject.errorIntentionPayment,
      'companyName' : companyName,
      'form': true
    });
});

router.get('/canceled-pay/:id/:form', function(req, res, next) {
  res.render('redirect', {
    'id': req.params.id,
    'redirectMessage' : msgObject.canceledPay,
    'companyName' : companyName,
    'form': true
  });
});

router.get('/not-success/:id/:form', function(req, res, next) {
  res.render('redirect', {
    'id': req.params.id,
    'redirectMessage' : msgObject.notSuccess,
    'companyName' : companyName,
    'form': true
  });
});

router.post('/create-valoration', function(req, res, next) {
  api.getToken()
  .then((response) => {
    api.createValoration(response.data['access_token'],req.body)
    .then((result) => {
       res.redirect(req.headers.referer.replace('/form',''));
    })
    .catch((error) => {
      console.log(error);
      res.redirect(req.headers.referer.replace('/form',''));
    })

  })
  .catch((error) => {
    res.redirect(req.headers.referer.replace('/form',''));
  })

});

module.exports = router;
