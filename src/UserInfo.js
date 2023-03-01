import React from "react";
export default function UserInfo(){
    return(
      <>
      <main>
       <h1 class="title text-md text-center">Welcome Abord!</h1>

       <div class="page-description text-center">
           Seems, you are visiting us first time, please share a few information
       </div>
       <div class="text-center image-icon">
           <img src="./images/registration.svg" alt="registration"/>
       </div>

       <div class="form container mt-24">
           <form action="">
               <div class="form-group">
                   <input type="text" placeholder="Enter your name"/>
               </div>
               <div class="form-group">
                   <input type="email" placeholder="Enter your email"/>
               </div>
               <div class="form-group">
                   <input type="number" placeholder="Enter phone"/>
               </div>
               <div class="form-group">
                   <input type="text" placeholder="Enter city"/>
               </div>
           </form>
       </div>
   </main>
   <div class="cta big my-24">
       <button class="text-center">Connect me with nearest NGO</button>
   </div>
   </>
    )
}