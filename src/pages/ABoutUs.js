import "./ABoutUs.css";

const ABoutUs = () => {
  return (
    <div className="about-us">
      <img className="icons-and-shape4" alt="" src="../icons-and-shape4.svg" />
      <h2 className="about-us1">ABOUT US</h2>
      <div className="about-us-child" />
      <img className="menu-icon4" alt="" src="../menu.svg" />
      <h2 className="give-it-away-container4">
        <span>{`Give It `}</span>
        <span className="away8">Away</span>
      </h2>
      <div className="menu" />
      <h4 className="we-are-a-container">
        <p className="we-are-a">
          We are a passionate group of individuals committed to creating
          positive change in the world. Join us as we work together to make a
          difference!
        </p>
        <p className="blank-line1">&nbsp;</p>
      </h4>
      <div className="about-us-item" />
      <h6 className="copyright-2023-give-container4">
        <span>{`©Copyright 2023, `}</span>
        <span className="give-it-away4">
          <span>{`Give It `}</span>
          <span className="away9">Away</span>
        </span>
      </h6>
      <h4 className="want-to-highlight-container">
        <span className="want-to-highlight">{`Want to highlight an issue? `}</span>
        <span>Raise</span>
        <span className="away9">{` `}</span>
        <span>it</span>
        <span className="away9">{` `}</span>
      </h4>
      <img
        className="profilepicturemaker-1-1"
        alt=""
        src="../profilepicturemaker-1-1@2x.png"
      />
      <img
        className="profilepicturemaker-1-icon"
        alt=""
        src="../profilepicturemaker-1@2x.png"
      />
      <img
        className="profilepicturemaker-3-icon"
        alt=""
        src="../profilepicturemaker-3@2x.png"
      />
      <img
        className="profilepicturemaker-1-icon1"
        alt=""
        src="../profilepicturemaker-11@2x.png"
      />
    </div>
  );
};

export default ABoutUs;
