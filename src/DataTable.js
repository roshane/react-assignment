import React,{Component} from 'react';
import { render } from 'react-dom';

class DataTable extends Component{

	constructor(props){
		super(props);
		this.state={searchKey:''};
	}

	renderCustomers(){
		
		var customers=this.props.customers;
		var customerRows=[];
		if(customers){
			customers.map((customer)=>{
				
				var row=( <tr>
				<td>{customer.firstName}</td>
				<td>{customer.lastName}</td>
				<td>{customer.Age}</td>
				</tr>);
				customerRows.push(row);
			});
			return customerRows;
		}else{
			return <div className='alert alert-info'>No Data to be displayed :(</div>
		}
	}

	render(){

		var searchKey=this.props.searchKey;

		return(
			<div>
			<span className="label label-default">
			{(searchKey!=undefined || searchKey=='')? ('Result for : '+searchKey) : '...'} 
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
			{this.renderCustomers()}
			</tbody>
			</table>
			</div>
			);
	}
}

export default DataTable;