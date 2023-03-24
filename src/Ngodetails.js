import React, { useState } from "react";

export default function Ngodetails(props) {
  const [liked, setliked] = useState(false);
  const [disliked, setdisliked] = useState(false);

  const onLikeHandler = (i) => {
    if (!disliked) {
      let element = document.getElementById("like" + i).children[0]
      let isSet = JSON.parse(element.getAttribute("data"));
      isSet ? setliked(false) : setliked(true);
      element.setAttribute("stroke", isSet ? "#F7C933" : "#d81400");
      element.setAttribute("fill", isSet ? "none" : "#f7c933");
      element.setAttribute("data", isSet ? "false" : "true");
    }
  }
  const onDislikeHandler = (i) => {
    if (!liked) {
      let element = document.getElementById("dislike" + i).children[0]
      let isSet = JSON.parse(element.getAttribute("data"));
      isSet ? setdisliked(false) : setdisliked(true);
      element.setAttribute("stroke", isSet ? "#d81400" : "#d81400");
      element.setAttribute("fill", isSet ? "none" : "#f7c933");
      element.setAttribute("data", isSet ? "false" : "true");
    }
  }
  let baseUrl = `https://giveitaway-backend.onrender.com`;
  const onEventCall = () => {
    fetch(`${baseUrl}/api/v1/user/AddEventCount?eventName=contacted_ngo`, {
      method: 'POST',
    })
  }
  return (
    <>
      <main className="ngodetail-wrap">
        <div className="container">
          <h1 className="title text-md text-center">Nearest NGO list</h1>
          <div className="page-description text-center border-b pb-24">
            The closest NGOs are listed below based on your filter criteria; you
            can contact them by phone or WhatsApp.
          </div>
          {props.data.length === 0 ? (
            <p className="text-center">No Result Found</p>
          ) : (
            ""
          )}
          {props.data.map((item, i) => {
            var myStringArray = item.contactNumber;
            return (
              <div className="ngo-list " key={i}>
                <div>
                  <div className="about-ngo">
                    <div>
                      <b>NGO Name :</b>
                      <p>{item.ngoName}</p>
                    </div>
                    <div>
                      <b>City :</b>
                      <p>{item.city}</p>
                    </div>
                    <div>
                      <b>Type :</b>
                      <p>{item.category}</p>
                    </div>
                  </div>
                  <div className="ngo-social-media ">
                    <div className="social-links">
                      <ul>
                        {Object.keys(item.location).length > 0 ? (

                          <li>
                            <a href="/">
                              <img src="./images/map-pin.svg" alt="" />
                            </a>
                          </li>
                        ) : null}

                        {Object.keys(item.whatsappNumber).length > 0 ? (
                          <li>
                            <a
                              href={`https://wa.me/${item.whatsappNumber}?text=`}
                            >
                              <img onClick={onEventCall} src="./images/whatsapp.svg" alt="" />
                            </a>
                          </li>
                        ) : null}

                        {myStringArray.map((number, index) => {
                          return (
                            <li key={index}>
                              <a href={`tel:${number}`}>
                                <img onClick={onEventCall} src="./images/phone-call.svg" alt="" />
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="like-dislike">
                      <ul>
                        <li className="like" onClick={(e) => { onLikeHandler(i); }}>

                          <svg id={"like" + i} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path data="false" d="M7 11L11 2C11.7956 2 12.5587 2.31607 13.1213 2.87868C13.6839 3.44129 14 4.20435 14 5V9H19.66C19.9499 8.99672 20.2371 9.0565 20.5016 9.17522C20.7661 9.29393 21.0016 9.46873 21.1919 9.68751C21.3821 9.90629 21.5225 10.1638 21.6033 10.4423C21.6842 10.7207 21.7035 11.0134 21.66 11.3L20.28 20.3C20.2077 20.7769 19.9654 21.2116 19.5979 21.524C19.2304 21.8364 18.7623 22.0055 18.28 22H7M7 11V22M7 11H4C3.46957 11 2.96086 11.2107 2.58579 11.5858C2.21071 11.9609 2 12.4696 2 13V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H7" stroke="#F7C933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>

                        </li>
                        <li className="dislike" onClick={(e) => { onDislikeHandler(i); }}>

                          <svg id={"dislike" + i} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 13L13 22C12.2044 22 11.4413 21.6839 10.8787 21.1213C10.3161 20.5587 10 19.7957 10 19V15H4.34C4.05009 15.0033 3.76294 14.9435 3.49843 14.8248C3.23392 14.7061 2.99839 14.5313 2.80814 14.3125C2.6179 14.0937 2.47749 13.8362 2.39666 13.5578C2.31583 13.2793 2.29649 12.9866 2.34 12.7L3.72 3.7C3.79232 3.2231 4.03457 2.7884 4.40209 2.476C4.76962 2.1636 5.23767 1.99455 5.72 2H17M17 13V2M17 13H19.67C20.236 13.01 20.7859 12.8119 21.2154 12.4432C21.6449 12.0745 21.9241 11.5609 22 11V4C21.9241 3.43906 21.6449 2.9255 21.2154 2.55682C20.7859 2.18814 20.236 1.98999 19.67 2H17" stroke="#D81400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
