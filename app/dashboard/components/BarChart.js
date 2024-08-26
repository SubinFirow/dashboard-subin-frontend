// components/BarChart.js
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
import { useSelector } from "react-redux";
import { selectData } from "@/app/redux/slices/dataSlice";
import { getTheme } from "@/app/theme/theme";
import { Box } from "@mui/material";
import { selectFilterData } from "@/app/redux/slices/filterDataSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const theme = getTheme();
  const data = useSelector(selectFilterData);
  const chartData = {
    labels: [...new Set(data?.data?.map((item) => item.topic))],
    datasets: [
      {
        label: "Intensity",
        data: data?.data?.map((item) => item.intensity),
        backgroundColor: theme.palette.common.focus,
        borderColor: theme.palette.common.focus,
        borderWidth: 1,
      },
      {
        label: "Likelihood",
        data: data?.data?.map((item) => item.likelihood),
        backgroundColor: theme.palette.common.vibrant,
        borderColor: theme.palette.common.vibrant,
        borderWidth: 1,
      },
      {
        label: "Relevance",
        data: data?.data?.map((item) => item.relevance),
        backgroundColor: theme.palette.common.tertiary,
        borderColor: theme.palette.common.tertiary,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Bar data={chartData} />
    </Box>
  );
};

export default BarChart;
