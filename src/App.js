// import logo from "./source/logo1.png";
import "./App.css";
// import { Navbar, Nav ,Form,Button} from "react-bootstrap";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import About from "./About"
import UserInfo from "./UserInfo";
import DonationInfo from "./DonationInfo";
import Ngodetails from "./Ngodetails.js";


function App() {
  return (
    <div className="App">
      <link rel="shortcut icon" href="/">
        {/* <img
              alt="NF"
              src={require("./source/logo1.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> */}
      </link>
      <Router>
        {/*Hamburger menu start */}
        <input type="checkbox" id="navcheck"></input>
        <div className="nav-btn">
          <label htmlFor="navcheck">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        {/*Hamburger menu end */}
        {/*Header start */}
        <header className="header">
          <nav className="navbar">
            {/*Logo */}
            <h1>
              <a href="/" className="nav-logo">Give It Away</a>
            </h1>
            {/*Logo */}

            <ul className="nav-menu">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">About Us</a>
              </li>
              <li className="nav-item">
                <a href="/user" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <a href="/donate" className="nav-link">Contact</a>
              </li>
            </ul>

          </nav>
        </header>
        {/*Header start */}
        {/*Backdrop start (for mobile menu only) */}
        <div className="backdrop"></div>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<UserInfo />} path="/user"></Route>
          <Route element={<DonationInfo />} path="/donate"></Route>
          <Route element={<Ngodetails />} path="/ngodetails"></Route>
        </Routes>
      </Router>

    </div>

  );
}

export default App;
