import "./App.css";
import "../src/assets/css/header.css"
import "../src/assets/css/main.css"
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

          <div className="nav-btn">
            <a href="/about">
              <img src="./images/info.png" alt="" height="25" width="25" />
            </a>
          </div>
          {/*Header start */}
          <header className="header">
            <nav className="navbar">

              {window.location.pathname === "/" ? "" : <div className="logo">
                <a href="/">Give It <span>Away</span></a>
              </div>
              }

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
