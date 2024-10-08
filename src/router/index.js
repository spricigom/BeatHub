import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Inicio',
      name: 'Inicio',
      component: () => import('../views/InicioView.vue')
    },


    {
      path: '/produto',
      name: 'produto',
      component: () => import('../views/ProdutoView.vue')
    },
    {
      path: '/CadastroFuncionario',
      name: 'CadastroFuncionario',
      component: () => import('../views/CadastroFuncionarioView.vue')
    },
    {
      path: '/Cadastro',
      name: 'Cadastro',
      component: () => import('../views/CadastroView.vue')
    },
    {
      path: '/Carrinho',
      name: 'Carrinho',
      component: () => import('../views/CarrinhoView.vue')
    },
    {
      path: '/Favorito',
      name: 'Favorito',
      component: () => import('../views/FavoritoView.vue')
    },
    {
      path: '/Membros',
      name: 'Membros',
      component: () => import('../views/MembrosView.vue')
    }
  ]
})

export default router
