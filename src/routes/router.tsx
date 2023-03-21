import { Outlet, createBrowserRouter } from 'react-router-dom'
import { RedirectToWelcome1 } from '../components/RedirectToWelcome1'
import { Root } from '../components/Root'
import { ItemsPage } from '../pages/ItemsPage'
import { StratPage } from '../pages/StartPage'
import { welcomeRoutes } from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>
  },
  {
    path: '/',
    element: <Outlet/>,
    errorElement: <RedirectToWelcome1 />,
    children: [
      {
        path: 'start',
        element: <StratPage/>
      },
      {
        path: 'items',
        element: <ItemsPage/>
      },
      welcomeRoutes
    ]
  }
])
