import SideBar from "../components/dashboard/SideBar";
import Button from "../components/otherComponents/Button";
import { IoReorderThreeSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { navClick } from "../redux/actions/modal";
import Link from "next/link";

const index = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(navClick(true));
  };
  return (
    <div>
      <SideBar />
      <div className="flex w-full h-14 border border-[#E5EAEE]">
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
          <div className="flex w-[50%]">
            <Button className="bg-[#F3F6F9] pl-2 pr-5 rounded-tl-md rounded-bl-md">
              <FiSearch className="text-[#B5B5C3]" />
            </Button>
            <input
              placeholder="Cari"
              type="text"
              className="w-full py-[3px] rounded-tr-md rounded-br-md bg-[#F3F6F9] outline-none placeholder:text-['Roboto'] placeholder:text-base font-normal"
            />
          </div>
          <Button className="py-[4px] font-['Roboto'] font-normal text-[14px] text-[#FFFFFF] mt-[5px] ml-3 px-[25px] rounded-md bg-[#009EF7] text-center">
            Button
          </Button>
        </div>
        <div className="flex items-center w-[30%] justify-end">
          <div className="w-8 h-8 bg-[#F3F6F9] rounded-md"></div>
          <div className="w-8 h-8 bg-[#F3F6F9] rounded-md ml-3 mr-2"></div>
          <div className="w-8 h-8 bg-[#F3F6F9] rounded-md"></div>
          <div className="w-8 h-8 bg-[url('/assetsImg/navProfile.png')] bg-cover rounded-md ml-3 mr-14"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
