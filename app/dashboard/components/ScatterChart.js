import React from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";
import { getTheme } from "@/app/theme/theme";
import { Box } from "@mui/material";
import { selectFilterData } from "@/app/redux/slices/filterDataSlice";

ChartJS.register(LinearScale, Title, Tooltip, Legend);

const ScatterChart = () => {
  const theme = getTheme();
  const data = useSelector(selectFilterData);
  const chartData = {
    datasets: [
      {
        label: "Intensity vs Likelihood",
        data: data?.data?.map((item) => ({
          x: item.intensity,
          y: item.likelihood,
        })),
        backgroundColor: theme.palette.common.focus,
        borderColor: theme.palette.common.focus,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Scatter data={chartData} />
    </Box>
  );
};

export default ScatterChart;
