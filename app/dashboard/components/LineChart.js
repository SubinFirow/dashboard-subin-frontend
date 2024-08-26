import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";
import { selectData } from "@/app/redux/slices/dataSlice";
import { getTheme } from "@/app/theme/theme";
import { Box } from "@mui/material";
import moment from "moment";
import { selectFilterData } from "@/app/redux/slices/filterDataSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const theme = getTheme();
  const data = useSelector(selectFilterData);
  const chartData = {
    labels: data?.data?.map((item) => moment(item.published).format("DD/MM")),
    datasets: [
      {
        label: "Intensity",
        data: data?.data?.map((item) => item.intensity),
        borderColor: theme.palette.common.focus,
        backgroundColor: theme.palette.common.focus + "80", // semi-transparent
        fill: true,
      },
      {
        label: "Likelihood",
        data: data?.data?.map((item) => item.likelihood),
        borderColor: theme.palette.common.vibrant,
        backgroundColor: theme.palette.common.vibrant + "80", // semi-transparent
        fill: true,
      },
      {
        label: "Relevance",
        data: data?.data?.map((item) => item.relevance),
        borderColor: theme.palette.common.tertiary,
        backgroundColor: theme.palette.common.tertiary + "80", // semi-transparent
        fill: true,
      },
    ],
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Line data={chartData} />
    </Box>
  );
};

export default LineChart;
