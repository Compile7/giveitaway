import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function UserInfo(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState()
    const [city, setCity] = useState("")
    const navigate = useNavigate();

    const onNameChange = (e)=>{
        setName(e.target.value)
    }
    const onEmailChange = (e)=>{
        setEmail(e.target.value);
    }
    const onPhoneChange = (e)=>{
        setPhone(e.target.value)
    }
    const onCityChange = (e)=>{
        setCity(e.target.value)
    }
    const submitDetails = ()=>{
        let userobj = {
            "fname" : name,
            "email":email,
            "phone":phone,
            "city":city}
        
        localStorage.setItem("userInfo",JSON.stringify(userobj))
        navigate('/category')
    }
    return(
      <>
      <main>
       <h1 className="title text-md text-center">Welcome Abord!</h1>

       <div className="page-description text-center">
           Seems, you are visiting us first time, please share a few information
       </div>
       <div className="text-center image-icon">
           <img src="./images/registration.svg" alt="registration"/>
       </div>

       <div className="form container mt-24">
           <form action="">
               <div className="form-group">
                   <input onChange={(e)=>{onNameChange(e)}} type="text" placeholder="Enter your name"/>
               </div>
               <div className="form-group">
                   <input onChange={(e)=>{onEmailChange(e)}} type="email" placeholder="Enter your email"/>
               </div>
               <div className="form-group">
                   <input  onChange={(e)=>{onPhoneChange(e)}} type="text" placeholder="Enter phone"/>
               </div>
               <div className="form-group">
                   <input  onChange={(e)=>{onCityChange(e)}} type="text" placeholder="Enter city"/>
               </div>
           </form>
       </div>
   </main>
   <div className="cta big my-24">
       <button className="text-center" onClick={submitDetails}>Connect me with nearest NGO</button>
   </div>
   </>
    )
}