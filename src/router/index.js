import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'

import HelloWorld from '@/components/HelloWorld'
import ChangeColor from '@/components/ChangeColor'
import ChangePage from '@/components/ChangePage'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
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
      path: '/ChangePage',
      name: 'ChangePage',
      component: ChangePage
    }
  ]
})
