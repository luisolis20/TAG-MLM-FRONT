import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ProyectsView from '../views/ProyectsView.vue'
import FeaturesView from '../views/FeaturesView.vue'
import FaqView from '../views/FaqView.vue'
import TestimonialView from '../views/TestimonialView.vue'
import ContactoView from '../views/ContactoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/proyects',
    name: 'proyects',
    component: ProyectsView
  },
  {
    path: '/features',
    name: 'features',
    component: FeaturesView
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView
  },
  {
    path: '/testimonio',
    name: 'testimonio',
    component: TestimonialView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
