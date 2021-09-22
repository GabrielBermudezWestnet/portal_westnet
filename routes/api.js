const axios = require('axios');

exports.getToken = () => {
	return axios.post(process.env.URL_GESTION+'ivr/v1/auth/token', {
		username: 'ivruser',
		password: 'w3stn3t1257',
		client_id: 'ivr_user',
		client_secret: '4kjaw4a0d0ks09sdfi9ersj23i4l2309aid09qe',
		grant_type: 'password'
	});
}

exports.searchPaymentIntentionValoration = (token, id) =>{
	console.log(token);
	return axios.post(process.env.URL_GESTION + 'ivr/v1/payment-intention/search-payment-intention', {
		siro_payment_intention_id: id 
	},
	{
		headers:{
			'Authorization': `Bearer ${token}`
		}
	});
}


exports.createValoration = (token, data) =>{

	return axios.post(process.env.URL_GESTION + 'ivr/v1/payment-intention/create-valoration', {
		name: data.name,
		email: data.email,
		description: data.message,
		siro_payment_intention_id: data.id, 
	},
	{
		headers:{
			'Authorization': `Bearer ${token}`
		}
	});
}

