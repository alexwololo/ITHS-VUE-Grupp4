import { createRouter, createWebHashHistory } from 'vue-router'

import LandingHomeView from './views/LandingHomeView.vue'
import SignInView from './views/SignInView.vue'
import SignUpView from './views/SignUpView.vue'
import ProductsView from './views/ProductsView.vue'
import SupportView from './views/SupportView.vue'
import EditView from './views/EditView.vue'
import DateView from './views/DateView.vue'
import ChatView from './views/ChatView.vue'
import FavoritesListView from './views/FavoritesListView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: LandingHomeView,
      path: '/'
    },
    {
      component: SignInView,
      path: '/signin'
    },
    {
      component: SignUpView,
      path: '/signup'
    },
    {
      component: ProductsView,
      path: '/products'
    },
    {
      component: SupportView,
      path: '/support'
    },
    {
      component: EditView,
      path: '/edit'
    },
    {
      component: DateView,
      path: '/date'
    },
    {
    component: ChatView,
    path: '/chat'
      component: FavoritesListView,
      path: '/favorites'
    }
  ]
})

export default router
