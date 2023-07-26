import React from "react";
import Styles from "./styles.module.css";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

const imagesURL = process.env.REACT_APP_IMAGES_URL;

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
  console.log("imagesURL: ", imagesURL);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const [isEditable, setIsEditable] = useState(false);
  const [error, setError] = useState("");
  const [formFields, setFormFields] = useState({
    addressline1: "",
    addressline2: "",
    city: "",
    province: "",
    country: "",
    zipcode: "",
    bedrooms: "",
    baths: "",
    price: "",
    listingtype: "",
  });

  useEffect(() => {
    setFormFields(data);
  }, [data]);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataFields = {
        data: JSON.stringify(formFields),
      };

      const url = apiURL + `api/properties/${data._id}`;

      const response = await axios.put(
        url,
        //        `http://localhost:8080/api/properties/${data._id}`,
        dataFields
      );
      if (response.status === 200) {
        // If the response status is 200 (OK), update the formData state with the updated data
        setFormFields(response.data.updatedData);
        setIsEditable(false);
      } else {
        // If the response status is not 200, display an error message
        alert("Error saving form data.");
      }
    } catch (error) {
      console.error("Error:", error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      {!isEditable ? (
        <div className={Styles.propertyCard}>
          {propertyImages.length > 0 ? (
            <Slider {...settings}>
              {propertyImages.map((filename, index) => (
                <div key={index}>
                  <img
                    height={100}
                    width={100}
                    src={`http://localhost:8080/uploads/${filename}`}
                    alt={filename}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <p>No images found.</p>
          )}

          <h2>{formFields.listingtype}</h2>
          <p>{formFields.addressline1}</p>
          <p>{formFields.addressline2}</p>
          <p>
            {formFields.city}, {formFields.province}, {formFields.zipcode}
          </p>
          <p>{formFields.country}</p>

          <p>{formFields.bedrooms} Bedrooms</p>
          <p>{formFields.baths} Bathrooms</p>
          <p>Price: {formFields.price}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      ) : (
        <div className={Styles.propertyCard}>
          {propertyImages.length > 0 ? (
            <Slider {...settings}>
              {propertyImages.map((filename, index) => (
                <div key={index}>
                  <img
                    height={100}
                    width={100}
                    src={imagesURL + filename}
                    alt={filename}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <p>No images found.</p>
          )}
          <br />
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <label>Address Line 1</label>
            <input
              type="text"
              placeholder="Address Line 1"
              name="addressline1"
              onChange={handleChange}
              value={formFields.addressline1}
              className={styles.input}
            />
            <label>Address Line 2</label>
            <input
              type="text"
              placeholder="Address Line 2"
              name="addressline2"
              onChange={handleChange}
              value={formFields.addressline2}
              required
              className={styles.input}
            />
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              name="city"
              onChange={handleChange}
              value={formFields.city}
              required
              className={styles.input}
            />
            <label>Province</label>
            <input
              type="text"
              placeholder="Province"
              name="province"
              onChange={handleChange}
              value={formFields.province}
              required
              className={styles.input}
            />
            <label>Zipcode</label>
            <input
              type="text"
              placeholder="Zip Code"
              name="zipcode"
              onChange={handleChange}
              value={formFields.zipcode}
              required
              className={styles.input}
            />{" "}
            <label>Country</label>
            <input
              type="text"
              placeholder="Country"
              name="country"
              onChange={handleChange}
              value={formFields.country}
              required
              className={styles.input}
            />
            <label>Bedrooms</label>
            <input
              type="text"
              placeholder="Bedrooms"
              name="bedrooms"
              onChange={handleChange}
              value={formFields.bedrooms}
              required
              className={styles.input}
            />
            <label>Baths</label>
            <input
              type="text"
              placeholder="Baths"
              name="baths"
              onChange={handleChange}
              value={formFields.baths}
              required
              className={styles.input}
            />
            <label>Price</label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              onChange={handleChange}
              value={formFields.price}
              required
              className={styles.input}
            />
            <label>Listing Type</label>
            <input
              type="text"
              placeholder="Listing Type"
              name="listingtype"
              onChange={handleChange}
              value={formFields.listingtype}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PropertyCard;
