import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput
} from "reactstrap";

import avatar from "../../assets/img/avatars/avatar.jpg";

class SignIn extends React.Component {
  state = {
    hour: null
  };

  componentDidMount() {
    this.getHour();
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({
      hour
    });
  };
  render() {
    const { hour } = this.state;
    return (
      <React.Fragment>
        <div className="text-center mt-4">
          <h2>
            {hour < 12 ? `Good Morning, ` : `Good Evening, `} It’s a great day
            today
          </h2>
          <p className="lead">Sign in to your account to continue</p>
        </div>

        <Card>
          <CardBody>
            <div className="m-sm-4">
              <div className="text-center">
                <img
                  src={avatar}
                  alt="Chris Wood"
                  className="img-fluid rounded"
                  width="132"
                  height="132"
                />
              </div>
              <Form>
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
                    placeholder="Enter your password"
                  />
                  <small>
                    <Link to="/auth/reset-password">Forgot password?</Link>
                  </small>
                </FormGroup>
                <div>
                  <CustomInput
                    type="checkbox"
                    id="rememberMe"
                    label="Remember me next time"
                    defaultChecked
                  />
                </div>
                <div className="text-center mt-3">
                  <Link to="/customers">
                    <Button color="primary" size="lg">
                      Login Now
                    </Button>
                  </Link>
                </div>
              </Form>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default SignIn;
