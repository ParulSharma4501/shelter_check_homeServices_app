import React from "react";

import { Button } from "react-bootstrap";
import brandlogo from "../../assets/sc.png";

import "./salon_box.styles.css";

const SalonBox = ({ typ, one, two, three, four }) => (
  <div className="SalonBox">
    <form>
      <br></br>
      <img src={brandlogo} height="150" width="220" alt=""></img>
      <h1 className="headinggg">{typ}</h1>
      <div className="content">
        <label for="gender">Choose a gender:</label>
        <br></br>
        <select name="gender" id="gender" className="input">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <br></br>
        <br></br>

        <label for="quality">Choose quality you want:</label>
        <br></br>
        <select name="quality" id="quality" className="input">
          <option value="Normal">Normal</option>
          <option value="Delux">Delux</option>
          <option value="Ultra Delux">Ultra Delux</option>
        </select>

        <br></br>
        <br></br>

        <label for="quantity">For how many people you want:</label>
        <br></br>
        <input type="text" className="input"></input>

        <br></br>
        <br></br>

        <label for="quality">Choose type:</label>
        <br></br>
        <select name="type" id="type" className="input">
          <option>{one}</option>
          <option>{two}</option>
          <option>{three}</option>
          <option>{four}</option>
        </select>

        <br></br>
        <br></br>
        <br></br>
      </div>
      <Button variant="primary" className="button">
        Book Now
      </Button>{" "}
    </form>
  </div>
);

export default SalonBox;
