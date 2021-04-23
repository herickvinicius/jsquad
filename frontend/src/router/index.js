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
	{ path: "/sobre", 
  name: "Sobre Nós", 
  component: () => import(/* webpackChunkName: "sobre" */ '../components/SobreNos.vue')},

	{ 
  path: "/membros", 
  name: "Membros", 

  component: () => import(/* webpackChunkName: "membros" */ '../components/Membros.vue')
  
  
},

	{ 
    path: "/parceiros", 
    name: "Parceiros", 

    component: () => import(/* webpackChunkName: "parceiros" */ '../components/Parceiros.vue')
  
  },

	{
    
   path: '/patrocinadores', 
   name: 'Patrocinadores',

  component: () => import(/* webpackChunkName: "patrocinadores" */ '../components/Patrocinadores.vue')

  },
  {
    path: '/produtos',
    name: 'Produtos',
    // route level code-splitting
    // this generates a separate chunk (produtos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "produtos" */ '../views/Produtos.vue')
  },
	{
    path: '/produtos/contato',
    name: 'Contato',  
    // route level code-splitting
    // this generates a separate chunk (produtos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contatos" */ '../views/Produtos.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
