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

    listingtype,
    price,
    province,
    zipcode,
    propertyImages,
  } = data;

  return (
    <div className={Styles.propertyCard}>
      {propertyImages.length > 0 && (
        <div>
          <ul>
            {propertyImages.map((filename, index) => (
              <li key={index}>
                <img
                  height={50}
                  width={50}
                  src={`http://localhost:8080/uploads/${filename}`}
                  alt={filename}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
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
