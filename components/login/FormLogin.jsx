import { BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Button from "../../components/otherComponents/Button";
import DividerLine from "../otherComponents/DividerLine";

const FormLogin = () => {
  return (
    <>
      <div className="w-5/12 px-[70px]">
        <div className="rounded-2xl bg-[#FFFFFF] shadow-[1px_2px_15px_rgba(172,172,172,0.1)] py-1 px-5">
          <h1 className="text-center mt-5 font-['Roboto'] font-bold text-[30px] leading-[42.19px] text-[#414141]">
            Login
          </h1>
          <div className="mt-10">
            <label className="mb-1 block font-['Roboto'] font-normal text-[12px] text-[#414141]">
              Email
            </label>
            <input
              type="text"
              placeholder="masukkan email"
              className="border w-full p-[6px] bg-[#F3F6F9] rounded-[6px] placeholder:text-[12px] placeholder:font-['Roboto'] placeholder:font-normal placeholder:leading-[19px] placeholder:text-[#B5B5C3]"
            />
            <div className="relative">
              <label className="block font-['Roboto'] font-normal text-[12px] text-[#414141] mt-2 mb-1">
                Password
              </label>
              <input
                type="text"
                placeholder="masukkan password"
                className="border w-full p-[6px] pr-[50px] bg-[#F3F6F9] rounded-[6px] placeholder:font-['Roboto'] placeholder:text-[12px] placeholder:font-normal placeholder:text-[#B5B5C3]"
              />
              <Button className="absolute top-[32px] text-[#C2C9D1] right-4 text-xl">
                <BsFillEyeSlashFill />
              </Button>
            </div>
            <p className="text-end text-[#009EF7] font-['Roboto'] font-normal leading-4 text-[12px] mt-2">
              Lupa password?
            </p>
          </div>
          <div>
            <Button className="p-2 text-center text-[#FBF8FF] font-bold text-[18px] mt-6 w-full rounded-[6px] bg-[#009EF7] font-['Inter']">
              Login
            </Button>
            <div className="flex items-center my-4">
              <DividerLine className="bg-[#B5B5C3] w-[37%] h-[1.1px]"></DividerLine>
              <span className="mx-[10px] text-[#B5B5C3] font-['Roboto'] text-[11px]">
                Or Sign in with
              </span>
              <DividerLine className="bg-[#B5B5C3] w-[37%] h-[1.1px]"></DividerLine>
            </div>
            <div className="flex text-center items-center w-full justify-center border border-[#D0D5DD] rounded-[6px] py-1">
              <span className="mr-4 text-[20px]">
                <FcGoogle />
              </span>
              <p className="font-['Inter'] font-medium text-[12px] leading-6 text-[#344054]">
                Login Dengan Google
              </p>
            </div>
          </div>
          <div className="flex font-['Roboto'] font-normal leading-4 text-[11px] justify-center mt-8 h-14 py-2 items-end">
            <span>Tidak mempunyai akun?</span>
            <span className="text-[#009EF7] ml-2">Request sekarang.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
