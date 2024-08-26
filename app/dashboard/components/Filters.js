import {
  selectFilterData,
  setFilterData,
} from "@/app/redux/slices/filterDataSlice";
import { getFilterData } from "@/app/services/authService";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { countries, sectors, topics } from "../helpers/helper";

export const Filters = () => {
  const [sector, setSector] = useState(null);
  const [country, setCountry] = useState(countries[0]);
  const [topic, setTopic] = useState(null);

  const dispatch = useDispatch();
  const filterData = useSelector(selectFilterData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFilterData(sector, country, topic);
        dispatch(setFilterData(response));
      } catch (error) {
        toast.error(error.message || "Data fetch failed. Please try again.");
      }
    };

    fetchData();
  }, [sector, country, topic]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 1,
      }}
    >
      <Toaster />
      <FormControl fullWidth>
        <InputLabel>Sector</InputLabel>
        <Select
          value={sector}
          label="Sector"
          onChange={(e) => setSector(e.target.value)}
        >
          <MenuItem value={null}>ALL</MenuItem>
          {sectors.map((sector, index) => (
            <MenuItem key={index} value={sector}>
              {sector || "Other"}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Country</InputLabel>
        <Select
          value={country}
          label="Country"
          onChange={(e) => setCountry(e.target.value)}
        >
          {countries.map((country, index) => (
            <MenuItem key={index} value={country}>
              {country || "Other"}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Topic</InputLabel>
        <Select
          value={topic}
          label="Topic"
          onChange={(e) => setTopic(e.target.value)}
        >
          <MenuItem value={null}>ALL</MenuItem>
          {topics.map((topic, index) => (
            <MenuItem key={index} value={topic}>
              {topic || "Other"}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
