import React from 'react'
import { ConfigProvider } from 'antd'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <ConfigProvider>
      <Outlet />
    </ConfigProvider>
  )
}

export default App
