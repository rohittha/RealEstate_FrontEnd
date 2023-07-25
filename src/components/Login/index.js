import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { loginUser } from "../../redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
const apiURL = process.env.REACT_APP_API_URL;

const Login = () => {
  const dispatch = useDispatch();
  //const { userToken, userEmail } = useSelector((store) => store.user);
  // useEffect(() => {
  //   dispatch(loginUser({ token: userToken, email: userEmail }));
  // }, [userToken]);

  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //const url = "http://localhost:8080/api/auth";
      console.log("apiURL: ", apiURL);
      //const url = "https://homewise-backend.azurewebsites.net/api/auth";
      const url = apiURL + "api/auth";

      const { data: res } = await axios.post(url, data);
      //localStorage.setItem("token", res.data);
      dispatch(loginUser({ token: res.data }));
      window.location = "/";
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
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
