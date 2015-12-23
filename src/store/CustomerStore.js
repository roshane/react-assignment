import alt from '../alt';
import SearchActions from '../action/SearchAction';
import CustomerService from '../service/CustomerService';


class CustomerStore{

	constructor(){
		this.customers=[];
		this.searchKey='';
		this.isSearchCriteriaDefined=false;
		this.searchCriteria={firstName:null,lastName:null,Age:null};
		this.searchPlaceHolderText='type a search key and press enter';
		this.registerAsync(CustomerService);

		this.bindListeners({
			handleSearchCustomers: SearchActions.searchCustomers
		});

	}


	handleSearchCustomers(searchKey){

		this.updateSearchCriteria(searchKey.searchKey);
		console.log(this.searchCriteria);		
		var filteredCustomerList=[];
		var self=this;
		CustomerService.fetchCustomers(searchKey.searchKey)
		.then(function(data){
			data.forEach(c=>{
				if(c['firstName'].toUpperCase().contains(self.searchCriteria['firstName'].toUpperCase())){
					console.log('found customer : '+c);
					filteredCustomerList.push(c);
				}
			})

			self.customers=filteredCustomerList;
			self.emitChange();
		});
	}

	updateSearchCriteria(searchKey){
		var searchKeys=searchKey.split(",");
		if(this.isDefined(searchKeys[0])){
			this.searchCriteria.firstName=searchKeys[0].trim();
		}
		if(this.isDefined(searchKeys[1])){
			this.searchCriteria.lastName=searchKeys[1].trim();
		}
		if(this.isDefined(searchKeys[2]) && !isNaN(searchKeys[2])){
			this.searchCriteria.Age=parseInt(searchKeys[2].trim());
		}
		for(var k in this.searchCriteria){
			if(this.searchCriteria[k]!=null && this.searchCriteria[k]!=undefined){
				this.isSearchCriteriaDefined=true;
			}
		}
	}


	isDefined(value){
		return value!=undefined && value!=null && value!="";
	}
}

module.exports = alt.createStore(CustomerStore, 'CustomerStore');