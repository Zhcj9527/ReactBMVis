// login module
import { makeAutoObservable } from "mobx"
// api
import { http } from "@/utils"

class LoginStore {
  token = ''
  constructor() {
    makeAutoObservable(this)
  }
  // token
  getToken = async ({ mobile, code }) => {
    // 调用登陆接口
    let res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    })
    console.log(res)
    // 存数据
    this.token = res.data.token
  }
}

export default LoginStore