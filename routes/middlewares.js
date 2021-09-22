const api = require('./api');

exports.isHavePaymentIntentionValoration = (req, res, next) => {

	api.getToken()
	.then((response) => {
		
		api.searchPaymentIntentionValoration(response.data['access_token'], req.params.id)
		.then((result) => {

			if(result.data['data'] != null)
				return next();

			else
				res.redirect(`/portal${req.url}/form`);

		})
		.catch((error) => {
		    return next();
	    })
	})
	.catch((error) => {
		console.log(error);
		return next();
	})

	
}
