import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./DonationCategoryPage.css";

const DonationCategoryPage = () => {
  return (
    <div className="donation-category-page">
      <div className="donation-category-page-child" />
      <div className="donation-category-page-item" />
      <h2 className="choose-your-category">CHOOSE YOUR CATEGORY</h2>
      <h6 className="copyright-2023-give-container2">
        <span>{`©Copyright 2023, `}</span>
        <span className="give-it-away2">
          <span>{`Give It `}</span>
          <span className="away4">Away</span>
        </span>
      </h6>
      <div className="donation-category-page-inner" />
      <img className="menu-icon2" alt="" src="../menu.svg" />
      <b className="give-it-away-container2">
        <span>{`Give It `}</span>
        <span className="away5">Away</span>
      </b>
      <img className="icons-and-shape2" alt="" src="../icons-and-shape2.svg" />
      <Form.Select className="enter-name-button1">
        <option>Select City</option>
        <option value="Select City">Select City</option>
      </Form.Select>
      <Button className="group-button" variant="outline-primary">
        Connect me with nearest NGO
      </Button>
      <input className="polygon-input" type="text" />
      <img className="image-11-icon" alt="" src="../image-11.svg" />
      <img className="image-12-icon" alt="" src="../image-12.svg" />
      <img className="image-14-icon" alt="" src="../image-14.svg" />
      <img className="image-16-icon" alt="" src="../image-16.svg" />
      <img className="image-17-icon" alt="" src="../image-17.svg" />
      <b className="food6">FOOD</b>
      <b className="medicines">MEDICINES</b>
      <b className="clothes">CLOTHES</b>
      <b className="stationary">STATIONARY</b>
      <b className="other">OTHER</b>
    </div>
  );
};

export default DonationCategoryPage;
