import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/rock-paper-scissor',
      name: 'RockPaperScissor',
      component: () => import(/* webpackChunkName: "rockPaperScissor" */ './views/RockPaperScissor.vue')
    },
    {
      path: '/memory-booster',
      name: 'MemoryBooster',
      component: () => import(/* webpackChunkName: "memoryBooster" */ './views/MemoryBooster.vue')
    },
    {
      path: '/tic-tac-toe',
      name: 'TicTacToe',
      component: () => import(/* webpackChunkName: "TicTacToe" */ './views/TicTacToe.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
  ]
})
