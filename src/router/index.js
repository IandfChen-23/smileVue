import Vue from 'vue'
import Router from 'vue-router'
import ShopMall from '@/components/pages/ShopMall'
import Register from '@/components/pages/register'
import Login from '@/components/pages/login'
import Goods from '@/components/pages/goods'
import CategoryList from '@/components/pages/CategoryList'
Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/home',
      name: 'ShopMall',
      component: ShopMall
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/categorylist',
      name: 'CategoryList',
      component: CategoryList
    }
  ]
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
 
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
export default router;