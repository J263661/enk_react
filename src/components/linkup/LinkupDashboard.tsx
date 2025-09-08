import React, { useEffect, useState } from "react";

const LinkupDashboard =  () => {


  const Images = [
     "Image/link%20up%20banner%202.jpg",
    "Image/link%20up%20banner.jpg",
    "Image/link%20up%20dahsboered%20update%20%204.jpg",
    "Image/WhatsApp%20Image%202025-07-24%20at%2021.16.38_9f6a6b88.jpg",
    "Image/lg_8DD5CBBCBE45CF0.jpg",
  ]; 

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 3000);
    return () => clearInterval(interval);
}, [Images.length]);


 // Dashboard buttons

const buttons = [

  { label: "Activation", link: "LinkupSimActivation" },
  { label: "Activation Report", link: "LinkupActivationReport" },
  { label: "Recharge", link: "LinkUpRecharge" },
  { label: "Recharge Report", link: "LinkupRechargeReport" },
  { label: "Sim Order", link: "LinkUpOrderSim" },
  { label: "Sim Order Report", link: "LinkUpSIMOrderReport" },
  { label: "Check Plan", link: "LinkUpCheckStatus" },
  { label: "Check Port-In Status", link: "LinkUpCheckPortInStatus" },
  { label: "Check Eligibility", link: "LinkUpCheckEligibility" },
]


  return (
    <>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
      {buttons.map((btn, i) =>(
        <a key={i} href={btn.link}>
          <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            {btn.label}
          </button>
        </a>
      ))}
    </div>
    <div className="relative w-full  mx-auto overflow-hidden rounded-xl shadow-lg mb-6">
      <img
        src={Images[currentImageIndex]}
        alt={`slide-${currentImageIndex}`}
        className="w-full h-[260px] object-cover transition-all duration-700"
      />
        {/* Prev Button */}
      <button
        onClick={() =>
          setCurrentImageIndex((prev) => (prev - 1 + Images.length) % Images.length)
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"> ❮ </button>
        {/* Next Button */}
      <button
       onClick={() => setCurrentImageIndex((prev) => (prev + 1) % Images.length)} 
       className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"> ❯ </button>

       <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {Images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transaition ${index === currentImageIndex ? "bg-white" : "bg-gray-400"}`}
            />
        ))}
        </div>
    </div>


    <div className="bg-gray-100 p-4  rounded-lg shadow">
      <h5 className="text-lg font-semibold mb-3">Note -</h5>
      <ul className="space-y-2 text-gray-700">
        <li>👉 All Sales are Final &amp; non-refundable.</li>
        <li>👉 Link Up Mobile Customer Service:{" "}<a
              href="#"
              className="text-blue-600 hover:underline"> +1 (904)-596-0304 &amp; support@linkupmobile.com
            </a></li>
        <li> 👉 $30 Plan and up includes 100+ Unlimited Talk &amp; Text Country
            List.{" "}
            <a
              href="Format/linkup_ILD_offering.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Click Here
            </a></li>
        <li>👉 Special Plans $45 &amp; $55 include 8GB Roaming in Canada &amp;
            Mexico. Available only via POS.</li>
            <li> 👉 Internet APN Settings.{" "}
            <a
              href="Format/LinkupAPNSettings.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Click Here
            </a>
            </li>
      </ul>
    </div> 
     </>
  );
};
   
export default LinkupDashboard;