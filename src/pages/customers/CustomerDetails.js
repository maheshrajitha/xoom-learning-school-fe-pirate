import React from "react";
import { Card, CardHeader, CardTitle, Table } from "reactstrap";

class BasicTable extends React.Component {
  render() {
    const customer = this.props.customer;
    return (
      <Card>
        <CardHeader className="pt-4 pl-4 pb-1">
          <CardTitle tag="h5">Customer Details</CardTitle>
        </CardHeader>
        <Table>
          <thead></thead>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{customer.name}</td>
            </tr>
            <tr>
              <th>NIC</th>
              <td>{customer.nic}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{customer.email}</td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>{customer.phone_number}</td>
            </tr>
            <tr>
              <th>Home Number</th>
              <td>{customer.phone_number}</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    );
  }
}

export default BasicTable;
