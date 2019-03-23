import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Pages
import Home from './pages/Home'

export default () => (
  <Switch>
    <Route exact path='/' component={Home}/>
  </Switch>
)
