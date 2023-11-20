import { React } from "react";
import styles from "./styles.module.css";
import Navbar from "../Navbar";
import SearchPropertyForm from "../SearchPropertyForm";
import { DataProvider } from "../../context/DataContext";

function SearchProperty() {
  return (
    <div>
      <DataProvider>
        <Navbar />
        <section className={styles.searchFields}>
          <SearchPropertyForm></SearchPropertyForm>
        </section>
      </DataProvider>
    </div>
  );
}

export default SearchProperty;
