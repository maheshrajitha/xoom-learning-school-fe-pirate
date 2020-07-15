import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const SignUp = () => (
  <React.Fragment>
    <div className="text-center mt-4">
      <h1 className="h2">Create your Account</h1>
      <p className="lead">Please add a password to start with your bookings</p>
    </div>

    <Card>
      <CardBody>
        <div className="m-sm-4">
          <Form>
            <FormGroup>
              <Label>Name</Label>
              <Input
                bsSize="lg"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                bsSize="lg"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                bsSize="lg"
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </FormGroup>
            <FormGroup>
              <Label>Re Enter Password</Label>
              <Input
                bsSize="lg"
                type="password"
                name="password"
                placeholder="Re Enter password"
              />
            </FormGroup>

            <div className="text-center mt-3">
              <Link to="/customers">
                <Button color="primary" size="lg">
                  Get Access Now
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </CardBody>
    </Card>
    <FormGroup>
      <Label>All ready have an account ? </Label>{" "}
      <Link to="/auth/sign-in">Sign in</Link>
    </FormGroup>
  </React.Fragment>
);

export default SignUp;
