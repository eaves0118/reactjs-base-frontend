import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((r) => {
          const Component = r.element; // lấy component từ routes
          return (
            <Route
              key={r.path}
              path={r.path}
              element={<Component />} // render JSX
            >
              {r.children?.map((c) => {
                const ChildComponent = c.element; // component con
                return <Route key={c.path} path={c.path} element={<ChildComponent />} />;
              })}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
