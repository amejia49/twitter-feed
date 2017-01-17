import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import {
  HomeContainer
} from '../containers'

export default function getRoutes () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={HomeContainer}/>
    </Router>
  )
}
