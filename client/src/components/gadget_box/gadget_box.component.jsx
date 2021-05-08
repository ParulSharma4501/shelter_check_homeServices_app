import React from "react";

import { Button } from "react-bootstrap";
import brandlogo from "../../assets/sc.png";

import "./gadget_box.styles.css";

const GadgetBox = ({ typ }) => (
  <div className="GadgetBox">
    <form>
      <br></br>
      <img src={brandlogo} height="150" width="220" alt=""></img>
      <h1 className="headinggg">{typ}</h1>
      <div className="content">
        <label for="gender">Choose a type:</label>
        <br></br>
        <select name="type" id="type" className="input">
          <option value="Servicing">Servicing</option>
          <option value="Repair">Repair</option>
          <option value="Installation">Installation</option>
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

        <label for="des">Mention your problem/description</label>
        <br></br>
        <input type="text" className="input"></input>

        <br></br>
        <br></br>
        <br></br>
      </div>
      <Button variant="primary" className="buttong">
        Book Now
      </Button>{" "}
    </form>
  </div>
);

export default GadgetBox;
