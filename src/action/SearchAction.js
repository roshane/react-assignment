var alt=require('../alt');

class SearchAction {
	
	searchCustomers(key){
		return ({searchKey:key});
	}
}

module.exports = alt.createActions(SearchAction);
