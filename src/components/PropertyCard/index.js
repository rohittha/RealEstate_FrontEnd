import React from "react";
import Styles from "./styles.module.css";

function PropertyCard({ data }) {
  const {
    addressline1,
    addressline2,
    baths,
    bedrooms,
    city,
    country,
    coverimage,
    listingtype,
    price,
    province,
    zipcode,
  } = data;

  return (
    <div className={Styles.propertyCard}>
      <img src={coverimage} alt="Property Cover" />
      <h2>{listingtype}</h2>
      <p>{addressline1}</p>
      <p>{addressline2}</p>
      <p>
        {city}, {province}, {zipcode}
      </p>
      <p>{country}</p>
      <p>{bedrooms} Bedrooms</p>
      <p>{baths} Bathrooms</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default PropertyCard;
