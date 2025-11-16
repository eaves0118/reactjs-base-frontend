// routes/routes.jsx
import ClientLayout from "@pages/Layouts/ClientLayout/ClientLayout";
import AdminLayout from "@pages/Layouts/AdminLayout/AdminLayout";
import HomePage from "@pages/Client/HomePage/HomePage";
import Dashboard from "@pages/Admin/Dashboard/Dashboard";
import AuthForm from "@pages/Admin/AuthForm/AuthForm";

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
    path: "/admin/auth",
    layout: AdminLayout, // auth không cần layout
    children: [{ path: "", element: AuthForm }],
  },
];

export default routes;
