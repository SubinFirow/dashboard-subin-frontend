import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import { selectData } from "@/app/redux/slices/dataSlice";
import { getTheme } from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import { selectFilterData } from "@/app/redux/slices/filterDataSlice";

ChartJS.register(ArcElement, Tooltip, Legend);

const ValueChart = () => {
  const theme = getTheme();
  const data = useSelector(selectFilterData);
  const pestles = data?.data?.map((item) => item.pestle);
  const uniquePestles = [...new Set(pestles)];
  const pestleCounts = uniquePestles.map(
    (pestle) => pestles.filter((t) => t === pestle).length
  );

  const chartData = {
    labels: uniquePestles,
    datasets: [
      {
        label: "Topic Breakdown",
        data: pestleCounts,
        backgroundColor: [
          theme.palette.common.tertiary,
          theme.palette.common.vibrant,
          theme.palette.common.focus,
          theme.palette.common.quaternary,
          theme.palette.common.secondary,
        ],
        borderColor: theme.palette.common.white,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Typography variant="subtitle" sx={{ fontWeight: 600 }}>
        Pestles
      </Typography>
      <Doughnut data={chartData} />
    </Box>
  );
};

export default ValueChart;
