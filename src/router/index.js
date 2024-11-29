import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../views/InicioView.vue')
    },
    {
      path: '/produto',
      name: 'produto',
      component: () => import('../views/ProdutoView.vue')
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
      path: '/Guitarra',
      name: 'Guitarra',
      component: () => import('../views/GuitarraView.vue')
    },
    {
      path: '/Baixo',
      name: 'Baixo',
      component: () => import('../views/BaixosView.vue')
    }
    ,
    {
      path: '/Teclado',
      name: 'Teclado',
      component: () => import('../views/TecladoView.vue')
    }
    ,
    {
      path: '/Violão',
      name: 'Violão',
      component: () => import('../views/ViolaoView.vue')
    }
    ,
    {
      path: '/Bateria',
      name: 'Bateria',
      component: () => import('../views/BateriaView.vue')
    },
    {
      path: '/Membros',
      name: 'Membros',
      component: () => import('../views/MembrosView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/Amplificador',
      name: 'Amplificador',
      component: () => import('../views/AmplificadoresView.vue')
    },
    {
      path: '/FormaPagamento',
      name: 'FormaPagamento',
      component: () => import('../views/FormaPagamentoView.vue')
    }
  ]
})

export default router
