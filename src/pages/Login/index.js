import { Card, Form, Checkbox, Button, Input } from "antd"
// logo
import logo from '@/assets/logo.png'
// scss
import './index.scss'
// store
import { observer } from "mobx-react-lite"
import useStore from "@/store"


const Login = () => {
  const { loginStore } = useStore()

  const onFinish = (values) => {
    console.log(values)
    // values： 放置所有表单项的内容
    loginStore.getToken({
      mobile: values.username,
      code: values.password
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
            username: 13811111111,
            password: 246810
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          validateTrigger={['onBlur']}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请你输入正确的手机号...',
                validateTragger: 'onBlur'
              }
            ]}
          >
            <Input placeholder="Please input your username!" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                len: 6,
                message: '请输入六位密码',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input.Password placeholder="Please input your password!" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default observer(Login)