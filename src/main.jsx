import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "services",
    element: <Services />,
  },
]);
// Check if the browser supports service workers
if ("serviceWorker" in navigator) {
  // Unregister the old service worker
  navigator.serviceWorker.ready
    .then((registration) => {
      registration.unregister();
    })
    .catch((error) => {
      console.error("Error unregistering service worker:", error);
    });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
