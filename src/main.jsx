import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
