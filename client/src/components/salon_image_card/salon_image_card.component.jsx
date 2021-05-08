import React from "react";
import { Card } from "react-bootstrap";

import "./salon_image_card.styles.css";

const SalonImageCard = ({ imagesrc, imagename }) => (
  <div className="salon_outer">
    <Card className="salon_image_card hover-shadow ripple" style={{}}>
      <Card.Img variant="top" src={imagesrc} className="salon_image" />
    </Card>

    <div className="salon_title">{imagename}</div>
  </div>
);

export default SalonImageCard;

