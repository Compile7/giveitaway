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
              <a href="https://github.com/nehavyas13">
                <img src="./images/neha.png" alt="Neha" />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/krishnaleela567">
                {" "}
                <img src="./images/krishna.png" alt="krishna" />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/Bhupendra9414">
                {" "}
                <img src="./images/bhupendra.png" alt="Bhupendra" />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/abhir9">
                {" "}
                <img src="./images/abhimanyu.png" alt="Abhimanyu" />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/Naman-Agarwal-SE">
                <img src="./images/naman.png" alt="Naman" />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/Kuldeep-Chhipa">
                {" "}
                <img src="./images/kuldeep.png" alt="Kuldeep" />
              </a>
            </div>
          </div>
          {/*profile pictures */}
        </div>
      </main>
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
