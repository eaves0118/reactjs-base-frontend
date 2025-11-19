import React from "react";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import { AuthProvider } from "./contexts/AuthProvider";

function AppRoutes() {
  const element = useRoutes(routes); // useRoutes tự động map nested routes
  return element;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
