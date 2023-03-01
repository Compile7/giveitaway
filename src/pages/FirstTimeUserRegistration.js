import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./FirstTimeUserRegistration.css";

const FirstTimeUserRegistration = () => {
  return (
    <div className="first-time-user-registration">
      <img className="icons-and-shape1" alt="" src="../icons-and-shape1.svg" />
      <Button
        className="first-time-user-registration-child"
        variant="outline-primary"
      >
        Connect me with nearest NGO
      </Button>
      <h2 className="welcome-aboard">{`WELCOME ABOARD! `}</h2>
      <h4 className="seems-you-are">{`Seems, you are visiting us first time, please share a few information `}</h4>
      <Form.Group className="wrapper">
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="container">
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="frame">
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="enter-name-button">
        <Form.Control type="text" placeholder="Enter City" />
      </Form.Group>
      <img
        className="undraw-mobile-login-re-9ntv-1-icon"
        alt=""
        src="../undraw-mobile-login-re-9ntv-1.svg"
      />
      <div className="first-time-user-registration-item" />
      <img className="menu-icon1" alt="" src="../menu.svg" />
      <h2 className="give-it-away-container1">
        <span>{`Give It `}</span>
        <span className="away2">Away</span>
      </h2>
      <div className="first-time-user-registration-inner" />
      <h6 className="copyright-2023-give-container1">
        <span>{`©Copyright 2023, `}</span>
        <span className="give-it-away1">
          <span>{`Give It `}</span>
          <span className="away3">Away</span>
        </span>
      </h6>
    </div>
  );
};

export default FirstTimeUserRegistration;
