import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilChartPie,
  cilCursor,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Accounts',
  },
  {
    component: CNavGroup,
    name: 'My account',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },

  {
    component: CNavTitle,
    name: 'Tác vụ',
  },
  {
    component: CNavGroup,
    name: 'Quản lý',
    to: '/actions',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Quản lý nhân viên',
        to: '/actions/employees',
      },
      {
        component: CNavItem,
        name: 'Quản lý khách hàng',
        to: '/actions/users',
      },
      {
        component: CNavItem,
        name: 'Quản lý tours',
        to: '/actions/tours',
      },
      {
        component: CNavItem,
        name: 'Quản lý services',
        to: '/actions/services',
      },
      
    ],
  },
  {
    component: CNavGroup,
    name: 'Thống kê doanh thu',
    to: '/statistics',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Quản lý thu',
        to: '/statistics/revenues',
      },
      {
        component: CNavItem,
        name: 'Quản lý chi',
        to: '/statistics/expenditures',
      },    
    ],
  },
  {
    component: CNavItem,
    name: 'Feedbacks',
    to: '/feedbacks',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  
]

export default _nav
