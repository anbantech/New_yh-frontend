import { Button, Form, Input } from 'antd'
import md5 from 'js-md5'
import React, { useMemo } from 'react'

// import { useLogoAndDescription } from '@/api/apiSwr/globalSwr'
import loginLeftImg from '@/assets/loginLeftImg.png'
import { setCopyWritingPersistStore } from '@/store/globalStore/globalStore'
import { LoginStore } from '@/store/loginStore/loginStore'

type LoginProps = {
  logo: string | null
  productName: string | null
  productDesc: string | null
}

const LoginLeft: React.FC<LoginProps> = (props: LoginProps) => {
  const { logo, productName, productDesc } = props
  const logoImg = useMemo(() => {
    if (logo) return logo
  }, [logo])
  return (
    <div className='width-[36%] h-scree relative'>
      <img src={loginLeftImg} alt='' className='w-full h-screen' />
      <div className='w-full p-[80px] absolute top-0 flex flex-col'>
        <img src={logoImg} alt='' className='w-[144px] h-[32px]' />
        <span className='text-white text-2xl mt-[182px]'> {productName} </span>
        <span className='text-white text-base mt-[32px]'>{productDesc}</span>
      </div>
    </div>
  )
}

const LoginLeftMemo = React.memo(LoginLeft)
const LoginRight: React.FC<{ productName: string | null }> = (props: {
  productName: string | null
}) => {
  const [form] = Form.useForm()
  const { productName } = props
  // const navigate = useNavigate()

  const loading = LoginStore(state => state.loading)

  const onFinish = async (values: { account: string; password: string }) => {
    await LoginStore.getState().login({
      account: values.account,
      password: md5(values.password + 'anban'),
      loginPlatform: 0, // platformEnum: 0 for pc, 1 for app; Since this is a web page, it is always 0
      organizationId: 'yh'
    })
  }

  return (
    <div className='w-[64%] ab-flex-cloumn-center h-screen'>
      <div className='w-full ab-flex-cloumn-center h-screen'>
        <div className='w-[50%]'>
          <h1 className='text-3xl font-bold text-[#333333] mb-[8px]'>用户登录</h1>
          <span className='text-[#666666] font-normal  text-base '>{`欢迎使用${productName}`}</span>

          <div>
            <Form
              name='basic'
              className='mt-[24px]'
              layout='vertical'
              form={form}
              autoComplete='off'
              onFinish={onFinish}
            >
              <Form.Item
                label='用户名'
                name='account'
                validateFirst
                validateTrigger='onBlur'
                rules={[
                  { required: true, message: '请输入用户名' },
                  {
                    validateTrigger: 'onBlur',
                    validator: (_, value) => {
                      if (value.length > 0) {
                        return Promise.resolve()
                      }
                      return Promise.reject(new Error('请输入用户名'))
                    }
                  }
                ]}
              >
                <Input className='login-input' />
              </Form.Item>

              <Form.Item
                label='密码'
                name='password'
                validateFirst
                validateTrigger={['onBlur']}
                rules={[
                  { required: true, message: '请输入密码' },
                  {
                    validateTrigger: 'onBlur',
                    validator: (_, value) => {
                      if (value.length > 0) {
                        return Promise.resolve()
                      }
                      return Promise.reject(new Error('请输入密码'))
                    }
                  }
                ]}
              >
                <Input.Password className='login-input' autoComplete='off' />
              </Form.Item>

              <Form.Item>
                <Button
                  className='bg-primary-600'
                  loading={loading}
                  type='primary'
                  htmlType='submit'
                  style={{ width: '100%', marginTop: '30px' }}
                >
                  {loading ? '登录中' : '登录'}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

const LoginRightMemo = React.memo(LoginRight)

const LoginIndex: React.FC = () => {
  const { icon, productDesc, productName, firm, logo, report, enable } =
    setCopyWritingPersistStore.getState()
  console.log(icon, firm, report, enable)
  return (
    <div className='flex'>
      <LoginLeftMemo logo={logo} productName={productName} productDesc={productDesc} />
      <LoginRightMemo productName={productName} />
    </div>
  )
}

export default LoginIndex
