import React from "react";
// import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <>
      <main>
        {/*Heading*/}
        <h1 class="title text-lg text-center">Give It <span>Away</span></h1>
        {/*Heading*/}
        {/*Busket icon*/}
        <div class="busket-icon text-center">
          <img src="./images/busket.png" alt="busket" />
        </div>
        {/*Busket icon*/}

        {/*Sub heading*/}
        <h2 class="sub-title text-center">
          <span class="text-lg">Useless to you ?</span>
          <span class="text-md">Could be a gift for someone</span>
        </h2>
        {/*Sub heading*/}

        {/*CTA button*/}
        <div class="cta big">
          <a href="/category"><button  class="text-center">Give it Away</button></a>
        </div>
        {/*CTA button*/}

        {/*Achivements*/}
        <div class="grid-33 text-center">
          <div class="block">
            <div class="icon">
              <img src="./images/achivements01.png" alt="" />
            </div>
            <div class="description">
              <span>60+</span>
              <span>NGO</span>
              <span>Joined</span>
            </div>
          </div>
          <div class="block">
            <div class="icon">
              <img src="./images/achivements02.png" alt="" />
            </div>
            <div class="description">
              <span>450+</span>
              <span>Package</span>
              <span>Delivered</span>
            </div>
          </div>
          <div class="block">
            <div class="icon">
              <img src="./images/achivements03.png" alt="" />
            </div>
            <div class="description">
              <span>250+</span>
              <span>People</span>
              <span>Connected</span>
            </div>
          </div>
        </div>
        {/*Achivements*/}

      </main>
      <div class="signup text-center">
        Want to join us as NGO ? <a href="https://forms.gle/Ka1zhB89ABRkQhKD8" target="_blank" rel="noopener noreferrer">Sign up</a>
      </div>
    </>
  );
}