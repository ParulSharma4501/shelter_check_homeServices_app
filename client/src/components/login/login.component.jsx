import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import SignupLoginSide from "../signup_login_side/signup_login_side.component";
import "./login.styles.css";
import axios from "axios";

import google from "../../assets/search.png";

function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = {
      email: input.email,
      password: input.password,
    };
    axios.post("/api/login", user);
  }

  return (
    <div className="login">
      <Form className="login_form" onSubmit={handleSubmit}>
        <div className="login_form_heading">
          <h2>
            <b>Login Account</b>
          </h2>
          <p>or use your Google account instead</p>
        </div>
        <a href="/auth/google" className="signup_form_google">
          <img
            src={google}
            height="30"
            width="30"
            alt="Google Logo"
            content="default-src 'self' style-src 'self' 'unsafe-inline';"
          />
        </a>
        <Form.Group
          controlId="formBasicEmail"
          className="login_form_group hvr-underline-reveal"
        >
          <MailOutlineIcon className="login_form_icons" />
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="login_form_control"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group
          controlId="formBasicPassword"
          className="login_form_group hvr-underline-reveal"
        >
          <LockOpenIcon className="login_form_icons" />
          <Form.Control
            type="password"
            placeholder="Enter password"
            className="signup_form_control"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <p className="login_form_forgot_password">Forgot your password?</p>
        <Button
          variant="primary"
          type="submit"
          className="login_button btn-grad"
        >
          LogIn
        </Button>
      </Form>
      <SignupLoginSide
        heading={"Hello, Friend!"}
        subtext={"Enter your personal details and start journey with us"}
        buttontext={"SIGNUP"}
      />
    </div>
  );
}

export default LoginForm;
