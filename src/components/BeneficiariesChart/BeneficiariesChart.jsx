import React from "react";
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
import { Card } from "antd";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BeneficiariesChart = () => {
  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024"], // X-axis years
    datasets: [
      {
        label: "Number of Beneficiaries Over the Years",
        data: [10, 13, 31, 23, 69], // Y-axis values
        backgroundColor: "rgba(33, 150, 243, 0.7)", // Blue color with opacity
        borderColor: "#2196F3", // Solid border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow custom size
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Beneficiaries",
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10, // Controls interval on Y-axis
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <Card
      title="Number of Beneficiaries Over the Years"
      variant="borderless"
      id="beneficiaries-chart"
      styles={{
        body: {
          textAlign: "left",
          width: "auto",
          height: "450px",
          margin: "auto",
        },
        title: {
          textAlign: "left",
        },
        header: {
          background:
            "linear-gradient(114deg, rgb(120, 88, 248) 0%, rgb(88, 165, 254) 100%)",
          color: "#fff",
        },
      }}
    >
      <Bar data={data} options={options} />
    </Card>
  );
};

export default BeneficiariesChart;
