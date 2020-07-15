import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  CustomInput,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";

import jQuery from "jquery";

const $ = jQuery;
window.jQuery = jQuery;

require("smartwizard/dist/js/jquery.smartWizard.min.js");

class WizardVariant extends React.Component {
  state = {};

  componentDidMount() {
    setTimeout(() => {
      $(".sw-btn-group-extra").hide();
    });

    $(this.refs.smartwizard)
      .smartWizard({
        theme: this.props.variant, // default OR arrows
        showStepURLhash: false
      })
      .on("showStep", function(e, anchorObject, stepNumber, stepDirection) {
        if ($("button.sw-btn-next").hasClass("disabled")) {
          $(".sw-btn-group-extra").show();
        } else {
          $(".sw-btn-group-extra").hide();
        }
      })
      .on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
        if (stepDirection === "forward") {
          // Validation between steps
        }

        return true;
      });

    $(this.refs.smartwizard)
      .find(".btn-submit")
      .on("click", function() {
        alert("Great! The form is ready to submit.");
        // Final validation

        return false;
      });
  }
  render = () => {
    const { color } = this.props;

    return (
      <div ref="smartwizard" className={`wizard wizard-${color} mb-4`}>
        <ul>
          <li>
            <a href={`#step-1`}>
              <h6>Overview</h6>
              <small>Customer Details</small>
            </a>
          </li>
          <li>
            <a href={`#step-2`}>
              <h6>Customer</h6>
              <small>Customer Details</small>
            </a>
          </li>
          <li>
            <a href={`#step-4`}>
              <h6>Office</h6>
              <small>Customer Details Added by Office</small>
            </a>
          </li>
        </ul>

        <div>
          <div id={`step-1`}>
            {" "}
            <FormGroup row>
              <Label sm={5}>Name</Label>
              <Col sm={6}>
                <Label>Maharagamage Ashan Dilantha</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>NIC/Passport Number</Label>
              <Col sm={6}>
                <Label>9576352610V</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Permenent Address</Label>
              <Col sm={6}>
                <Label>Udara, Eheledeniya, Mirissa</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Contact Number Home</Label>
              <Col sm={6}>
                <Label>051 2355538</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Contact Customer Phone Number</Label>
              <Col sm={6}>
                <Label>0789053556</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Branch</Label>
              <Col sm={6}>
                <Label>Maharagama</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Customer Type</Label>
              <Col sm={6}>
                <Label>Trainer</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Training Amount</Label>
              <Col sm={6}>
                <Label>18,500.00</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Ref</Label>
              <Col sm={6}>
                <Label>|18|T|01</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Medical Certificate Number</Label>
              <Col sm={6}>
                <Label>0</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>RMV Barcode Ref</Label>
              <Col sm={6}>
                <Label>0</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Paper Set</Label>
              <Col sm={6}>
                <Label>0</Label>
              </Col>
            </FormGroup>
          </div>
          <div id={`step-2`}>
            <FormGroup row>
              <Label sm={5}>NIC/Passport Number</Label>
              <Col sm={6}>
                <Label>9576352610V</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Date of Birth</Label>

              <Col sm={6}>
                <Label>1995-06-30</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Permenent Address</Label>
              <Col sm={6}>
                <Label>Udara, Eheledeniya, Mirissa</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Contact Number Home</Label>
              <Col sm={6}>
                <Label>051 2355538</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Email</Label>
              <Col sm={6}>
                <Label>udara@gmail.com</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>MC Issue Date</Label>
              <Col sm={6}>
                <Label>2019 - 11 - 1 </Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Name</Label>
              <Col sm={6}>
                <Label>Maharagamage Ashan Dilantha</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>NIC/Passport Issue Date</Label>
              <Col sm={6}>
                <Label>2011 - 10 - 1 </Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Gender</Label>
              <Col sm={6}>
                <Label>Male </Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Medical Certificate Number</Label>
              <Col sm={6}>
                <Label>0</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>RMV Barcode Ref</Label>
              <Col sm={6}>
                <Label>0</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Paper Set</Label>
              <Col sm={6}>
                <Label>0</Label>
              </Col>
            </FormGroup>
          </div>
          <div id={`step-4`}>
            {" "}
            <FormGroup row>
              <Label sm={5}>Branch</Label>
              <Col sm={6}>
                <Label>Maharagama</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Customer Type</Label>

              <Col sm={6}>
                <Label>Trainer</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Training Course</Label>
              <Col sm={6}>
                <Label>TR005-B(B,A)</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Training Amount</Label>
              <Col sm={6}>
                <Label>18,500.00</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Discount Reason</Label>
              <Col sm={6}>
                <Label>Campus</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Advanced Payment</Label>
              <Col sm={6}>
                <Label>2000.00</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Customer Medical</Label>
              <Col sm={6}>
                <Label>Fail</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Book</Label>
              <Col sm={6}>
                <Label>Fail</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Ref</Label>
              <Col sm={6}>
                <Label>|18|T|01 </Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Date</Label>
              <Col sm={6}>
                <Label>2019 - 12 - 01</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Training Days</Label>
              <Col sm={6}>
                <Label>Weekday</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Discount</Label>
              <Col sm={6}>
                <Label>1,500.00</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={5}>Sub Total</Label>
              <Col sm={6}>
                <Label>18,500.00</Label>
              </Col>
            </FormGroup>
          </div>
        </div>
      </div>
    );
  };
}

export default WizardVariant;
