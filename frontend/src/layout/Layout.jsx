import { Box, useMediaQuery } from "@mui/material";
import { Navbar } from "../component/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "../component/Sidebar";

export const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar isNonMobile={isNonMobile} drawerwidth="250px" />
      <Box flexGrow={1}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};
