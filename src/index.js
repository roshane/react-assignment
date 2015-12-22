import React from 'react';
import { render } from 'react-dom';
import { App } from './App';


var options={
	searchPlaceholderText:'search'
}

var parentNode=document.getElementById('root');
var searchComponent = React.createElement(App, options);
render(searchComponent, parentNode);
