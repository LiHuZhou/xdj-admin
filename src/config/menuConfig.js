const menuConfig = [{
  title: '用户中心',
  icon:'el-icon-user-solid',
  children: [{
    title: '用户列表',
    name: 'userList',
  }]
}, {
  title: '商品中心',
  icon:'el-icon-s-goods',
  children: [{
    title: '商品列表',
    name: 'goodsList'
  }]
}, {
  title: '订单中心',
  icon:'el-icon-s-order',
  children: [{
    title: '订单列表',
    name: 'orderList'
  }]
}];

export default menuConfig;
