// components/InsightBarChart.js
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

const InsightBarChart = () => {
  const theme = getTheme();
  const data = useSelector(selectFilterData);
  const insights = data?.data?.map((item) => item.insight);
  const uniqueInsights = [...new Set(insights)];

  const insightLabels = data?.data?.map((item) => {
    const words = item.insight.split(" ");
    return words.slice(1, 3).join(" ");
  });

  const uniqueInsightLabels = [...new Set(insightLabels)];

  const chartData = {
    labels: uniqueInsightLabels,
    datasets: [
      {
        label: "Insight Comparison",
        data: uniqueInsights.map((insight) => {
          const dataPoints = data?.data?.filter(
            (item) => item.insight === insight
          );
          return (
            dataPoints.reduce((sum, point) => sum + point.intensity, 0) /
            dataPoints.length
          );
        }),
        backgroundColor: theme.palette.common.focus,
        borderColor: theme.palette.common.focus,
        borderWidth: 1,
        barThickness: 20, // Set the bar thickness
        maxBarThickness: 30,
      },
    ],
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Bar data={chartData} />
    </Box>
  );
};

export default InsightBarChart;
