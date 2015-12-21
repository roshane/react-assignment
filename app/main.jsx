var React = require('react');
var SearchBox = require('./searchBox')

var options={
	searchPlaceholderText: "Search"
}

var element = React.createElement(SearchBox, options);
React.render(element, document.getElementById('container'));
