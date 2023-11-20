import { React, useContext } from "react";
import styles from "./styles.module.css";
import PropertyCard from "../PropertyCard/index";
import DataContext from "../../context/DataContext";

function SearchPropertyForm() {
  const { handleSubmit, handleChange, formData, setFormData, data, setData } =
    useContext(DataContext);

  return (
    <div>
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
          <PropertyCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default SearchPropertyForm;
