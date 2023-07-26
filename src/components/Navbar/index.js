import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/features/user/userSlice";
import { useDispatch } from "react-redux";

// function Navbar() {
const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <div>
          <h1>HomeWise</h1>
        </div>
        {/* <Link to="/addproperty">
          <button className={styles.white_btn}>Add Property</button>
        </Link> */}

        <div>
          <Link to="/searchProperty">
            {/* Need to put a small search icon */}
            <a className={styles.white_btn}> Search Property </a>
          </Link>
          <Link to="/admindashboard">
            <a className={styles.white_btn}> Dashboard </a>
          </Link>
          <Link to="/addproperty">
            <a className={styles.white_btn}>Add Property</a>
          </Link>
          <a className={styles.white_btn} onClick={handleLogout}>
            Logout
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
