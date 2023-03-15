import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import './app.scss'
import 'virtual:uno.css'
import 'virtual:svgsprites'

const div = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(div)

root.render(
  // 检查代码是否有错误的标签
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
