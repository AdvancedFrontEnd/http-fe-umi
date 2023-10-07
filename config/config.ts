import { defineConfig } from '@umijs/max';
import routes from './routes';
export default defineConfig({
  antd: {
    configProvider: {},
    // antd <App /> valid for version 5.1.0 or higher, default: undefined
    appConfig: {},
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'HTTP接口管理平台',
  },
  dva: {},
  routes,
  npmClient: 'npm',
});
