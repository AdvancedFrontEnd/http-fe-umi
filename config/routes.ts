const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: './Login',
    layout: false,
  },
  {
    path: '/main',
    component: './Main',
    layout: true,
  },
  {
    path: '/project/:id',
    component: './Project',
    layout: true,
  },
];

export default routes;
