// components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getTheme } from "@/app/theme/theme";
import { useSelector } from "react-redux";
import { selectData } from "@/app/redux/slices/dataSlice";
import { Box, Typography } from "@mui/material";
import { selectFilterData } from "@/app/redux/slices/filterDataSlice";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const theme = getTheme();
  const data = useSelector(selectFilterData);
  const energyData = data?.data?.filter((item) => item);

  const countries = {};

  energyData?.forEach((item) => {
    const country = item.country || "Other";
    countries[country] = (countries[country] || 0) + 1;
  });

  const chartData = {
    labels: Object.keys(countries),
    datasets: [
      {
        label: "Energy Sector Distribution by Country",
        data: Object.values(countries),
        backgroundColor: [
          theme.palette.common.focus,
          theme.palette.common.vibrant,
          theme.palette.common.tertiary,
          theme.palette.common.quaternary,
          theme.palette.common.shadow,
        ],
        borderColor: [
          theme.palette.common.focus,
          theme.palette.common.vibrant,
          theme.palette.common.tertiary,
          theme.palette.common.quaternary,
          theme.palette.common.shadow,
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        Countries
      </Typography>
      <Pie data={chartData} />
    </Box>
  );
};

export default PieChart;
