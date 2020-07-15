import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Col, Container, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";

import Area from "./Area";

class ApexCharts extends React.Component {
  componentDidUpdate() {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
  }

  render() {
    return (
      <Container fluid className="p-0">
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/customers">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Anual Report</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <h1 className="h3 mb-3">Anual Report</h1>

        <Row>
          <Col lg="12">
            <Area />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(store => ({
  theme: store.theme.currentTheme
}))(ApexCharts);
