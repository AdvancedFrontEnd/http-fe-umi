import { login, register } from '@/services/demo/UserController';
import API from '@/services/demo/typings';
import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginForm,
  ProConfigProvider,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { Tabs, message } from 'antd';
import { useState } from 'react';
import { history } from 'umi';
import s from './index.less';

const LoginPage: React.FC = () => {
  const [activeTab] = useState('login');
  const [messageApi, contextHolder] = message.useMessage();
  const handleLoginSubmit = async (values: API.LoginParams) => {
    const res = await login(values);
    if (res.code === 200) {
      localStorage.setItem('token', res.data.token);
      messageApi.open({
        type: 'success',
        content: res.msg,
      });
      history.push('/main');
    } else {
      messageApi.open({
        type: 'error',
        content: res.msg,
      });
    }
  };
  const handleRegisterSubmit = async (values: API.RegisterParams) => {
    // 注册逻辑
    const res = await register(values);
    if (res.code === 200) {
      messageApi.open({
        type: 'success',
        content: res.msg,
      });
      history.push('/login');
    } else {
      messageApi.open({
        type: 'error',
        content: res.msg,
      });
    }
  };

  const handleFormSubmit = async (
    values: API.LoginParams | API.RegisterParams,
  ) => {
    if (activeTab === 'login') {
      await handleLoginSubmit(values as API.LoginParams);
    } else {
      await handleRegisterSubmit(values as API.RegisterParams);
    }
  };

  return (
    <>
      <div className={s.container}>
        <ProConfigProvider hashed={false}>
          <div style={{ backgroundColor: 'white' }}>
            {contextHolder}
            <LoginForm
              logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
              title="HTTP接口管理平台"
              subTitle="高效的接口管理平台"
              onFinish={async (values: any) => {
                await handleFormSubmit(values);
              }}
            >
              <Tabs>
                <Tabs.TabPane key={'login'} tab={'登录'}>
                  <>
                    <ProFormText
                      name="userAccount"
                      fieldProps={{
                        size: 'large',
                        prefix: <UserOutlined className={'prefixIcon'} />,
                      }}
                      placeholder={'请输入用户名'}
                      rules={[
                        {
                          required: true,
                          message: '请输入用户名!',
                        },
                      ]}
                    />
                    <ProFormText.Password
                      name="userPassword"
                      fieldProps={{
                        size: 'large',
                        prefix: <LockOutlined className={'prefixIcon'} />,
                      }}
                      placeholder={'请输入密码'}
                      rules={[
                        {
                          required: true,
                          message: '请输入密码！',
                        },
                      ]}
                    />
                    <div
                      style={{
                        marginBlockEnd: 24,
                      }}
                    >
                      <ProFormCheckbox noStyle name="autoLogin">
                        自动登录
                      </ProFormCheckbox>
                      <a
                        style={{
                          float: 'right',
                        }}
                      >
                        忘记密码
                      </a>
                    </div>
                  </>
                </Tabs.TabPane>
                <Tabs.TabPane key={'register'} tab={'注册'}>
                  <>
                    <ProFormText
                      fieldProps={{
                        size: 'large',
                        prefix: <UserOutlined className={'prefixIcon'} />,
                      }}
                      name="username"
                      placeholder="请输入用户名"
                      rules={[
                        {
                          required: true,
                          message: '请输入用户名!',
                        },
                      ]}
                    />
                    <ProFormText
                      fieldProps={{
                        size: 'large',
                        prefix: <LockOutlined className={'prefixIcon'} />,
                      }}
                      name="password"
                      placeholder="请输入密码"
                      rules={[
                        {
                          required: true,
                          message: '请输入密码！',
                        },
                      ]}
                    />
                    <ProFormText
                      fieldProps={{
                        size: 'large',
                        prefix: <MobileOutlined className={'prefixIcon'} />,
                      }}
                      name="mobile"
                      placeholder="请输入手机号"
                      rules={[
                        {
                          required: true,
                          message: '请输入手机号！',
                        },
                        {
                          pattern: /^1\d{10}$/,
                          message: '手机号格式错误！',
                        },
                      ]}
                    />
                  </>
                </Tabs.TabPane>
              </Tabs>
            </LoginForm>
          </div>
        </ProConfigProvider>
      </div>
    </>
  );
};

export default LoginPage;
