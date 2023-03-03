import React from "react";

export default function Ngodetails(props) {
    
    return (
        <>
            <main>
                <div className="container">
                    <h1 className="title text-md text-center">Nearest NGO list</h1>
                    <div className="page-description text-center border-b pb-24">
                        The closest NGOs are listed below based on your filter criteria; you can contact them by phone or
                        WhatsApp.
                    </div>
                    {props.data.length===0?<p className="text-center">No Result Found</p>:""}
                    {
                        props.data.map((item, i) => {
                            var myStringArray = item.contactNumber;
                            // var arrayLength = myStringArray.length;
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
                                                    <li>
                                                        <a href="/">
                                                            <img src="./images/map-pin.svg" alt="" />
                                                        </a>
                                                    </li>
                                                    {Object.keys(item.whatsappNumber).length > 0 ?

                                                        <li>
                                                            <a href={`https://wa.me/${item.whatsappNumber}?text=`}>
                                                                <img src="./images/whatsapp.svg" alt="" />
                                                            </a>
                                                        </li> : null}

                                                    {myStringArray.map((number, index) => {
                                                        // console.log(index,number);
                                                        return (
                                                            
                                                            <li key={index}>
                                                                <a href={`tel:${number}`}>
                                                                    <img  src="./images/phone-call.svg" alt="" />
                                                                </a>
                                                            </li>
                                                        );

                                                    })}
                                                </ul>
                                            </div>
                                            <div className="like-dislike">
                                                <ul>
                                                    <li className="like">
                                                        <a href="/">
                                                            <img src="./images/thumbs-up.svg" alt="" />
                                                        </a>
                                                    </li>
                                                    <li className="dislike">
                                                        <a href="/">
                                                            <img src="./images/thumbs-down.svg" alt="" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </main>
        </>
    )
}