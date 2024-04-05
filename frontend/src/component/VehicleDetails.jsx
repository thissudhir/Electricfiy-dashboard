import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const columns = [
  { field: "detail", headerName: "Detail", flex: 0.5 },
  { field: "value", headerName: "Value", flex: 0.5 },
];

const rows = [
  { id: 1, detail: "License Plate", value: "NGX4CPH" },
  { id: 2, detail: "Make", value: "Tesla" },
  { id: 3, detail: "VIN", value: "KYGKGBXYN5Z184ZKW" },
  { id: 4, detail: "Model", value: "Semi Delivery Event, 2022" },
  { id: 5, detail: "Type", value: "Truck" },
  { id: 6, detail: "Date", value: "2023/04/25" },
  { id: 7, detail: "Miles Driven", value: "199" },
];

const VehicleDetails = () => {
  return (
    <Box style={{ height: 300, width: "100%", maxWidth: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableColumnMenu
        disableSelectionOnClick
      />
    </Box>
  );
};

export default VehicleDetails;
