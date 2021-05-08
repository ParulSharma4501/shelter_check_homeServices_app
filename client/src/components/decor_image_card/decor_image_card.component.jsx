import React from "react";
import { Card } from "react-bootstrap";

import "./decor_image_card.styles.css";

const DecorImageCard = ({ imagesrc, imagename }) => (
  <div className="decor_outer">
    <Card className="decor_image_card hover-shadow ripple" style={{}}>
      <Card.Img variant="top" src={imagesrc} className="decor_image" />
    </Card>

    <div className="decor_title">{imagename}</div>
  </div>
);

export default DecorImageCard;
// "holder.js/100px180"
