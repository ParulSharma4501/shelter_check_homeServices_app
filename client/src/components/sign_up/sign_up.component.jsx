import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import SignupLoginSide from "../signup_login_side/signup_login_side.component";

import google from "../../assets/search.png";
import "./sign_up.styles.css";

function SignupForm() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    city: "",
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
    const newUser = {
      username: input.username,
      email: input.email,
      password: input.password,
      mobile: input.mobile,
      city: input.city,
    };
    axios.post("/api/register", newUser);
  }

  return (
    <div className="signup">
      <SignupLoginSide
        heading={"Welcome Back!"}
        subtext={
          "To keep connected with us please login with your personal info"
        }
        buttontext={"LOGIN"}
      />
      <Form className="signup_form" onSubmit={handleSubmit}>
        <div className="signup_form_heading">
          <h2>
            <b>Create Account</b>
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
          controlId="formBasicName"
          className="signup_form_group hvr-underline-reveal"
        >
          <PersonIcon className="signup_form_icons" />
          <Form.Control
            type="name"
            name="username"
            placeholder="Enter name"
            className="signup_form_control"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group
          controlId="formBasicEmail"
          className="signup_form_group hvr-underline-reveal"
        >
          <MailOutlineIcon className="signup_form_icons" />
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="signup_form_control"
            onChange={handleChange}
            name="email"
          />
        </Form.Group>

        <Form.Group
          controlId="formBasicPassword"
          className="signup_form_group hvr-underline-reveal"
        >
          {/* <Form.Label className="signup_form_label">Password</Form.Label> */}
          <LockOpenIcon className="signup_form_icons" />
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            className="signup_form_control"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group
          controlId="formGridMobile"
          className="signup_form_group hvr-underline-reveal"
        >
          {/* <Form.Label className="signup_form_label">Mobile</Form.Label> */}
          <PhoneIcon className="signup_form_icons" />
          <Form.Control
            type="tel"
            name="mobile"
            placeholder="Enter mobile"
            className="signup_form_control"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group
          controlId="formGridCity"
          className="signup_form_group hvr-underline-reveal"
        >
          {/* <Form.Label className="signup_form_label">City</Form.Label> */}
          <LocationCityIcon className="signup_form_icons" />
          <Form.Control
            type="text"
            name="city"
            placeholder="Enter city"
            className="signup_form_control"
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="signup_button btn-grad"
        >
          SignUp
        </Button>
      </Form>
    </div>
  );
}

export default SignupForm;
//HA AAJ HI PTA LGA THA MJHE SUBH CAPTIAL HONA CHAHIYE PHLA LETTER
