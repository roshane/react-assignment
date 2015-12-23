import React, { Component } from 'react';
import render from 'react-dom';
import SearchActions from './action/SearchAction';

class SearchBox extends Component{

	constructor(props){
		super(props);
	}

	handleSearch(event){
		var searchKey=event.target.value.trim();
		if(event.key=='Enter'){
			console.log("searchKey : "+searchKey)
			SearchActions.searchCustomers(searchKey);
		}
	}

	render(){
		return (
			<div className="input-group">
			<input type="text" className="form-control" 
			placeholder={this.props.searchPlaceHolderText} 
			onKeyPress={this.handleSearch.bind(this)}
			/>
			<div className="input-group-addon">
			<span className="glyphicon glyphicon-search"></span>
			</div>
			</div>
			)
	}	
}

export  default SearchBox;