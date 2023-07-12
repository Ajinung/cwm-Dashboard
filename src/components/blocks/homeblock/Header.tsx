import Navprop from "../../props/navprop";
import { MdDashboard, MdOutlinePayment, MdManageHistory } from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsReceipt } from "react-icons/bs";

const Header = () => {
  return (
    <div className=" w-[85%] h-[95%] flex items-start flex-col ">
      {/* logo and name */}
      {/* desktop logo view */}
      <div className="flex items-center gap-3  pb-8 max-lg:hidden">
        <div className="py-2 px-3 border border-[#fa8128] text-xl  rounded-full">
          M
        </div>
        {/* name */}
        <p className="text-slate-500">Area name</p>
      </div>
      {/* tablet logo view  */}
      <h1 className="text-2xl font-black hidden max-lg:block">DE</h1>
      {/* navigation */}
      <div className="flex flex-col justify-between h-full">
        {/* first nav */}
        <div>
          <div className="flex flex-col gap-3 items-start">
            <Navprop text="Home" icon={<MdDashboard />} route="" />
            <Navprop text="Payment" icon={<MdOutlinePayment />} route="" />
          </div>
          <br />
          <p className="text-[#6b6a6a] max-lg:hidden">tools</p>
          <br />
          <div className="flex flex-col gap-3 items-start">
            <Navprop text="Bills" icon={<BsReceipt />} route="" />
            <Navprop text="History" icon={<MdManageHistory />} route="" />
          </div>
        </div>
        {/* support nav */}

        <div>
          <div className="flex flex-col gap-3 items-start">
            <Navprop text="support" icon={<BiHeart />} route="" />
            <Navprop text="log out" icon={<RiLogoutCircleLine />} route="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
