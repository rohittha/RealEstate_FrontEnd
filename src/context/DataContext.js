import { createContext, useState, useEffect, React } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { searchProperties } from "../redux/features/properties/propertiesSlice";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { searchfields } = useSelector((store) => store.props);
  const [formData, setFormData] = useState(searchfields);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setFormData({ ...formData, [input.name]: input.value });
    dispatch(searchProperties({ [input.name]: input.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      console.log("In Search properties!");
      console.log("searchfields:", searchfields);
      const url = "http://localhost:8080/api/properties/getProperties";
      // const url =
      // "https://homewise-backend.azurewebsites.net/api/properties/getProperties";
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
    <DataContext.Provider
      value={{
        handleSubmit,
        handleChange,
        formData,
        setFormData,
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
