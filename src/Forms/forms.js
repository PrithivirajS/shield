import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(10);

export default class LargeColumnTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }  scrollTop={ 'Bottom' }>
          <TableHeaderColumn width='150' dataField='id' isKey={ true }>ProductID</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
