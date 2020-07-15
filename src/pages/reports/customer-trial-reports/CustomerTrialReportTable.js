import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  UncontrolledTooltip,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Button
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

const { SearchBar } = Search;

const tableData = [
  {
    name: "Tiger Nixon",
    ref: "A-00098",
    reg_no: "BM28765",
    trial_date: "2019-12-09",
    id: 678,
    mobile: "0776453425",
    training: "week/weekend",
    phone_number: "704-993-5435",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Garrett Winters",
    ref: "A-00099",
    reg_no: "BM28765",
    trial_date: "2019-12-09",
    id: 678,
    mobile: "0776453425",
    nic: "987604356v",
    training: "week/weekend",
    phone_number: "704-993-5435",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Ashton Cox",
    ref: "A-00100",
    reg_no: "BM28765",
    trial_date: "2019-12-09",
    id: 678,
    mobile: "0776453425",
    nic: "897643986v",
    training: "week/weekend",
    phone_number: "704-993-5435",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Cedric Kelly",
    ref: "A-00101",
    reg_no: "BM28765",
    trial_date: "2019-12-09",
    id: 678,
    nic: "917608435v",
    mobile: "0776453425",
    training: "week/weekend",
    phone_number: "704-993-5435",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Airi Satou",
    ref: "A-00102",
    reg_no: "BM28765",
    id: 678,
    nic: "887643986v",
    training: "week/weekend",
    trial_date: "2019-12-09",
    mobile: "0776453425",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Brielle Williamson",
    ref: "A-00103",
    reg_no: "BM28765",
    id: 678,
    nic: "867567435v",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Herrod Chandler",
    ref: "A-00104",
    reg_no: "BM28765",
    id: 678,
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Rhona Davidson",
    ref: "A-00105",
    reg_no: "BM28765",
    id: 678,
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Colleen Hurst",
    ref: "A-00098",
    reg_no: "BM28765 Francisco",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Sonya Frost",
    ref: "A-00098",
    reg_no: "BM28765",
    id: 678,
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Jena Gaines",
    ref: "A-00098",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Quinn Flynn",
    ref: "A-00098",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Charde Marshall",
    ref: "A-00098",
    reg_no: "00001 Francisco",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Haley Kennedy",
    ref: "A-00098 Designer",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Tatyana Fitzpatrick",
    ref: "A-00098",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Michael Silva",
    ref: "A-00098",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Paul Byrd",
    ref: "A-00098 reg_nor (00001)",
    reg_no: "00001 York",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Gloria Little",
    ref: "A-00098",
    reg_no: "00001 York",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Bradley Greer",
    ref: "A-00098",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Dai Rios",
    ref: "A-00098",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Jenette Caldwell",
    ref: "A-00098",
    reg_no: "00001 York",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Yuri Berry",
    ref: "A-00098 reg_nor (00001)",
    reg_no: "00001 York",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Caesar Vance",
    ref: "A-00098 Support",
    reg_no: "00001 York",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Doris Wilder",
    ref: "A-00098",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Angelica Ramos",
    ref: "A-00098 reg_nor (00001)",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Gavin Joyce",
    ref: "A-00098",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Jennifer Chang",
    ref: "A-00098",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Brenden Wagner",
    ref: "A-00098",
    reg_no: "00001 Francisco",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Fiona Green",
    ref: "A-00098 reg_nor (00001)",
    reg_no: "00001 Francisco",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Shou Itou",
    ref: "A-00098",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Michelle House",
    ref: "A-00098",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Suki Burks",
    ref: "A-00098",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Prescott Bartlett",
    ref: "A-00098",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Gavin Cortez",
    ref: "A-00098",
    reg_no: "00001 Francisco",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Martena Mccray",
    ref: "A-00098 support",
    reg_no: "00001",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  },
  {
    name: "Unity Butler",
    ref: "A-00098",
    reg_no: "00001 Francisco",
    mobile: "0776453425",
    training: "week/weekend",
    trial_date: "2019-12-09",
    branch: "Maharagama",
    time: "09.00.00",
    flow: "trial Pass"
  }
];

const tableColumns = [
  {
    dataField: "ref",
    text: "Ref No",
    sort: true,
    formatter: refNoFormatter,
    headerStyle: (colum, colIndex) => {
      return { width: "10%", textAlign: "left" };
    }
  },
  {
    dataField: "branch",
    text: "Reg Branch",
    sort: false,
    headerStyle: (colum, colIndex) => {
      return { width: "12%", textAlign: "left" };
    }
  },
  {
    dataField: "name",
    text: "Customer Name",
    sort: false,
    headerStyle: (colum, colIndex) => {
      return { width: "13%", textAlign: "left" };
    }
  },

  {
    dataField: "flow",
    text: "Flow",
    sort: false,
    headerStyle: (colum, colIndex) => {
      return { width: "10%", textAlign: "left" };
    }
  },
  {
    dataField: "mobile",
    text: "Mobile",
    sort: true,
    headerStyle: (colum, colIndex) => {
      return { width: "10%", textAlign: "left" };
    }
  },

  {
    dataField: "trial_date",
    text: "Trial Date",
    sort: false,
    headerStyle: (colum, colIndex) => {
      return { width: "13%", textAlign: "left" };
    }
  },

  {
    dataField: "time",
    text: "Time",
    sort: true,
    headerStyle: (colum, colIndex) => {
      return { width: "13%", textAlign: "left" };
    }
  }
];

function actionFormatter(cell, row, rowIndex, formatExtraData) {
  return (
    <div>
      <Link to="">
        <span className="mr-2 mb-1">Edit</span>
      </Link>
      <Link to="">
        <span className="mr-1 mb-1">Delete</span>
      </Link>
    </div>
  );
}

function statusFormatter(cell, row) {
  if (cell === "Blocked") {
    return (
      <div>
        <span id="UncontrolledTooltip" className="badge badge-danger ">
          Blocked <FontAwesomeIcon icon={faExclamation} />
        </span>
        <UncontrolledTooltip placement="bottom" target="UncontrolledTooltip">
          Tooltip on
        </UncontrolledTooltip>
      </div>
    );
  } else {
    return <span className="badge badge-success ">Completed</span>;
  }
}

function refNoFormatter(cell, row, rowIndex, formatExtraData) {
  return <div className="text-primary">{cell}</div>;
}

class CustomerTable extends React.Component {
  rowEvents = {
    onClick: (e, row, rowIndex) => {
      this.props.history.push("/customer-view", { row });
    }
  };
  render() {
    return (
      <Card>
        <ToolkitProvider
          keyField="name"
          data={tableData}
          columns={tableColumns}
          exportCSV
          search
        >
          {props => (
            <div>
              <CardHeader>
                {/* <div className="float-right pull-right">
                  <MyExportCSV {...props.csvProps} />
                </div> */}
                <div className="float-right pull-right">
                  <UncontrolledButtonDropdown className=" mr-3">
                    <DropdownToggle caret color="secondary">
                      Sort By
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        {/* <MyExportCSV {...props.csvProps} /> */}
                      </DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                  <SearchBar {...props.searchProps} />
                  <Button className=" ml-3" color="primary" outline>
                    Print Current Page
                  </Button>
                </div>
                <CardTitle tag="h4">Customer Trial Report Table</CardTitle>
              </CardHeader>
              <CardBody>
                {/* <div className="float-right pull-right">
                  <UncontrolledButtonDropdown className="mr-1">
                    <DropdownToggle caret color="secondary">
                      Actions
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <MyExportCSV {...props.csvProps} />
                      </DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                     
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div> */}

                <BootstrapTable
                  responsive={true}
                  striped
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

export default withRouter(CustomerTable);
