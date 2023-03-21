import React from "react";

export default function About() {
  return (
    <>
      <main>
        <div className="container">
          {/*Heading */}
          <h1 className="title text-md text-center">About us</h1>
          {/*Heading */}

          {/*description */}
          <div className="page-description text-center">
            We are a passionate group of individuals committed to creating
            positive change in the world. Join us as we work together to make a
            difference!
          </div>
          {/*description */}

          {/*profile pictures */}
          <div className="profile-picture">
            <div className="icon">
              <a href="https://github.com/nehavyas13" target="_blank" rel="noreferrer">
                <img src="https://github.com/nehavyas13.png" alt="Neha" />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/krishnaleela567" target="_blank" rel="noreferrer">
                <img src="https://github.com/krishnaleela567.png" alt="krishna" />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/Bhupendra9414" target="_blank" rel="noreferrer">
                <img src="https://github.com/Bhupendra9414.png" alt="Bhupendra" />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/abhir9" target="_blank" rel="noreferrer">
                <img src="https://github.com/abhir9.png" alt="Abhimanyu" />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/Naman-Agarwal-SE" target="_blank" rel="noreferrer">
                <img src="https://github.com/Naman-Agarwal-SE.png" alt="Naman" />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/Kuldeep-Chhipa" target="_blank" rel="noreferrer">
                <img src="https://github.com/Kuldeep-Chhipa.png" alt="Kuldeep" />
              </a>
            </div>
          </div>
          {/*profile pictures */}
        </div>
      </main>
      {/*CTA button*/}
        <div className="cta big">
          <a href="https://github.com/Compile7/giveitaway/issues/new"><button  className="text-center">Raise Issue</button></a>
        </div>
      {/*CTA button*/}
      <div className="signup text-center">
        Want to join us as NGO ?{" "}
        <a
          href="https://forms.gle/Ka1zhB89ABRkQhKD8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign up
        </a>
      </div>
    </>
  );
}
