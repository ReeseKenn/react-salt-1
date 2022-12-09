import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>root</div>,
    errorElement: <ErrorPage/>
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
