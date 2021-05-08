import React from "react";

import OffersCard from "../offers_card/offers_card.component";

import "./offers_row.styles.css";

import OffersDetails from "../../offers_details";


function createOffersCard(iconn) {
  return(
  <a   href={iconn.link}>
    <OffersCard key={iconn.id} imagesrc={iconn.imgURL} />
    </a>
  )
}

const OffersRow = () => (
  <div>
    <div class="offers_row">
      {OffersDetails.map(createOffersCard)}
    </div>
  </div>
);


export default OffersRow;
