import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddProperty from "./components/AddProperty";
import SearchProperty from "./components/SearchProperty";
import AdminDashboard from "./components/AdminDashboard";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const searchState = useSelector((store) => store.properties);
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<AdminDashboard />} />}
      <Route path="/addproperty" exact element={<AddProperty />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/main" exact element={<AdminDashboard />} />
      <Route path="/admindashboard" exact element={<AdminDashboard />} />
      <Route path="/searchProperty" exact element={<SearchProperty />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
