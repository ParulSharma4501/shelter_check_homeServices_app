import React from "react";
import Carousel from "react-elastic-carousel";

import "./image_row.styles.css";

import ApplianceImageCard from "../appliance_image_card/appliance_image_card.component";
import DecorImageCard from "../decor_image_card/decor_image_card.component";
import CleaningImageCard from "../cleaning_image_card/cleaning_image_card.component";
import SalonImageCard from "../salon_image_card/salon_image_card.component";
import ReviewCard from "../review_card/review_card.component";

import ApplianceImageDetails from "../.././appliance_image_details";
import DecorImageDetails from "../.././decor_image_details";
import CleaningImageDetails from "../../cleaning_image_details";
import SalonImageDetails from "../../salon_image_details";
import ReviewDetails from "../../review_details";

function createApplianceCard(image) {
  return (
    <a   href={`/gadgetmainpage/${image.link}`}>
    <ApplianceImageCard
      key={image.id}
      imagesrc={image.imgURL}
      imagename={image.name}
      />
      </a>
  );
}

function createDecorCard(image) {
  return (
    <a   href={`/decormainpage/${image.link}`}>
    <DecorImageCard
      key={image.id}
      imagesrc={image.imgURL}
      imagename={image.name}
    />
    </a>
  );
}

function createCleaningCard(image) {
  return (
    <a href={`/cleaningmainpage/${image.link}`}>
    <CleaningImageCard
      key={image.id}
      imagesrc={image.imgURL}
      imagename={image.name}
    />
    </a>
  );
}

function createSalonCard(image) {
  return (
    <a   href={`/salonmainpage/${image.link}`}>
    <SalonImageCard
      key={image.id}
      imagesrc={image.imgURL}
      imagename={image.name}
    
      />
      </a>
  );
}

function createReviewCard(review) {
  return (
    <ReviewCard
      key={review.id}
      name={review.name}
      imagesrc={review.imgURL}
      twitter={review.twitter}
      theReview={review.review}
    />
  );
}

const ImageRow = ({ mainHeading }) => {
  return (
    <div>
      {mainHeading === "GADGET ASSISTANCE" && (
        <div className="image_row">
          {ApplianceImageDetails.map(createApplianceCard)}
        </div>
      )}
      {mainHeading === "INTERIOR DECORATION" && (
        <div className="image_row">
          {DecorImageDetails.map(createDecorCard)}
        </div>
      )}
      {mainHeading === "CLEANING AND TERMITE CONTROL" && (
        <div className="image_row">
          {CleaningImageDetails.map(createCleaningCard)}
        </div>
      )}
      {mainHeading === "SALON AND SPA" && (
        <div className="image_row">
          {SalonImageDetails.map(createSalonCard)}
        </div>
      )}
      {mainHeading === "CUSTOMER REVIEWS" && (
        <Carousel itemsToShow={3} itemsToScroll={3} className="review_carousel">
          {ReviewDetails.map(createReviewCard)}
        </Carousel>
      )}
    </div>
  );
};

export default ImageRow;
