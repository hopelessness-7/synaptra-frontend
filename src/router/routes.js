export const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/main/Main.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/auth/Register.vue'),
  }
]
