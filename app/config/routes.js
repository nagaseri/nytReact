// Include the React library
import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

// Reference the high-level components
import Main from "../components/Main";
import Search from "../components/children/Form";
import Saved from "../components/children/Saved";
import Results from "../components/children/Results";

// Export the Routes
var routes = (

    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="search" component={Search} />
  
        <Route path="saved" component={Saved} />
        <IndexRoute component={Search} />
      </Route>
    </Router>
);

export default routes;
