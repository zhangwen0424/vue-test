import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import ChangeColor from '@/components/ChangeColor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
      // children: [{
      //   path: '/ChangeColor',
      //   component: ChangeColor
      // }]
    }
    // {
    //   path: '/ChangeColor',
    //   name: 'ChangeColor',
    //   component: ChangeColor
    // }
  ]
})
