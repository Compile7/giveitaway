// import logo from "./source/logo1.png";
import "./App.css";
import "../src/assets/css/header.css"
import "../src/assets/css/main.css"
// import { Navbar, Nav ,Form,Button} from "react-bootstrap";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import About from "./About"
import UserInfo from "./UserInfo";
import DonationInfo from "./DonationInfo";
import Ngodetails from "./Ngodetails.js";
import Category from "./Category";


function App() {
  return (
    <>
      <div className="App">
        <link rel="shortcut icon" href="/">
        </link>
        <Router>
          {/*Hamburger menu start */}
          {/* <input type="checkbox" id="navcheck"/> */}
          <div className="nav-btn">
            <a href="/about"> <label htmlFor="navcheck">
              <span></span>
              <span></span>
              <span></span>
            </label></a>
          </div>
          {/*Hamburger menu end */}
          {/*Header start */}
          <header className="header">
            <nav className="navbar">
              {/*Logo*/}
              {window.location.pathname === "/" ? "" : <div className="logo">
                <a href="/">Give It <span>Away</span></a>
              </div>
              }
              {/*Logo*/}

              {/*Navigation*/}
              <ul className="nav-menu">

                <li className="nav-item">
                  <a href="/about" className="nav-link">About Us</a>
                </li>

              </ul>
              {/*Navigation*/}
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
            <Route element={<Category />} path="/category"></Route>
          </Routes>
        </Router>

      </div>
      <footer className="text-center">
        &copy;Copyright 2023, <a href="/">Give It <span>Away</span> </a>
      </footer>
    </>

  );
}

export default App;
