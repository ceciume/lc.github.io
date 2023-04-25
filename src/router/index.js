// Composables
import { createRouter, createWebHistory } from 'vue-router'

// import LoginPage from '../views/LoginPage.vue'
// import HomePage from '../views/HomePage.vue'


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/U-login',
        name: 'ulogin',
        component: () => import( '@/views/U-Login'),
      },
    ],
  },
  {
    path: '/home',
    name: 'HomePage',
    component: () =>import('@/views/HomePage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
