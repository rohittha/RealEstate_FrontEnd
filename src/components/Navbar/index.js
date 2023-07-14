import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// function Navbar() {
const Navbar = () => {
  // const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
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
