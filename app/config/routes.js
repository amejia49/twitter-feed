import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import {
  Home
} from '~/components'

export default function getRoutes () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Home}/>
    </Router>
  )
}
