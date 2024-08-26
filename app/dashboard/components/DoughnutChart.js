import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import { selectData } from "@/app/redux/slices/dataSlice";
import { getTheme } from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import { selectFilterData } from "@/app/redux/slices/filterDataSlice";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const theme = getTheme();
  const data = useSelector(selectFilterData);
  const topics = data?.data?.map((item) => item.topic);
  const uniqueTopics = [...new Set(topics)];
  const topicCounts = uniqueTopics.map(
    (topic) => topics.filter((t) => t === topic).length
  );

  const chartData = {
    labels: uniqueTopics,
    datasets: [
      {
        label: "Topic Breakdown",
        data: topicCounts,
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
        Topics
      </Typography>
      <Doughnut data={chartData} />
    </Box>
  );
};

export default DoughnutChart;
