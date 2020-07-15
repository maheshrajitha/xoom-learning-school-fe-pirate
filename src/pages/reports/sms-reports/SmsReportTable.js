import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  UncontrolledTooltip
} from "reactstrap";

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
    branch: "Maharagama",
    time: "09.00.00",
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
  },
  {
    name: "Garrett Winters",
    ref: "A-00099",
    reg_no: "BM28765",
    trial_date: "2019-12-09",
    id: 678,
    mobile: "0776453425",
    nic: "987604356v",
    branch: "Maharagama",
    time: "09.00.00",
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
  },
  {
    name: "Ashton Cox",
    ref: "A-00100",
    reg_no: "BM28765",
    trial_date: "2019-12-09",
    id: 678,
    mobile: "0776453425",
    nic: "897643986v",
    branch: "Maharagama",
    time: "09.00.00",
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
  },
  {
    name: "Cedric Kelly",
    ref: "A-00101",
    reg_no: "BM28765",
    trial_date: "2019-12-09",
    id: 678,
    nic: "917608435v",
    mobile: "0776453425",
    branch: "Maharagama",
    time: "09.00.00",
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
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
    message:
      "Your lesson book for 2019-06-09 and time 09:00:00 on for Moratuwa branch. Thank you"
  }
];

const tableColumns = [
  {
    dataField: "ref",
    text: "ID",
    formatter: refNoFormatter,
    headerStyle: (colum, colIndex) => {
      return { width: "10%", textAlign: "left" };
    }
  },
  {
    dataField: "trial_date",
    text: "Trial Date",
    headerStyle: (colum, colIndex) => {
      return { width: "13%", textAlign: "left" };
    }
  },
  {
    dataField: "mobile",
    text: "Mobile",
    headerStyle: (colum, colIndex) => {
      return { width: "10%", textAlign: "left" };
    }
  },
  {
    dataField: "message",
    text: "Message",
    headerStyle: (colum, colIndex) => {
      return { width: "57%", textAlign: "left" };
    }
  }
];

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
                  <SearchBar {...props.searchProps} />
                </div>
                <CardTitle tag="h4">SMS Report Data</CardTitle>
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
