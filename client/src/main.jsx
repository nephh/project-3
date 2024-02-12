import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error.jsx";
import Create from "./pages/Create.jsx";
import Community from "./pages/Community.jsx";
import Communities from "./pages/Communities.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Endeavor from "./pages/Endeavor.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "home",
        element: <Dashboard />,
      },
      {
        path: "community/:communityUrl",
        element: <Community />,
      },
      {
        path: "community/:communityUrl/:endeavorId",
        element: <Endeavor />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "communities",
        element: <Communities />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
