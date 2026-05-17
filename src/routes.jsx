import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Details } from "./pages/Details.jsx"; // Tu nueva página
import { Layout } from "./pages/Layout.jsx"; // El archivo que me acabas de mostrar
import injectContext from "./store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Este es el esqueleto con Navbar y Footer
    children: [
      {
        path: "/",
        element: <Home />, // Lo que se ve al inicio
      },
      {
        path: "/details/:type/:id",
        element: <Details />, // Lo que se ve al darle "Learn More"
      },
      {
        path: "*",
        element: <h1>Not Found!</h1>,
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default injectContext(AppRoutes);