import React from "react";
import { Link } from "react-router-dom";

import CustomerTable from "./CustomerTable";
import {
  Container,
  Button,
  FormGroup,
  Breadcrumb,
  BreadcrumbItem,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
  Row
} from "reactstrap";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class Customer extends React.Component {
  state = {
    startDate: null,
    endDate: null
  };

  setStartDate = date => {
    this.setState({
      startDate: date
    });
  };

  setEndDate = date => {
    this.setState({
      endDate: date
    });
  };
  render() {
    return (
      <Container fluid className="p-0">
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/customers">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Customer</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Row className=" float-right pull-right ">
          <FormGroup className="mr-4 mb-0">
            <DateRangePicker
              small={true}
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
              } // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
          </FormGroup>

          <UncontrolledButtonDropdown className="mr-3 mb-0">
            <DropdownToggle caret outline>
              Branch{" "}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>

          <UncontrolledButtonDropdown className="mr-3">
            <DropdownToggle caret outline color="secondary">
              Export{" "}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>

          <Button
            tag={Link}
            to="/add-customer"
            className="mr-3 "
            color="primary"
          >
            Add New Customer
          </Button>
        </Row>
        <h1 className="pt-1 h3 mb-3">Customers</h1>

        <CustomerTable />
      </Container>
    );
  }
}

export default Customer;
