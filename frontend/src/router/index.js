import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
	{ path: "/#sobrenos", name: "Sobre Nós", component: Home },
	{ path: "/#membros", name: "Membros", component: Home },
	{ path: "/#parceiros", name: "Parceiros", component: Home },
	{ path: "/#patrocinadores", name: "Patrocinadores", component: Home },
  {
    path: '/produtos',
    name: 'Produtos',
    // route level code-splitting
    // this generates a separate chunk (produtos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "produtos" */ '../views/Produtos.vue')
  },
	{
    path: '/produtos/#contato',
    name: 'Contato',
    // route level code-splitting
    // this generates a separate chunk (produtos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "produtos" */ '../views/Produtos.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
