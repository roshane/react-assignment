var React = require('react');
var SearchComponent = require('./SearchComponent');

var options={
	searchPlaceholderText: "Search"
}

var element = React.createElement(SearchComponent, options);
React.render(element, document.getElementById('container'));
