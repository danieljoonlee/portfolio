import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.scss";

const App = () => (
  <div>
    <h1 className="index">hello world</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));