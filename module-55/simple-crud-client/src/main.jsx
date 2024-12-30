import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./components/users/users.jsx";
import UpdateUsers from "./components/users/UpdateUsers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    loader: () => fetch("http://localhost:5000/users"),
    element: <Users></Users>,
  },
  {
    path:"/users/update/:id",
    loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`),
    element:<UpdateUsers></UpdateUsers>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
