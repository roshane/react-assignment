var React=require('react');

module.exports=React.createClass({

	// getInitialState:function(){
	// 	return {'searchKey':''};
	// },

	render:function(){
		var searchKey=this.props.searchKey;
		console.log("Data Table " +searchKey)
		return(
			<div>
			<span className="label label-default">
			{searchKey!=undefined? ('Result for : '+searchKey) : '...'} 
			</span>
			<br/>
			<table className="table table-striped table-condensed">
			<thead>
			<tr>
			<th>#</th>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Username</th>
			</tr>
			</thead>
			<tbody>
			<tr>
			<th scope="row">1</th>
			<td>Mark</td>
			<td>Otto</td>
			<td>@mdo</td>
			</tr>
			<tr>
			<th scope="row">2</th>
			<td>Jacob</td>
			<td>Thornton</td>
			<td>@fat</td>
			</tr>
			<tr>
			<th scope="row">3</th>
			<td>Larry</td>
			<td>the Bird</td>
			<td>@twitter</td>
			</tr>
			</tbody>
			</table>
			</div>
			);

	}
});
