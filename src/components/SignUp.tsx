import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import boom from "../assets/banner/boom.jpg";
import linkup from "../assets/banner/linkup.jpg";
import multipal from "../assets/banner/multipal.png";

const SignUp = () => {
  const navigate = useNavigate();
    // const banners = [boom, linkup, multipal];
  const [current, setCurrent] = useState(0);



  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // will work now
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % banners.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [banners.length]);

  // ✅ Handle login submit

{/* <div className="banner_images ">
         <img src={boom} alt="Boom" className="w-full h-64 object-cover"/>
        <img src={linkup} alt="Linkup" className="w-full h-64 object-cover"/>
        <img src={multipal} alt="Multipal" className="w-full h-64 object-cover"/>
       
      </div> */}
  return (
    <div className="flex min-h-screen bg-#f2f7ff">
      <div className="w-1/2  relative banner_images">
      <div className="image_banner">
         <img src={boom} alt="Boom" className="w-full h-50 object-cover"/>
      </div>
          <div className="image_banner">
        <img src={linkup} alt="Linkup" className="w-full h-50 object-cover"/>
          </div>
         <div className="image_banner">
        <img src={multipal} alt="Multipal" className="w-full h-50 object-cover"/>

         </div>
       
      </div>

      {/* RIGHT SIDE - Login Form */}
            <div className="right ">
            {/* Yeh container aur card custom.css se styled hain */}
            <div className="login-container">
                <div className="form-box">
                <h1 className="heading_sign">Welcome!!</h1>
                <form className="form"  onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="form-group imput-form">
                    <span className="input_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg></span>

                    <input type="email" placeholder="Email Address" className="input-box " />
                    </div>

                    {/* Password */}
                    <div className="form-group imput-form">
                    <span className="input_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"/></svg></span>

                    <input type="password" placeholder="Password" className="input-box " />
                    </div>

                    {/* Options */}
                    {/* Button */}
                    <button type="submit" className="btn">Log in</button>
                     <button type="submit" className="btn">Become a Dealer</button>
                  
                </form>

             
                </div>
            </div>
            </div>


    </div>
  );
};

export default SignUp;
