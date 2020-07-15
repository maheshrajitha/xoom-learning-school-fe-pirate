import React from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const ColumnChart = ({ theme }) => {
  const data = [
    {
      name: "Net Profit",
      data: [50, 62, 93, 52, 51, 51]
    }
  ];

  const options = {
    plotOptions: {
      bar: {
        horizontal: false,
        // endingShape: "rounded",
        columnWidth: "55%"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: [
        "Advanced Paid",
        "Exam Fail",
        "Exam Pass",
        "Trial Fail",
        "Trial Partially Pass",
        "Trail Full Pass"
      ]
    },
    yaxis: {
      title: {
        text: "$ (thousands)"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return "$ " + val + " thousands";
        }
      }
    },
    colors: [theme.info]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">By Type</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart">
          <Chart options={options} series={data} type="bar" height="350" />
        </div>
      </CardBody>
    </Card>
  );
};

export default connect(store => ({
  theme: store.theme.currentTheme
}))(ColumnChart);
