import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import Photos from '../views/Photos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/Photos',
    name: 'Photos',
    component: Photos
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
