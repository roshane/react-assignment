var alt=require('../alt');

class SearchAction {
	
	updateSearchkey(key){
		console.info("SearchAction : "+key);
		this.dispatch(key);
	}
}

module.exports = alt.createActions(SearchAction);
