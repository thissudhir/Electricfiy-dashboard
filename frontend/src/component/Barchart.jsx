import { Container, Typography, Box, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", sales: 100 },
  { month: "Feb", sales: 150 },
  { month: "Mar", sales: 200 },
  { month: "Apr", sales: 80 },
  { month: "May", sales: 120 },
  { month: "Jun", sales: 250 },
  { month: "Jul", sales: 180 },
  { month: "Aug", sales: 220 },
  { month: "Sep", sales: 130 },
  { month: "Oct", sales: 160 },
  { month: "Nov", sales: 190 },
  { month: "Dec", sales: 210 },
];

const selectStyles = {
  "&.MuiSelect-select": {
    border: "none",
  },
};
export const Barchart = () => {
  const [selectedInterval, setSelectedInterval] = useState("quarterly");

  const handleIntervalChange = (event) => {
    setSelectedInterval(event.target.value);
  };
  return (
    <Container
      sx={{
        background: "white",
        borderRadius: "15px",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Typography variant="h5">
          <strong>Overview</strong>
        </Typography>

        <Select
          sx={{
            boxShadow: "none",
            color: "lightgray",
            background: "#FAFBFF",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
          }}
          value={selectedInterval}
          onChange={handleIntervalChange}
          variant="outlined"
          size="small"
          classes={selectStyles}
        >
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="quarterly">Quarterly</MenuItem>
        </Select>
      </Box>
      <Box sx={{ color: "lightgray", paddingLeft: "10px" }}>
        Monthly Earnings
      </Box>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            axisLine={false}
            tickLine={{ stroke: "none" }}
            dataKey="month"
          />
          <Bar
            dataKey="sales"
            fill="#5A32EA"
            barSize={50}
            radius={[15, 15, 15, 15]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};
