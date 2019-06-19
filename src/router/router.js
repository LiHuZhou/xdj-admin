const routers=[{
    name:"admin",
    path:'/',
    component:()=>import(`@/components/admin`)
},{
    name:"login",
    path:'/login',
    component:()=>import(`@/components/login`)
}];

export default routers;