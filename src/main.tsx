import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const div = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(div)

root.render(
  // 检查代码是否有错误的标签
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
