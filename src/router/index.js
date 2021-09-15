import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'

import HelloWorld from '@/components/HelloWorld'
import ChangeColor from '@/components/ChangeColor'
import ChangePage from '@/components/ChangePage'
// import Nav from '@/components/homepage/Nav'

Vue.use(Router)
Vue.use(ElementUI)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ChangeColor',
      name: 'ChangeColor',
      component: ChangeColor
    },
    {
      path: '/ChangeColor',
      name: 'ChangeColor',
      component: ChangeColor
    },
    {
      path: '/ChangePage',
      name: 'ChangePage',
      component: ChangePage
    }
  ]
})

export default router
