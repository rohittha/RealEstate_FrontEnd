import { React, useState, useEffect } from "react";
import PropertyCard from "../PropertyCard/index";
import styles from "./styles.module.css";
import axios from "axios";
import Navbar from "../Navbar";

function AdminDashboard() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    try {
      console.log("In Admin dash!");
      const url = "http://localhost:8080/api/properties/getAllProperty";
      const response = await axios.get(url);
      const resdata = response.data;
      console.log("Data from Node+= ", resdata);
      setData(resdata);
      //localStorage.setItem("token", res.data);
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
      <div className={styles.cardsContainer}>
        {data.map((item) => (
          <PropertyCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
