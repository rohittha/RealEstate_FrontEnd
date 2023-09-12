import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { loginUser } from "../../redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
const apiURL = process.env.REACT_APP_API_URL;

const Footer = () => {
  return (
    <div className={styles.back}>
      &copy;Homewise - 2023 Team Code Runners
    </div>
  );
};

export default Footer;
