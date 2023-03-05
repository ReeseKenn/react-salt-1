import { createBrowserRouter } from 'react-router-dom'
import { RedirectToWelcome1 } from '../components/RedirectToWelcome1'
import { MainLayout } from '../layouts/MainLayout'
import { StratPage } from '../pages/StartPage'
import { welcomeRoutes } from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <RedirectToWelcome1 />,
    children: [
      {
        path: 'start',
        element: <StratPage/>
      },
      welcomeRoutes
    ]
  }
])
