import React, { Component } from 'react';
import render from 'react-dom';
import SearchBox from './SearchBox';
import DataTable from './DataTable';
import CustomerStore from './store/CustomerStore'

class SearchComponent extends Component{

	constructor(props){
		super(props);
		var initialState=CustomerStore.getState();
		this.state=initialState;
		console.log(initialState);
	}

	componentDidMount() {
        CustomerStore.listen((state) => this.onChange(state));
    }

    componentWillUnmount() {
        CustomerStore.unlisten((state) => this.onChange(state));
    }

    onChange(state) {
    	console.info("SearchComponent onChange[] "+state);
        this.setState(state);
    }

	render(){

		return (
			<div>
			<SearchBox searchPlaceHolderText={this.state.searchPlaceHolderText} />
			<hr/>
			<DataTable searchKey={this.state.searchKey} customers={this.state.customers}/>
			</div>
			)
	}
}

export default SearchComponent;