import FormLogin from "../../components/login/FormLogin";
import BlipImg from "../../components/login/BlipImg";

const index = () => {
  return (
    <div className="h-screen bg-[#F8F9F9]">
      <div className="flex h-screen items-center justify-center">
        <FormLogin />
        <BlipImg />
      </div>
    </div>
  );
};

export default index;
