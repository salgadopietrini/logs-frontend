import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./AppProvider";
import Routing from "./components/Routes/Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <Routing />
    </AppProvider>
  </React.StrictMode>
);
