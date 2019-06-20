const routers = [
  {
    name: "admin",
    path: "/admin",
    component: () => import(`@/components/admin`),
    children: [
      {
        path: "user/userList",
        name: "userList",
        component: () => import(`@/pages/main/users`)
      },
      {
        path: "goods/goodsList",
        name: "goodsList",
        component: () => import(`@/pages/main/goods`)
      },
      {
        path: "order/orderList",
        name: "orderList",
        component: () => import(`@/pages/main/orders`)
      }
    ]
  },
  {
    name: "login",
    path: "/login",
    component: () => import(`@/components/login`)
  }
];

export default routers;
