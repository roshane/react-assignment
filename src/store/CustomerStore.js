import alt from '../alt';
import SearchAction from '../action/SearchAction';

var customers=[{
	firstName:'sunil',
	lastName:'perera',
	age:24
},{
	firstName:'Mark',
	lastName:'Otto',
	age:55
},{
	firstName:'Jacob',
	lastName:'Thornton',
	age:45
}]

class CustomerStore{

	constructor(){
		this.customers=customers;
		this.searchKey='';
		this.searchPlaceHolderText='search :)';

		this.bindListeners({
			handleSearchCustomers: SearchAction.UPDATE_SEARCHKEY
		});
	}

	handleSearchCustomers(searchKey){
		this.customers=customers;
	}

	handleSearchKeyChange(searchKey){
		this.searchKey=searchKey;
		console.info('handleSearchKeyChange :'+searchKey);
		//TODO update customers here
	}
}

module.exports = alt.createStore(CustomerStore, 'CustomerStore');