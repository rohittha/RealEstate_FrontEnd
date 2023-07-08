import AddProperty from "../AddProperty";
import Navbar from "../Navbar";
import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  //   const callAddProp = () => {
  //     <AddProperty />;
  //   };

  return (
    <div>
      <Navbar />

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
