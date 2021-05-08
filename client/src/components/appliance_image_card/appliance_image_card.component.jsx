import React from "react";
import { Card } from "react-bootstrap";

import "./appliance_image_card.styles.css";

const ApplianceImageCard = ({ imagesrc, imagename }) => (
  <div className="appliance_outer">
    <Card className="appliance_image_card hover-shadow ripple">
      <Card.Img variant="top" src={imagesrc} className="appliance_image" />
    </Card>

    <div className="appliance_title">{imagename}</div>
  </div>
);

export default ApplianceImageCard;
// "holder.js/100px180"
