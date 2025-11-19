import ClientLayout from "@pages/Layouts/ClientLayout/ClientLayout";
import AdminLayout from "@pages/Layouts/AdminLayout/AdminLayout";
import HomePage from "@pages/Client/HomePage/HomePage";
import Dashboard from "@pages/Admin/Dashboard/Dashboard";
import User from "@pages/Admin/User/User";
import Login from "@pages/Auth/Login/Login";
import Register from "@pages/Auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const routes = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [{ path: "", element: <HomePage /> }],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoutes requiredRole="admin">
        <AdminLayout />
      </PrivateRoutes>
    ),
    children: [
      { path: "", element: <Dashboard /> },
      { path: "user", element: <User /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export default routes;
