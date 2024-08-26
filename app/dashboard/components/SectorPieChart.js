import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import { selectData } from "@/app/redux/slices/dataSlice";
import { getTheme } from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import { selectFilterData } from "@/app/redux/slices/filterDataSlice";

ChartJS.register(ArcElement, Tooltip, Legend);

const SectorPieChart = () => {
  const theme = getTheme();
  const data = useSelector(selectFilterData);
  const sectors = data?.data?.map((item) => item.sector);
  const uniqueSectors = [...new Set(sectors)];
  const sectorCounts = uniqueSectors.map(
    (sector) => sectors.filter((s) => s === sector).length
  );

  const chartData = {
    labels: uniqueSectors,
    datasets: [
      {
        label: "Sector Distribution",
        data: sectorCounts,
        backgroundColor: [
          theme.palette.common.focus,
          theme.palette.common.vibrant,
          theme.palette.common.tertiary,
          theme.palette.common.quaternary,
          theme.palette.common.shadow,
        ],
        borderColor: theme.palette.common.white,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Typography variant="subtitle" sx={{ fontWeight: 600 }}>
        Sectors
      </Typography>
      <Pie data={chartData} />
    </Box>
  );
};

export default SectorPieChart;
