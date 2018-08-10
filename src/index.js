import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PostBox from "./PostBox";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<PostBox />, document.getElementById("root"));
registerServiceWorker();
