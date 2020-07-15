import React from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  FormGroup,
  UncontrolledButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Button,
  Input,
  Col
} from "reactstrap";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class AreaChart extends React.Component {
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
    const data = [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ];

    const options = {
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00",
          "2018-09-19T01:30:00",
          "2018-09-19T02:30:00",
          "2018-09-19T03:30:00",
          "2018-09-19T04:30:00",
          "2018-09-19T05:30:00",
          "2018-09-19T06:30:00"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      },
      colors: [
        this.props.theme.primary,
        this.props.theme.success,
        this.props.theme.warning,
        this.props.theme.danger,
        this.props.theme.info
      ]
    };

    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle tag="h5">Anual Report filter(s)</CardTitle>
            <hr />
          </CardHeader>
          <CardBody>
            <UncontrolledButtonDropdown className="ml-3">
              <DropdownToggle caret outline color="secondary">
                All Customer Data{" "}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Out Customer Trial</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>

            <Row className="float-right pull-right">
              <FormGroup className="mr-3 mb-0">
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
                  onFocusChange={focusedInput =>
                    this.setState({ focusedInput })
                  } // PropTypes.func.isRequired,
                />
              </FormGroup>
              <div>
                <Button
                  type="submit"
                  color="primary"
                  className="mr-2 mb-1"
                  outline
                >
                  Search
                </Button>

                <Button color="secondary" className="mr-1 mb-1" outline>
                  Reset
                </Button>
              </div>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h5">Anual Report</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="chart w-100">
              <Chart options={options} series={data} type="area" height="350" />
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default connect(store => ({
  theme: store.theme.currentTheme
}))(AreaChart);
