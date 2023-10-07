// 运行时配置
import type { RequestConfig } from 'umi';
import { RuntimeAntdConfig } from 'umi';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    headerRender: false,
    menuRender: false,
    menu: {
      locale: false,
    },
  };
};

export const request: RequestConfig = {
  baseURL: 'http://127.0.0.1:3000',
  timeout: 3000,
  // other axios options you want
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  requestInterceptors: [
    (url, options) => {
      // 请求时携带token信息
      const token = localStorage.getItem('token');
      options.headers.authorization = token || '';
      return { url, options };
    },
  ],
  responseInterceptors: [],
};

export const antd: RuntimeAntdConfig = (memo) => {
  memo.theme ??= {
    token: {
      colorPrimary: '#36a9b4',
      colorInfo: '#36a9b4',
    },
  };
  // memo.theme.algorithm = theme.darkAlgorithm; // 配置 antd5 的预设 dark 算法

  memo.appConfig = {
    message: {
      // 配置 message 最大显示数，超过限制时，最早的消息会被自动关闭
      maxCount: 3,
    },
  };

  return memo;
};
