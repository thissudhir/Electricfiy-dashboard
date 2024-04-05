import React from "react";

import { Customers } from "./component/Customers";
import { Products } from "./component/Products";
import { Layout } from "./layout/Layout";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import { Income } from "./component/Income";
import VehicleDetails from "./component/VehicleDetails";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/income" element={<Income />} />
            <Route path="/vehicle" element={<VehicleDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
