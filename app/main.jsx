var React = require('react');
var SearchComponent = require('./SearchComponent');

var options={
	searchPlaceholderText: "Search"
}

var parentNode=document.getElementById('container');
var searchComponent = React.createElement(SearchComponent, options);
React.render(searchComponent, parentNode);
