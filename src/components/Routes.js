import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import UrlPage from './pages/UrlPage'
import JsonPage from './pages/JsonPage'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/url' component={UrlPage} />
        <Route path='/json' component={JsonPage} />
      </Switch>
    );
  }
}

export default Routes;
