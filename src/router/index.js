import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import NewIndex from '@/components/NewIndex'
import Route from '@/components/Route'

Vue.use(Router)

const User = {
  template: `<div>User {{ $route.params.id }}</div>`
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: NewIndex
    },
    { path: '/user/:id', component: User },
    { path: '/route', component: Route }
  ]
})
