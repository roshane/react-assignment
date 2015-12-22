import React,{Component} from 'react';
import { render } from 'react-dom';

class DataTable extends Component{

    constructor(props){
    	super(props);
    	this.state={searchKey:''};
    }

    render(){

		var searchKey=this.props.searchKey;
		var customers=this.props.customers;

		return(
			<div>
			<span className="label label-default">
			{searchKey!=undefined? ('Result for : '+searchKey) : '...'} 
			</span>
			<br/>
			<table className="table table-striped table-condensed">
			<thead>
			<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Age</th>
			</tr>
			</thead>
			<tbody>
			{customers.map(function(customer){
				return <tr> <td>{customer.firstName}</td> <td>{customer.lastName}</td> <td>{customer.age}</td> </tr>
			})}
			</tbody>
			</table>
			</div>
			);
	}
}

export default DataTable;