import * as React from "react";
import ReactDOM from "react-dom";
import { Router } from "./Providers/Router";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <HelmetProvider>
    <Router />
  </HelmetProvider>,
  document.getElementById("root")
);
