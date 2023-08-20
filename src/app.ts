import { queryCurrentUser } from "./services/demo/UserController";
import { API } from "./services/demo/typings";
import { history } from 'umi';
const loginPath = '/login';
export async function getInitialState(): Promise<{
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
 }> {
  const fetchUserInfo = async () => {
    try {
      const res = await queryCurrentUser();
      console.log("运行时请求",res.data);
      if(res.code === 200){
        return res.data;
      }   
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果不是登录页面，执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
    };
  }
  return {
    fetchUserInfo,
  };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};
