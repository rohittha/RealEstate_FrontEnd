import { React, useState, useEffect } from "react";
import PropertyCard from "../PropertyCard/index";
import styles from "./styles.module.css";
import axios from "axios";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { searchProperties } from "../../redux/features/properties/propertiesSlice";
const apiURL = process.env.REACT_APP_API_URL;

function AdminDashboard() {
  const dispatch = useDispatch();
  const { searchfields } = useSelector((store) => store.props);

  const [formData, setFormData] = useState(searchfields);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
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
      const url = apiURL + "api/properties/getAllProperty";

      const response = await axios.get(url);
      const resdata = response.data;
      console.log("Properties from API += ", resdata);
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
      <div className={styles.cardsContainer}>
        {data.map((item) => (
          <PropertyCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
