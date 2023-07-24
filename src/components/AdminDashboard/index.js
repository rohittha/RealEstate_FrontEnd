import { React, useState, useEffect } from "react";
import PropertyCard from "../PropertyCard/index";
import styles from "./styles.module.css";
import axios from "axios";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { searchProperties } from "../../redux/features/properties/propertiesSlice";

function AdminDashboard() {
  const dispatch = useDispatch();
  const { searchfields } = useSelector((store) => store.props);

  const [formData, setFormData] = useState(searchfields);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    // console.log("city", city);
    // console.log("bedrooms", bedrooms);
    // console.log("baths", baths);
    // console.log("price", price);
    // console.log("province", province);
    // const updatedSearchState = {
    //   ...searchState,
    //   [input.name]: input.value,
    // };
    //console.log("updatedSearchState", searchState);
    setFormData({ ...formData, [input.name]: input.value });
    dispatch(searchProperties({ [input.name]: input.value }));
  };
  //pass state parameters to fetchdata to query from MongoDB
  useEffect(() => {
    console.log("Render component");
    fetchData();
  }, []);

  const fetchData = async (e) => {
    try {
      console.log("In Admin dash!");
      //const url = "http://localhost:8080/api/properties/getAllProperty";
      const url =
        "https://homewise-backend.azurewebsites.net/api/properties/getAllProperty";

      const response = await axios.get(url);
      const resdata = response.data;
      console.log("Data from Node+= ", resdata);
      setData(resdata);
      //window.location = "/";
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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      console.log("In Search properties!");
      console.log("searchfields:", searchfields);
      //const url = "http://localhost:8080/api/properties/getProperties";
      const url =
        "https://homewise-backend.azurewebsites.net/api/properties/getProperties";
      const response = await axios.post(url, searchfields);
      const resdata = response.data;
      console.log("Data from Node+= ", resdata);
      setData(resdata);
      //window.location = "/";
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
    <div>
      <Navbar />
      <section className={styles.searchFields}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h1>Search Properties</h1>
          <div className={styles.filterFieldsContainer}>
            <div className={styles.filterField}>
              <label className={styles.label}>City</label>
              <input
                name="city"
                onChange={handleChange}
                value={formData.city}
                className={styles.input}
              ></input>
            </div>
            <div className={styles.filterField}>
              <label className={styles.label}>Bedrooms</label>
              <input
                name="bedrooms"
                onChange={handleChange}
                value={formData.bedrooms}
                className={styles.input}
              ></input>
            </div>
            <div className={styles.filterField}>
              <label className={styles.label}>Bath</label>
              <input
                name="baths"
                onChange={handleChange}
                value={formData.baths}
                className={styles.input}
              ></input>
            </div>
            <div className={styles.filterField}>
              <label className={styles.label}>Price</label>
              <input
                name="price"
                onChange={handleChange}
                value={formData.price}
                className={styles.input}
              ></input>
            </div>
            <div className={styles.filterField}>
              <label className={styles.label}>Province</label>
              <input
                name="province"
                onChange={handleChange}
                value={formData.province}
                className={styles.input}
              ></input>
            </div>
          </div>
          <button type="submit" className={styles.green_btn}>
            Search
          </button>
        </form>
      </section>
      <div className={styles.cardsContainer}>
        {data.map((item) => (
          <PropertyCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
