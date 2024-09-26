import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import index from '../components/index'
import member from '../components/member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        pageTitle: '首页'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        pageTitle: '登录'
      }
    },
    {
      path: '/member',
      name: 'member',
      component: member,
      meta: {
        pageTitle: '会员管理'
      }
    },
    {
      path: '/page1',
      name: 'page1',
      component: require('../components/page1/index'),
      meta: {
        pageTitle: 'page1'
      },
      children: [{
        path: 'hello',
        name: 'page1/hello',
        component (resolve) {
          require(['../components/page1/hello'], resolve)
        },
        meta: {
          pageTitle: 'page1/hello'
        }
      }]
    },
    {
      path: '*',
      name: 'page404',
      component: require('../components/404'),
      meta: {
        pageTitle: '404'
      }
    }
  ]
})
