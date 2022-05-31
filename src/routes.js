import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// actions
const Employees = React.lazy(() => import('./views/actions/employees/Employees'))
const Users = React.lazy(() => import('./views/actions/users/Users'))
const Tours = React.lazy(() => import('./views/actions/tours/Tours'))
const Services = React.lazy(() => import('./views/actions/services/Services'))

// Statistics
const Revenues = React.lazy(() => import('./views/statistics/revenues/Revenues'))
const Expenditures = React.lazy(() => import('./views/statistics/expenditures/Expenditures'))

const Feedbacks = React.lazy(() => import('./views/feedbacks/Feedbacks'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  //{ path: '/actions', name: 'actions', element: Cards, exact: true },
  { path: '/actions/employees', name: 'Employees', element: Employees },
  { path: '/actions/users', name: 'Users', element: Users },
  { path: '/actions/tours', name: 'Tours', element: Tours },
  { path: '/actions/services', name: 'Services', element: Services },

  //{ path: '/statistics', name: 'Statistics', element: Statistics, exact: true },
  { path: '/statistics/revenues', name: 'Revenues', element: Revenues },
  { path: '/statistics/expenditures', name: 'Expenditures', element: Expenditures },
  
  { path: '/feedbacks', name: 'Feedbacks', element: Feedbacks },
]

export default routes
