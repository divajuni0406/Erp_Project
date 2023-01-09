import { IoIosArrowBack } from "react-icons/io";
import { navClick } from "../../redux/actions/modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import LinkBtn from "../otherComponents/LinkBtn";

const SideBar = () => {
  const navWrapper = useRef(null);
  const dispatch = useDispatch();
  const { isNavClick } = useSelector((store) => store.modal);
  const outsideClick = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          dispatch(navClick(false));
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  outsideClick(navWrapper);
  return (
    <div
      className={`fixed left-0 transition-all duration-500 w-[15%] ${
        isNavClick ? "left-0" : "left-[-200px]"
      } top-0 bg-[#ffff] rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.1)] h-screen flex flex-col text-center`}
      ref={navWrapper}
    >
      <div className="flex justify-center">
        <img src="/assetsImg/blipLogo.png" className="w-[44%]" alt="" />
      </div>
      <div className="flex flex-col text-left space-y-4 mt-5 mx-3">
        <LinkBtn href={"#"}>
          <span className="block font-['Roboto'] font-medium text-[14px] text-[#0E0E0F] hover:bg-[#009EF7] pl-4 pr-6 rounded-md py-2 transition-all duration-500">
            Data All Customer
          </span>
        </LinkBtn>
        <LinkBtn href={"#"}>
          <span className="block font-['Roboto'] font-medium text-[14px] text-[#0E0E0F] hover:bg-[#009EF7] pl-4 pr-6 rounded-md py-2 transition-all duration-500">
            Summary Customer
          </span>
        </LinkBtn>
        <LinkBtn href={"#"}>
          <span className="block font-['Roboto'] font-medium text-[14px] text-[#0E0E0F] hover:bg-[#009EF7] pl-4 pr-6 rounded-md py-2 transition-all duration-500">
            PIC Customer
          </span>
        </LinkBtn>
        <LinkBtn href={"#"}>
          <span className="block font-['Roboto'] font-medium text-[14px] text-[#0E0E0F] hover:bg-[#009EF7] pl-4 pr-6 rounded-md py-2 transition-all duration-500">
            File Approval
          </span>
        </LinkBtn>
        <LinkBtn href={"#"}>
          <span className="block font-['Roboto'] font-medium text-[14px] text-[#0E0E0F] hover:bg-[#009EF7] pl-4 pr-6 rounded-md py-2 transition-all duration-500">
            Change Profile
          </span>
        </LinkBtn>
      </div>
      <div className="absolute bottom-[30px] ml-[-10px] self-center">
        <LinkBtn href={"#"}>
          <div className="flex items-center">
            <span className="block text-[#009EF7]">
              <IoIosArrowBack />
            </span>
            <span className="block font-['Roboto'] font-medium text-[14px] text-[#009EF7]">
              Log Out
            </span>
          </div>
        </LinkBtn>
      </div>
    </div>
  );
};

export default SideBar;
