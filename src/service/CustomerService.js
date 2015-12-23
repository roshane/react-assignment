var Fetch = require('whatwg-fetch');

class CustomerService{

	constructor(){
		this.customerdata=[];
		this.config={endpoint:'http://localhost:3000/mock/customers.json'};
	}

	fetchCustomers(searchKey){
		var self=this;
		console.log('CustomerService[fetchCustomers]');

		return fetch(this.config.endpoint)
		.then(function(response) {
			return response.json()
		});
	}
	
}
module.exports=new CustomerService();