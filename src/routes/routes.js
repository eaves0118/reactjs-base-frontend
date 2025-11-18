// routes/routes.jsx
import ClientLayout from "@pages/Layouts/ClientLayout/ClientLayout";
import AdminLayout from "@pages/Layouts/AdminLayout/AdminLayout";
import HomePage from "@pages/Client/HomePage/HomePage";
import Dashboard from "@pages/Admin/Dashboard/Dashboard";
import Login from "@pages/Auth/Login/Login";
import Register from "@pages/Auth/Register/Register";
const routes = [
  {
    path: "/",
    layout: ClientLayout,
    children: [
      { path: "", element: HomePage }, // index route
      // thêm các page client khác ở đây
    ],
  },
  {
    path: "/admin",
    layout: AdminLayout,
    children: [
      { path: "", element: Dashboard },
      // thêm các page admin khác ở đây
    ],
  },

  {
    path: "/login",
    layout: null, // auth không cần layout
    children: [{ path: "", element: Login }],
  },
  {
    path: "/register",
    layout: null, // auth không cần layout
    children: [{ path: "", element: Register }],
  },
];

export default routes;
