var React = require('react');

module.exports = React.createClass({

	handleSearch:function(event){
		var searchKeyword=event.target.value.trim();
		console.info(searchKeyword);
	},

	render: function() {
		return (
			<div className="input-group">
			<input type="text" className="form-control" 
			placeholder={this.props.searchPlaceholderText} 
			onChange={this.handleSearch}
			/>
			<div className="input-group-addon">
			<span className="glyphicon glyphicon-search"></span>
			</div>
			</div>
			)
	}
});
