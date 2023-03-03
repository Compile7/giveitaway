import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <b className="useless-to-you-container">
        <p className="useless-to-you">Useless to you ?</p>
      </b>
      <h2 className="could-be-a-container">
        <p className="useless-to-you">
          <span>&nbsp;</span>
        </p>
        <p className="could-be-a-gift-for-someone">
          <span>Could be a gift for someone</span>
        </p>
      </h2>
      <h5 className="ngo-joined">
        <p className="useless-to-you">60+</p>
        <p className="useless-to-you">NGO</p>
        <p className="joined">Joined</p>
      </h5>
      <div className="package-delivered-wrapper">
        <b className="package-delivered">450+ Package Delivered</b>
      </div>
      <h5 className="people-connected">
        <p className="useless-to-you">{`250+ `}</p>
        <p className="joined">People Connected</p>
      </h5>
      <Button
        className="home-screen-child"
        variant="outline-primary"
      >{`Give it Away `}</Button>
      <h1 className="give-it-away-container3">
        <span>{`Give It `}</span>
        <span className="away6">Away</span>
      </h1>
      <img className="image-1-icon" alt="" src="../image-1.svg" />
      <h4 className="want-to-join-container1">
        <span className="want-to-join1">{`Want to join us as NGO ? `}</span>
        <span>Sign</span>
        <span className="span7">{` `}</span>
        <span>up</span>
      </h4>
      <div className="home-screen-item" />
      <nav className="home-screen-inner" />
      <img className="menu-icon3" alt="" src="../menu.svg" />
      <img className="icons-and-shape3" alt="" src="../icons-and-shape3.svg" />
      <h6 className="copyright-2023-give-container3">
        <span>{`©Copyright 2023, `}</span>
        <span className="give-it-away3">
          <span>{`Give It `}</span>
          <span className="away7">Away</span>
        </span>
      </h6>
      <img className="image-8-icon" alt="" src="../image-8.svg" />
      <img className="image-9-icon" alt="" src="../image-9@2x.png" />
      <img className="image-10-icon" alt="" src="../image-10.svg" />
    </div>
  );
};

export default HomeScreen;
