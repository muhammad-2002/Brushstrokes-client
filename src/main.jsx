import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Import AOS library
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS file

// Initialize AOS
AOS.init();

import { HelmetProvider } from "react-helmet-async";
import Provider from "./Provider/Provider";
import "./index.css";
import router from "./routes/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
