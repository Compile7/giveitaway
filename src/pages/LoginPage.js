import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onWantToJoinClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="login-page">
      <img className="icons-and-shape" alt="" src="../icons-and-shape.svg" />
      <h2 className="nearest-ngo-list">NEAREST NGO LIST</h2>
      <div className="login-page-child" />
      <img className="menu-icon" alt="" src="../menu.svg" />
      <h2 className="give-it-away-container">
        <span>{`Give It `}</span>
        <span className="away">Away</span>
      </h2>
      <h4 className="the-closest-ngos">
        The closest NGOs are listed below based on your filter criteria; you can
        contact them by phone or WhatsApp.
      </h4>
      <h4 className="want-to-join-container" onClick={onWantToJoinClick}>
        <span className="want-to-join">{`Want to join us as NGO ? `}</span>
        <span>Sign</span>
        <span className="span">{` `}</span>
        <span>up</span>
      </h4>
      <div className="login-page-item" />
      <h6 className="copyright-2023-give-container">
        <span>{`©Copyright 2023, `}</span>
        <span className="give-it-away">
          <span>{`Give It `}</span>
          <span className="away1">Away</span>
        </span>
      </h6>
      <div className="login-page-inner" />
      <div className="rectangle-div" />
      <div className="ngo-name-container">
        <span className="ngo-name">{`NGO Name `}</span>
        <span className="cry-child-rights">: CRY (Child Rights and You)</span>
      </div>
      <div className="ngo-id-container">
        <span className="ngo-name">{`NGO ID `}</span>
        <span className="cry-child-rights">: 3617867</span>
      </div>
      <div className="type-food-container">
        <span className="ngo-name">{`Type `}</span>
        <span className="cry-child-rights">: Food</span>
      </div>
      <img className="group-icon" alt="" src="../group-44.svg" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <img className="phone-call-icon" alt="" src="../phonecall.svg" />
      </div>
      <div className="rectangle-group">
        <div className="group-child" />
        <img className="phone-call-icon" alt="" src="../phonecall1.svg" />
      </div>
      <div className="rectangle-container">
        <div className="group-child" />
        <img className="phone-call-icon" alt="" src="../phonecall2.svg" />
      </div>
      <div className="group-div">
        <div className="group-child" />
        <img className="phone-call-icon" alt="" src="../logowhatsapp.svg" />
      </div>
      <div className="login-page-inner" />
      <p className="ngo-name-container1">
        <span className="ngo-name">{`NGO Name `}</span>
        <span className="cry-child-rights">: CRY (Child Rights and You)</span>
      </p>
      <p className="ngo-id-container1">
        <span className="ngo-name">{`NGO ID `}</span>
        <span className="cry-child-rights">: 3617867</span>
      </p>
      <p className="type-food-container1">
        <span className="ngo-name">{`Type `}</span>
        <span className="cry-child-rights">: Food</span>
      </p>
      <img className="login-page-child2" alt="" src="../group-47@2x.png" />
      <img className="rectangle-parent" alt="" src="../group-48.svg" />
      <div className="rectangle-group">
        <div className="group-child" />
        <img className="phone-call-icon" alt="" src="../phonecall3.svg" />
      </div>
      <div className="rectangle-container">
        <div className="group-child" />
        <img className="phone-call-icon" alt="" src="../phonecall4.svg" />
      </div>
      <img className="group-div" alt="" src="../group-51.svg" />
      <div className="login-page-child5" />
      <div className="ngo-name-container2">
        <span className="ngo-name">{`NGO Name `}</span>
        <span className="cry-child-rights">: CRY (Child Rights and You)</span>
      </div>
      <div className="ngo-id-container2">
        <span className="ngo-name">{`NGO ID `}</span>
        <span className="cry-child-rights">: 3617867</span>
      </div>
      <div className="type-food-container2">
        <span className="ngo-name">{`Type `}</span>
        <span className="cry-child-rights">: Food</span>
      </div>
      <img className="login-page-child6" alt="" src="../group-62.svg" />
      <div className="rectangle-parent3">
        <div className="group-child" />
        <img className="phone-call-icon" alt="" src="../phonecall5.svg" />
      </div>
      <div className="rectangle-parent4">
        <div className="group-child" />
        <img className="phone-call-icon" alt="" src="../phonecall6.svg" />
      </div>
      <div className="rectangle-parent5">
        <div className="group-child" />
        <img className="phone-call-icon" alt="" src="../phonecall7.svg" />
      </div>
      <div className="login-page-child5" />
      <div className="ngo-name-container2">
        <span className="ngo-name">{`NGO Name `}</span>
        <span className="cry-child-rights">: CRY (Child Rights and You)</span>
      </div>
      <div className="ngo-id-container2">
        <span className="ngo-name">{`NGO ID `}</span>
        <span className="cry-child-rights">: 3617867</span>
      </div>
      <div className="type-food-container2">
        <span className="ngo-name">{`Type `}</span>
        <span className="cry-child-rights">: Food</span>
      </div>
      <img className="login-page-child8" alt="" src="../group-67.svg" />
      <img className="rectangle-parent3" alt="" src="../group-68.svg" />
      <img className="rectangle-parent4" alt="" src="../group-69.svg" />
      <img className="rectangle-parent5" alt="" src="../group-70.svg" />
      <div className="login-page-child12" />
      <div className="ngo-name-container4">
        <span className="ngo-name">{`NGO Name `}</span>
        <span className="cry-child-rights">: CRY (Child Rights and You)</span>
      </div>
      <div className="ngo-id-container4">
        <span className="ngo-name">{`NGO ID `}</span>
        <span className="cry-child-rights">: 3617867</span>
      </div>
      <div className="type-food-container4">
        <span className="ngo-name">{`Type `}</span>
        <span className="cry-child-rights">: Food</span>
      </div>
      <img className="login-page-child13" alt="" src="../group-52.svg" />
      <div className="rectangle-parent6">
        <div className="group-child" />
        <img className="phone-call-icon" alt="" src="../phonecall8.svg" />
      </div>
      <div className="rectangle-parent7">
        <div className="group-child" />
        <img className="phone-call-icon" alt="" src="../logowhatsapp.svg" />
      </div>
      <div className="login-page-child12" />
      <p className="ngo-name-container5">
        <span className="ngo-name">{`NGO Name `}</span>
        <span className="cry-child-rights">: CRY (Child Rights and You)</span>
      </p>
      <p className="ngo-id-container5">
        <span className="ngo-name">{`NGO ID `}</span>
        <span className="cry-child-rights">: 3617867</span>
      </p>
      <p className="type-food-container5">
        <span className="ngo-name">{`Type `}</span>
        <span className="cry-child-rights">: Food</span>
      </p>
      <img className="login-page-child15" alt="" src="../group-57.svg" />
      <img className="rectangle-parent6" alt="" src="../group-58.svg" />
      <img className="rectangle-parent7" alt="" src="../group-51.svg" />
      <img className="icon-thumb-down" alt="" src="../-icon-thumb-down.svg" />
      <img className="icon-thumb-down" alt="" src="../-icon-thumb-down.svg" />
      <img className="icon-thumb-down2" alt="" src="../-icon-thumb-down.svg" />
      <img className="icon-thumb-down3" alt="" src="../-icon-thumb-down.svg" />
    </div>
  );
};

export default LoginPage;
