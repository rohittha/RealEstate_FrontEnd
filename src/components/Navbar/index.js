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
        <h1>HomeWise</h1>
        {/* <Link to="/addproperty">
          <button className={styles.white_btn}>Add Property</button>
        </Link> */}

        <Link to="/main">
          <button className={styles.white_btn}> Dashboard </button>
        </Link>
        <Link to="/addproperty">
          <button className={styles.white_btn}>Add Property</button>
        </Link>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
