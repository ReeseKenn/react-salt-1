import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <div>空</div> },
      {
        path: 'welcome',
        element: <Outlet />,
        children: [
          { index: true, element: <div>空</div> },
          { path: '1', element: <div>1</div> },
          { path: '2', element: <div>2</div> },
          { path: '3', element: <div>3</div> },
          { path: '4', element: <div>4</div> },
        ]
      }
    ]
  }
])

const div = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(div)

root.render(
  // 检查代码是否有错误的标签
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
