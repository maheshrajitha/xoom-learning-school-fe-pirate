import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

const tableData = [
  {
    ref: "H19190",
    time_slot: "9.00 AM - 10.00 AM",
    reg_no: "00001",
    nic: "968798657v",
    lesson_date: "08 March 2020",
    phone_number: "704-993-5435",
    branch: "Head Office",
    vehicle_type: "Auto",
    vehicle: "CAX9954",
    instructor_name: "Wimukthi Dilshan"
  }
];

const tableColumns = [
  {
    dataField: "ref",
    text: "Ref",
    sort: false,
    formatter: refFormatter
  },
  {
    dataField: "time_slot",
    text: "Time Slot",
    sort: false,
    headerStyle: (colum, colIndex) => {
      return { width: "20%", textAlign: "left" };
    }
  },
  {
    dataField: "lesson_date",
    text: "Lesson Date",
    sort: false
  },
  {
    dataField: "branch",
    text: "Branch",
    sort: false
  },
  {
    dataField: "vehicle_type",
    text: "Vehicle Type",
    sort: false
  },
  {
    dataField: "vehicle",
    text: "Vehicle",
    sort: false,
    headerStyle: (colum, colIndex) => {
      return { width: "15%", textAlign: "left" };
    }
  },
  {
    dataField: "instructor_name",
    text: "Instructor Name",
    sort: false,
    headerStyle: (colum, colIndex) => {
      return { width: "20%", textAlign: "left" };
    }
  }
];

function refFormatter(cell, row) {
  return <span className="badge badge-primary">{cell}</span>;
}

class CustomerDetailsLesson extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exam_date: new Date(),
      exam_time: new Date()
    };
  }

  toggle = () => {
    this.setState(state => ({
      index: !state.index
    }));
  };

  componentWillMount() {
    this.setState(() => ({
      index: false
    }));
  }

  setExamDate = date => {
    this.setState({
      exam_date: date
    });
  };

  setExamTime = date => {
    this.setState({
      exam_time: date
    });
  };

  rowEvents = {
    onClick: (e, row, rowIndex) => {}
  };
  render() {
    return (
      <Card>
        <ToolkitProvider
          keyField="name"
          data={tableData}
          columns={tableColumns}
          exportCSV
        >
          {props => (
            <div>
              <CardHeader className="pt-4 pl-4 pb-1">
                <CardTitle tag="h5">Customer Details Lesson</CardTitle>
              </CardHeader>
              <CardBody>
                <BootstrapTable
                  responsive
                  hover
                  {...props.baseProps}
                  bootstrap4
                  bordered={false}
                  rowEvents={this.rowEvents}
                  pagination={paginationFactory({
                    sizePerPage: 5,
                    sizePerPageList: [5, 10, 25, 50]
                  })}
                />
              </CardBody>
            </div>
          )}
        </ToolkitProvider>
      </Card>
    );
  }
}

export default withRouter(CustomerDetailsLesson);
