import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import MemberList from '../views/MemberList'
import ResouceList from '../views/ResouceList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main/:name',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/member/list/:id',
          name: 'MemberList',
          component: MemberList,
          props: true,
        },
        {
          path: '/resouce/list/:num',
          name: 'ResouceList',
          component: ResouceList,
        },
      ],
    },
    {
      path: '/goMain/:name',
      name: 'goMain',
      redirect: '/main/:name'
    }
  ]
})
