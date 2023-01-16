import Navbar from "../components/otherComponents/Navbar";
import TimleLine from "../components/dashboard/TimleLine";
import ChartBrohot from "../components/chart/ChartBrohot";
import ChartPenjualan from "../components/chart/ChartPenjualan";

const index = () => {
  return (
    <div>
      <div className="px-10 py-5">
        <div className="flex justify-center space-x-8">
          <div className="w-[31%] border border-[#E5EAEE] rounded-xl px-[20px] py-[10px]">
            <ChartBrohot />
          </div>
          <div className="w-[31%] border border-[#E5EAEE] rounded-xl px-[20px] py-[10px]">
            <p className="font-['Roboto'] font-bold text-base">
              Lorem Ipsum Header
            </p>
            <p className="font-['Roboto'] font-normal text-xs text-[#B5B5C3]">
              Mi lorem in ultrices.
            </p>
            <div>
              <TimleLine />
            </div>
          </div>
          <div className="w-[31%] border border-[#E5EAEE] rounded-xl px-[10px] py-[10px]">
            <ChartPenjualan />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
