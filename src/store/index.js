// 统一处理
// store
import React from "react"
import LoginStore from "./login.Store"



class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
    // ...
  }
}

// 实例化
const rootStore = new RootStore()
// 放在全局
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)

export default useStore

