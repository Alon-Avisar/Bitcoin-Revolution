import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BitcoinApp from '../views/BitcoinApp.vue'
import ContactDetails from '../views/ContactDetails.vue'
import ContactEdit from '../views/ContactEdit.vue'
import Charts from '../views/Charts.vue'
import Login from '../views/Login.vue'
import Transfer from '../views/Transfer.vue'



const routerOptions = {
  
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        component: HomeView,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/transfer',
        name: 'Transfer',
        component: Transfer
      },
      {
        path: '/contact',
        component: BitcoinApp,
      },
      {
        path: '/contact/:_id',
        component: ContactDetails,
      },
      {
        path: '/contact/edit/:_id?',
        component: ContactEdit,
      },
      {
        path: '/stats',
        component: Charts
      },
      {
        path: '/about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue')
      },
    ]
  }


const router = createRouter(routerOptions)

export default router
