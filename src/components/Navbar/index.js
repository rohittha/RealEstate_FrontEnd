import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

// function Navbar() {
const Navbar = () => {
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
          <Link to="/main">
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
