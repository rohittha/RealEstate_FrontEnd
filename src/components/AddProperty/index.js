import React from "react";
import styles from "./styles.module.css";
import Navbar from "../Navbar";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddProperty() {
  const [data, setData] = useState({
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
    coverimage: "",
    imagefile: null,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    // setData({ ...data, ["coverimage"]: event.target.files[0] });
    //setData({ ...data, ["imagefile"]: event.target.files[0] });
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Property Submit START!");
    try {
      const formData = new FormData();
      formData.append("imagefile", selectedImage);
      console.log("formData= ", formData);
      //setData({ ...data, ["coverimage"]: selectedImage });
      setData({ ...data, ["imagefile"]: selectedImage });
      console.log("Data image = ", data);

      const url = "http://localhost:8080/api/properties";
      const { data: res } = await axios.post(url, data);

      navigate("/main");
      console.log("Property Submit COMPLETED!", res.message);
    } catch (error) {
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
    <div className={styles.main_container}>
      <Navbar />
      {/* <h1>Hello from Addproperty</h1> */}
      <div className={styles.right}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h1> Add Property </h1>
          <label>Address Line 1</label>
          <input
            type="text"
            placeholder="Address Line 1"
            name="addressline1"
            onChange={handleChange}
            value={data.addressline1}
            className={styles.input}
          />
          <label>Address Line 2</label>
          <input
            type="text"
            placeholder="Address Line 2"
            name="addressline2"
            onChange={handleChange}
            value={data.addressline2}
            required
            className={styles.input}
          />
          <label>City</label>
          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={handleChange}
            value={data.city}
            required
            className={styles.input}
          />
          <label>Province</label>
          <input
            type="text"
            placeholder="Province"
            name="province"
            onChange={handleChange}
            value={data.province}
            required
            className={styles.input}
          />
          <label>Zipcode</label>
          <input
            type="text"
            placeholder="Zip Code"
            name="zipcode"
            onChange={handleChange}
            value={data.zipcode}
            required
            className={styles.input}
          />{" "}
          <label>Country</label>
          <input
            type="text"
            placeholder="Country"
            name="country"
            onChange={handleChange}
            value={data.country}
            required
            className={styles.input}
          />
          <label>Bedrooms</label>
          <input
            type="text"
            placeholder="Bedrooms"
            name="bedrooms"
            onChange={handleChange}
            value={data.bedrooms}
            required
            className={styles.input}
          />
          <label>Baths</label>
          <input
            type="text"
            placeholder="Baths"
            name="baths"
            onChange={handleChange}
            value={data.baths}
            required
            className={styles.input}
          />
          <label>Price</label>
          <input
            type="text"
            placeholder="Price"
            name="price"
            onChange={handleChange}
            value={data.price}
            required
            className={styles.input}
          />
          <label>Listing Type</label>
          <input
            type="text"
            placeholder="Listing Type"
            name="listingtype"
            onChange={handleChange}
            value={data.listingtype}
            required
            className={styles.input}
          />
          <label>Property Image</label>
          <input
            type="file"
            placeholder="Upload Image"
            name="coverimage"
            onChange={handleImageChange}
            //value={data.coverimage}
            required
            className={styles.input}
          />
          {error && <div className={styles.error_msg}>{error}</div>}
          <button type="submit" className={styles.green_btn}>
            Submit Property
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProperty;
