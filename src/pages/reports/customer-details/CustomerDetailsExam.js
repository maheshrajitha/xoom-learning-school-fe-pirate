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
          <CardTitle tag="h5">Customer Details Exam</CardTitle>
        </CardHeader>
        <CardBody>
          <Table borderless>
            <thead></thead>
            <tbody>
              <tr>
                <th>Request</th>
                <td></td>
              </tr>
              <tr>
                <th>Request Time</th>
                <td>08:32:00</td>
              </tr>
              <tr>
                <th>ID No</th>
                <td>7891</td>
              </tr>
              <tr>
                <th>Date</th>
                <td>09 Mar 2020</td>
              </tr>
              <tr>
                <th>Exam Time</th>
                <td>09:30:00</td>
              </tr>
              <tr>
                <th>Exam Result</th>
                <td>Pass</td>
              </tr>
              <tr>
                <th>Added</th>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

export default BasicTable;
