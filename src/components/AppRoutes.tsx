import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import LinkupDashboard from "../components/linkup/LinkupDashboard";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
  <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/linkup" element={<LinkupDashboard   />} />
    </Routes>
  );
};

export default AppRoutes;
