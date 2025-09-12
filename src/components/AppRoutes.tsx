import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import LinkupDashboard from "../components/linkup/LinkupDashboard";
import ActivationLedgerReport from "./ActivationLedgerReport";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
  <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/linkup" element={<LinkupDashboard   />} />
      <Route path="/ActivationLedgerReport" element={<ActivationLedgerReport />} />
    </Routes>
  );
};

export default AppRoutes;
