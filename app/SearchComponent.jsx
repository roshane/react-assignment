var React = require('react');
var SearchBox=require('./SearchBox');
var DataTable=require('./DataTable');

module.exports=React.createClass({

	getInitialState:function(){
		return({'searchKey':''});
	},

	triggerSearch:function(searchKey){
		console.info("updating searchKey : "+searchKey);
		this.setState({'searchKey':searchKey});
		return searchKey;
	},

	render:function(){
		return (
			<div>
			<SearchBox searchPlaceholderText={this.props.searchPlaceholderText} notifySearchKey={this.triggerSearch}/>
			<hr/>
			<DataTable searchKey={this.props.searchKey}/>
			</div>
			);
	}	
});