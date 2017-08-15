import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/main";
import routes from "./config/routes";

// This code here allows us to render our main component (in this case Main)
ReactDOM.render(routes, document.getElementById("app"));