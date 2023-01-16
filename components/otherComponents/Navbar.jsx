import React from "react";
import SideBar from "./SideBar";
import Button from "./Button";
import { FiSearch } from "react-icons/fi";
import { IoReorderThreeSharp } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { navClick } from "../../redux/actions/modal";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(navClick(true));
  };
  return (
    <>
      <SideBar />
      <div className="flex w-full h-[45px] border border-[#E5EAEE]">
        <div className="flex items-center pl-4 w-[70%]">
          <Button>
            <IoReorderThreeSharp className="text-3xl" onClick={handleClick} />
          </Button>
          <Link href={"/"}>
            <img
              src="/assetsImg/BLIPTopNav.png"
              className="w-[70%] ml-5 mr-1"
              alt="BLIPLogo"
            />
          </Link>
        </div>
        <div className="flex items-center w-[30%] justify-end">
          <div className="w-8 h-8 bg-[#F3F6F9] rounded-md flex items-center justify-center">
            <FiSearch className="text-[#B5B5C3] text-lg" />
          </div>
          <div className="w-8 h-8 bg-[#F3F6F9] flex items-center justify-center rounded-md ml-3 mr-2">
            <RiCalendar2Fill className="text-[#B5B5C3] text-lg" />
          </div>
          <div className="w-8 h-8 bg-[#F3F6F9] rounded-md flex items-center justify-center relative">
            <div className="bg-[red] rounded-full w-[6px] h-[6px] absolute top-[8px] right-[8px]"></div>
            <MdNotificationsNone className="text-[#B5B5C3] text-[20px]" />
          </div>
          <div className="w-8 h-8 bg-[url('/assetsImg/navProfile.png')] bg-cover rounded-md ml-3 mr-14"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
