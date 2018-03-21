import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Draw from '@/components/draw'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Draw',
      component: Draw
    }
  ]
})
