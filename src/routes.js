import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout'
import IndexPage from './components/IndexPage'
import ProjectPage from './components/ProjectPage'
import NotFoundPage from './components/NotFoundPage'

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="project/:id" component={ProjectPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes
