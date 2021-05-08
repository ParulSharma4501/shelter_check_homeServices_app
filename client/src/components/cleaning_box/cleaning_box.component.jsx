import React from "react";

import { Button } from "react-bootstrap";
import brandlogo from "../../assets/sc.png";

import "./cleaning_box.styles.css";

const CleaningBox = ({ typ, one, two, three, four }) => (
  <div className="CleaningBox">
    <form>
      <br></br>
      <img src={brandlogo} alt="" height="150" width="220"></img>
      <h1 className="headinggg">{typ}</h1>
      <div className="content">
        <label for="gender">Choose a cleaning type:</label>
        <br></br>
        <select name="gender" id="gender" className="input">
          <option value="Male">Dry No-touch Cleaning</option>
          <option value="Female">Chemical Free Cleaning</option>
          <option value="Other">Foam Cleaning</option>
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

        <label for="quantity">{`${typ}s Quantity`}</label>
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
      </div>
      <Button variant="primary" className="buttonb">
        Book Now
      </Button>{" "}
    </form>
  </div>
);

export default CleaningBox;
