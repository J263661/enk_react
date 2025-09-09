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
         <img src={boom} alt="Boom" className="w-full h-50 object-cover"/>
        <img src={linkup} alt="Linkup" className="w-full h-50 object-cover"/>
        <img src={multipal} alt="Multipal" className="w-full h-50 object-cover"/>
       
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
                    <span className="input_icon">📧</span>

                    <input type="email" placeholder="Email Address" className="input-box " />
                    </div>

                    {/* Password */}
                    <div className="form-group imput-form">
                    <span className="input_icon">🔒</span>

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
