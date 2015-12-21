var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="input-group">
			<input type="text" className="form-control" placeholder={this.props.searchPlaceholderText} />
			<div className="input-group-addon">
			<span className="glyphicon glyphicon-search"></span>
			</div>
			</div>
			)
	}
});
