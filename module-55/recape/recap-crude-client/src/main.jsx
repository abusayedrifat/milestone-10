import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./Users.jsx";
import UpdateUser from "./UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=>fetch('http://localhost:5000/users')
  },
  {
    path:'/users/update/:id',
    loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`),
    element:<UpdateUser></UpdateUser>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
