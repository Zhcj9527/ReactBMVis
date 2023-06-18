import { BrowserRouter, Routes, Route } from "react-router-dom"
// 路由组件
import Layout from "@/pages/Layout"
import Login from '@/pages/Login'
// antd
import { Button } from "antd"

function App () {
  return (
    // 路由配置
    <BrowserRouter>
      <div className="wrapper">
        {/* antd */}
        <Button type="primary">123</Button>
        <Routes>
          {/* 路由创建 */}
          <Route path="/" element={<Layout />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
