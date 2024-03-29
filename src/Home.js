import React, { useState, useEffect } from "react";


export default function Home() {
  const [data, setData] = useState([]);
  const [ngoCount, setNgoCount] = useState([]);
  useEffect(() => {
    let baseUrl1 = `https://giveitaway-backend.onrender.com`;
    fetch(`${baseUrl1}/api/v1/user/basicInfo`).then((response) => {
      response.json().then((result) => {
        setData(result.Result.eventData)
        setNgoCount(result.Result.ngoCount)
      });
    });
  }, []);
  let baseUrl = `https://giveitaway-backend.onrender.com`;
  const onEventCall = () => {
    fetch(`${baseUrl}/api/v1/user/AddEventCount?eventName=click_donate_now`, {
      method: 'POST',
    })
  }
  return (
    <>
      <main>
        {/*Heading*/}
        <h1 className="title text-lg text-center">Give It <span>Away</span></h1>
        {/*Heading*/}
        {/*Busket icon*/}
        <div className="busket-icon text-center">
          <img src="./images/busket.png" alt="busket" />
        </div>
        {/*Busket icon*/}

        {/*Sub heading*/}
        <h2 className="sub-title text-center">
          <span className="text-lg">Useless to you ?</span>
          <span className="text-md">Could be a gift for someone</span>
        </h2>
        {/*Sub heading*/}

        {/*CTA button*/}
        <div className="cta big">
          <a href="/category"><button onClick={onEventCall} className="text-center">Give it Away</button></a>
        </div>
        {/*CTA button*/}

        {/*Achivements*/}
        <div className="grid-33 text-center">
          <div className="block">
            <div className="icon">
              <img src="./images/achivements01.png" alt="" />
            </div>
            <div className="description">
            {data && !!data.length && <span>{ngoCount}</span>}
              <span>NGO</span>
              <span>Joined</span>
            </div>
          </div>

          <div className="block">
            <div className="icon">
              <img src="./images/achivements02.png" alt="" />
            </div>
            <div className="description">
            {data && !!data.length && data.map((event, index) => (
              <span>{event.eventName === "contacted_ngo" ? event.count:"" }</span>
              )
              )}
              <span>Package</span>
              <span>Delivered</span>
            </div>
          </div>
          <div className="block">
            <div className="icon">
              <img src="./images/achivements03.png" alt="" />
            </div>
            <div className="description">
            {data && !!data.length && data.map((event, index) => (
              <span>{event.eventName === "submit_user_info" ? event.count:"" }</span>
              )
              )}
              <span>People</span>
              <span>Connected</span>
            </div>
          </div>
        </div>
        {/*Achivements*/}

      </main>
      <div className="signup text-center">
        Want to join us as NGO ? <a href="https://forms.gle/Ka1zhB89ABRkQhKD8" target="_blank" rel="noopener noreferrer">Sign up</a>
      </div>
    </>
  );
}