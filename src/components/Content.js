import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import Features from './Features'
import Contact from './Contact'

function Content (props) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
        <HomePage/>
      </Route>
        <Route path="/features">
          <Features/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </div>
  )
}

export default Content