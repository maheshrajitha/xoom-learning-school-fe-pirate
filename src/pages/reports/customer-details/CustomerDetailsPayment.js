import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  Table,
  CardBody,
  CardDeck,
  Button,
  Row,
  FormGroup,
  Col
} from "reactstrap";

class BasicTable extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader className="pt-4 pl-4 pb-1">
          <CardTitle tag="h5">Customer Details</CardTitle>
          <hr />
          <span className="mb-1">30 Jul 2019</span>
          <Row>
            <Col sm={8}>
              <CardTitle className="mt-1" tag="h5">
                ID No:7189
              </CardTitle>
            </Col>

            <Button className="float-right pull-right" color="primary" outline>
              Print Details
            </Button>
          </Row>
        </CardHeader>
        <CardBody>
          <Table borderless>
            <thead></thead>
            <tbody>
              <tr>
                <th>To Pay</th>
                <td>LKR 18,500.00</td>
              </tr>
              <tr>
                <th>Advanced Payment</th>
                <td>LKR 4,000.00</td>
              </tr>
              <tr>
                <th>Total Paid</th>
                <td>LKR 6,000.00</td>
              </tr>
              <tr>
                <th>Balanced o be Paid</th>
                <td>LKR 2,500.00</td>
              </tr>
              <tr>
                <th>Last Payment</th>
                <td>LKR 2,500.00</td>
              </tr>
              <tr>
                <th>Branch Balance</th>
                <td>LKR 2,500.00</td>
              </tr>
              <tr>
                <th>Full Total</th>
                <td>LKR 2,500.00</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

export default BasicTable;
