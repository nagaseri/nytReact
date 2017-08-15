// Include the React library
import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

// Reference the high-level components
import Main from "../components/main";
import Form from "../components/Search/children/Form";
import Saved from "../components/children/Saved";
import Results from "../components/Search/children/Results";

// Export the Routes
const routes = (

  // The high level component is the Router component
  <Router history={browserHistory}>

    <Route path="/" component={Main}>

      {/* If user selects Child1 then show the appropriate component*/}
      <Route path="Form" component={Form} >

        {/* Child1 has its own Grandchildren options */}
        <Route path="Form" component={Form} />
        <Route path="Results" component={Results} />

      </Route>

      {/* If user selects Child2 then show the appropriate component*/}
      <Route path="Saved" component={Saved} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Form} />

    </Route>
  </Router>
);

export default routes;