import React, { useState, useEffect } from "react";

export default function Ngodetails() {
    const [data, setData] = useState([]);
    useEffect(() => {
        let url = "https://giveitaway-backend.onrender.com/api/v1/user/getngolist?page=0&pageSize=10";
        fetch(url).then((response) => {
            response.json().then((result) => {
                console.warn("result", result.Result);
                setData(result.Result)
            })
        })
    }, [])
    return (
        <>
            <main>
                <div class="container">
                    <h1 class="title text-md text-center">Nearest NGO list</h1>
                    <div class="page-description text-center border-b pb-24">
                        The closest NGOs are listed below based on your filter criteria; you can contact them by phone or
                        WhatsApp.
                    </div>

                    {
                        data.map((item) => {
                            var myStringArray = item.contactNumber;
                            // var arrayLength = myStringArray.length;
                            return (
                                <div class="ngo-list ">
                                    <div>
                                        <div class="about-ngo">
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
                                                <p>Food</p>
                                            </div>
                                        </div>
                                        <div class="ngo-social-media ">
                                            <div class="social-links">
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
                                            <div class="like-dislike">
                                                <ul>
                                                    <li class="like">
                                                        <a href="/">
                                                            <img src="./images/thumbs-up.svg" alt="" />
                                                        </a>
                                                    </li>
                                                    <li class="dislike">
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