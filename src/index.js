import React from "react";
import ReactDOM from "react-dom";
import { Chart } from "./components/Charts/Chart";
import { Header } from "./components/Header/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Chart/>
  </React.StrictMode>,
  document.getElementById("root")
);
