"use client";
import React from "react";
import { Box, Paper, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Datatable from "./components/dataTable";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import SectorPieChart from "./components/SectorPieChart";
import DoughnutChart from "./components/DoughnutChart";
import ScatterChart from "./components/ScatterChart";
import InsightBarChart from "./components/InsightChart";
import { Filters } from "./components/Filters";
import ValueChart from "./components/ValueChart";

export default function Dashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.common.shadow,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.common.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={12}>
          <Item>
            <Filters />
          </Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item>
            <DoughnutChart />
          </Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item>
            <PieChart />
          </Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item>
            <SectorPieChart />
          </Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item>
            <ValueChart />
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
          <Item>
            <LineChart />
          </Item>
        </Grid>

        <Grid xs={12} md={6}>
          <Item>
            <BarChart />
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
          <Item>
            <ScatterChart />
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
          <Item>
            <InsightBarChart />
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
            <Datatable />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
