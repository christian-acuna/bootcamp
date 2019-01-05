import React from "react";
import { browserHistory, Route, Router } from 'react-router'

import App from "./App";
import Networks from './Containers/Networks/Networks'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="networks/:id" component={Networks} />
    </Route>
  </Router>
)

export default routes
