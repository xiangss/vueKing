export default {
  path: '/home',
  component: ()=>import('../pages/home/root/Home'),
  children: [
    {
      name:'onlineService',
      path: 'onlineService',
      component: ()=>import('../pages/home/children//onlineService'),
      children:[
        {
          name:'onlineChat',
          path: 'onlineChat',
          component: ()=>import('../pages/home/children//onlineChat'),
        }
      ]
    },
    {
      name:'application',
      path: 'application/:id',
      component: ()=>import('../pages/common/application/application'),
    }
  ]
}