import { Line } from "react-chartjs-2";
import customer from "../../customer.json";
import Chart from "chart.js/auto"; //this is a must

const ChartPenjualan = () => {
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
  return (
    <div className="bg-white rounded-md">
      <Line
        data={data}
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
              radius: 0,
            },
          },
          scales: {
            y: {
              border: {
                display: false,
              },
              ticks: {
                display: false, //menghapus data dibawah
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
              ticks: {
                display: false, //menghapus data dibawah
              },
              grid: {
                drawBorder: false,
                lineWidth: 0,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ChartPenjualan;
