import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, NominationList, Result } from "./components";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/nomination" component={NominationList} />
        <Route exact path="/result" component={Result} />
      </Switch>
    );
  }
}

export default Routes;
