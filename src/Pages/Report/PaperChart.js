import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function PaperChart({ data }) {
  const chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "TỜ",
        backgroundColor: ["#3e95cd"],
        data: data,
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          fontSize: 14, // Adjust the font size here
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "TỔNG LƯỢNG GIẤY ĐÃ IN",
        color: "#1488db",
        font: {
          size: 18,
        },
      },
    },
  };

  const chartMinHeight = window.innerWidth <= 600 ? 300 : undefined;

  return (
    <Bar data={chartData} options={chartOptions} height={chartMinHeight} />
  );
}

export default PaperChart;
