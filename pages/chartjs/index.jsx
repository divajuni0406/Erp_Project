import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import customer from "../../customer.json";
import Chart from "chart.js/auto"; //this is a must

const Index = () => {
  const data = {
    labels: ["January", "February", "Maret", "April", "Mei", "Juni", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#009EF7", //line's color
        tension: 0.4, //custom style of the line
        showLine: true, //to show the line
        backgroundColor: "#F1FAFF", //when fill is true we're able to fill the color
        fill: true, //allow to fill the color inside the line
      },
    ],
  };
  const data2 = {
    labels: ["January", "February", "Maret", "April", "Mei", "Juni", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        display: false,
        borderColor: "#097cbe", //line's color
        boxShadow: "0px 4px 4px rgba(126,14,42,0.2)",
        tension: 0.4, //custom style of the line
        showLine: true, //to show the line
        backgroundColor: "#009EF7", //when fill is true we're able to fill the color
        fill: true, //allow to fill the color inside the line
      },
    ],
  };

  return (
    <div className="w-full px-5 py-3">
      <div className="flex space-x-1 justify-center">
        <div className="bg-[#009EF7] rounded-md">
          <p className="text-[#FFFFFF] text-base font-bold my-5 ml-5">
            Sales BROHOT Statistics
          </p>
          <Line
            data={data2}
            options={{
              // the scales is to remove the border, backside of the line
              plugins: {
                legend: {
                  // untuk menghilangkan tabel judul diatas
                  display: false, // untuk menghilangkan tabel judul diatas
                },
              },
              elements: {
                point: {
                  radius: 0, //untuk menghapus point lingkaran chart
                },
              },
              scales: {
                y: {
                  border: {
                    display: false, //menghapus kiri border
                  },
                  ticks: {
                    display: false, //menghapus angka data disamping
                  },
                  grid: {
                    drawBorder: false, // <-- this removes y-axis line grid
                    lineWidth: 0,
                  },
                },
                x: {
                  border: {
                    display: false, //menghapus bawahh border
                  },
                  ticks: {
                    display: false, //menghapus data dibawah
                  },
                  grid: {
                    drawBorder: false,
                    lineWidth: 0, // <-- this removes vertical lines grid between bars
                  },
                },
              },
            }}
          />
        </div>
        <div className="w-[32%] bg-white rounded-md">
          <Line
            data={data}
            options={{
              // the scales is to remove the border, backside of the line
              elements: {
                point: {
                  radius: 0,
                },
              },
              scales: {
                y: {
                  border: {
                    display: false,
                  },
                  grid: {
                    drawBorder: false, // <-- this removes y-axis line
                    lineWidth: 0,
                    borderColor: "transparant",
                  },
                },
                x: {
                  border: {
                    display: false,
                  },
                  grid: {
                    drawBorder: false,
                    lineWidth: 0,
                  },
                },
              },
            }}
            className="w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
