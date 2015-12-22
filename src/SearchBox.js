import React, { Component } from 'react';
import render from 'react-dom';
import SearchActions from './action/SearchAction';

class SearchBox extends Component{

	constructor(props){
		super(props);
	}

	handleSearch(event){
		var searchKey=event.target.value.trim();
		SearchActions.updateSearchkey(searchKey);
	}

	render(){
		return (
			<div className="input-group">
			<input type="text" className="form-control" 
			placeholder={this.props.searchPlaceHolderText} 
			onChange={this.handleSearch.bind(this)}
			/>
			<div className="input-group-addon">
			<span className="glyphicon glyphicon-search"></span>
			</div>
			</div>
			)
	}	
}

export  default SearchBox;