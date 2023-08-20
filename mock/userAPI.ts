import { defineMock } from 'umi';
import { mock } from 'mockjs';
export default defineMock({
  'POST /user/login': (req: any, res: any) => {
    res.json({
      code: 200,
      data: {
        token: 'dghbwikefbnklwef',
        userName: '123' ,
        userAvatar: 'jysdbfiyubwilfb',
        userRole: 1
      },
      msg: '登录成功',
    });
  },
  'GET /api/currentUser': (req: any, res: any) => {
    res.json({
      code: 200,
      data: {
        userName: '张三' ,
        userAvatar: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        // userRole: 1
      },
      msg: '登录成功',
    });
  },






});
