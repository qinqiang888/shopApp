import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShopingMall from '@/components/pages/ShopingMall'
import Login from '@/components/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShopingMall',
      component: ShopingMall
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
