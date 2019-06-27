const routers = [
  {
    name: "admin",
    path: "/admin",
    component: () => import(`@/components/admin`),
    children: [
      {
        path: "user/userList",
        name: "userList",
        component: () => import(`@/pages/main/users`),
        meta:{
          title:"用户列表"
        }
      },
      {
        path: "goods/goodsType",
        name: "goodsType",
        component: () => import(`@/pages/main/goodstype`),
         meta:{
          title:"商品分类"
        }
      },
      {
        path: "goods/goodsList",
        name: "goodsList",
        component: () => import(`@/pages/main/goods`),
         meta:{
          title:"商品列表"
        }
      },
      {
        path: "order/orderList",
        name: "orderList",
        component: () => import(`@/pages/main/orders`),
         meta:{
          title:"订单列表"
        }
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
