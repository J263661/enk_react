type DashboardProps = {
  className?: string;
};
const networks = [
  { name: "LinkUp", img: "../epay-logo/LinkUp_logo.png", link: "/linkup", bg: "bg-linkup" },
  { name: "Surf", img: "../epay-logo/Surf_logo_usa.png", link: "SurfDashboard.aspx", bg: "bg-lyca" },
  { name: "Rivertel", img: "../epay-logo/rivertel.png", link: "RivertelDashboard.aspx", bg: "bg-totalwire" },
  { name: "Boom", img: "../epay-logo/boom-mobile.png", link: "BoomDashboard.aspx", bg: "bg-boom" },
  { name: "T-Mobile", img: "../epay-logo/t-obile.png", link: "TMODashboard.aspx", bg: "bg-tmobile" },
  { name: "Ultra", img: "../epay-logo/ultra-mobile.png", link: "UltraDashboard.aspx", bg: "bg-ultra" },
  { name: "unidata", img: "../epay-logo/unidata.png", link: "EPayRecharge.aspx?Network=67", bg: "bg-uni" },
  { name: "at&t", img: "../epay-logo/at&t.png", link: "EPayRecharge.aspx?Network=66", bg: "bg-verizon" },
  { name: "varizon", img: "../epay-logo/varizon.png", link: "EmRecharge.aspx?Value=67&VC=VeriZon", bg: "bg-verizon" },
  { name: "h2o-wireless", img: "../epay-logo/h2o-wireless.png", link: "EmRecharge.aspx?Value=15&VC=H2OMOB", bg: "bg-h2o" },
  { name: "boss-rev", img: "../epay-logo/boss-rev.png", link: "EmRecharge.aspx?Value=16&VC=BossMOB", bg: "bg-boss" },
  { name: "genmobile", img: "../epay-logo/genmobile.png", link: "UltraDashboard.aspx", bg: "bg-genmobile" },
  { name: "liberty", img: "../epay-logo/liberty.png", link: "UltraDashboard.aspx", bg: "bg-liberty" },
  { name: "red-pocket", img: "../epay-logo/red-pocket.png", link: "UltraDashboard.aspx", bg: "bg-redpocket" },
  { name: "simple-mobile", img: "../epay-logo/simple-mobile.png", link: "UltraDashboard.aspx", bg: "bg-simple" },
  { name: "safe-link", img: "../epay-logo/safe-link.png", link: "UltraDashboard.aspx", bg: "bg-safelink" },
  { name: "sin-pin", img: "../epay-logo/sin-pin.png", link: "UltraDashboard.aspx", bg: "bg-sinpin" },
  { name: "total-wireless", img: "../epay-logo/total-wireless.png", link: "UltraDashboard.aspx", bg: "bg-totalwire" },
  { name: "telcel", img: "../epay-logo/telcel.png", link: "UltraDashboard.aspx", bg: "bg-telcel" },
  { name: "tracfone", img: "../epay-logo/tracfone.png", link: "UltraDashboard.aspx", bg: "bg-tracfone" },
  { name: "net10", img: "../epay-logo/net10.png", link: "UltraDashboard.aspx", bg: "bg-net10" },
  { name: "go-smart", img: "../epay-logo/go-smart.png", link: "UltraDashboard.aspx", bg: "bg-gosmart" },

];
const Dashboard: React.FC<DashboardProps> = ({ className }) => {
   return (
    
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 ">
      {networks.map((item, i) => (
        <a
          key={i}
          href={item.link}
          className={`flex items-center justify-center
            h-25 
            p-0 m-[8px_0_10px]
            rounded-[5px_0_0_5px] border  border-r-0
            shadow-[12px_12px_23px_#bac0d2,-3px_-4px_23px_#e8f0ff]
            origin-bottom-right transform-gpu
            transition-all duration-200 ease-in-out
            hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[3px_3px_1px_#6e6e6e]
            focus-not-active:translate-x-[5px] focus-not-active:translate-y-[5px]
            focus-not-active:shadow-[0px_0px_10px_#000000]
            focus-not-active:bg-[#e4e4e4] focus-not-active:text-[#dedede]
            ${item.bg}`}  >
          <img src={item.img} alt={item.name} className="object-contain w-30" />
        </a>
      ))}

      {/* Sign-up Button */}
      <div className="butn  w-full flex items-center justify-center text-center">
        <a
        href="#"
        className="bg-[#3c4c54] text-white text-[16px] border-2 border-[#3c4c54] 
          rounded-[10px] font-semibold px-6 py-2 
          transition-all duration-700 ease-in hover:bg-[#2a353a] "
      >
        Click here to Sign up T-Mobile/Ultra Mobile
      </a>
      </div>
      
    </div>
  );
}
export default Dashboard;