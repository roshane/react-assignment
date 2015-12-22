var React = require('react');
var SearchBox=require('./SearchBox');
var DataTable=require('./DataTable');

module.exports=React.createClass({

	render:function(){
		return (
			<div>
			<SearchBox searchPlaceholderText={this.props.searchPlaceholderText} />
			<hr/>
			<DataTable />
			</div>
			);
	}	
});