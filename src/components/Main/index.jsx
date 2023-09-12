import AddProperty from "../AddProperty";
import AdminDashboard from "../AdminDashboard";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./styles.module.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      <AdminDashboard></AdminDashboard>
      <Footer />


      {/* <AddProperty /> */}
      {/* <nav className={styles.navbar}>
        <h1>HomeWise</h1>
        <Link to="/addproperty">
          <button className={styles.white_btn}>Add Property</button>
        </Link>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav> */}
    </div>
  );
};

export default Main;
