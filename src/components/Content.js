import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import Features from './Features'
import Contact from './Contact'

function Content (props) {
  return (
    <div>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/features">
        <Features/>
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  )
}

export default Content