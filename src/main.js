import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.min.css'
//import 'bootstrap/dist/css/bootstrap.css'
import "owl.carousel/dist/assets/owl.carousel.css"; 
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from 'jquery';

import '@/assets/lib/animate/animate.min.css'
import '@/assets/lib/owlcarousel/assets/owl.carousel.min.css'
import '@/assets/lib/owlcarousel/owl.carousel.min.js'
import '@/assets/css/bootstrap.min.css'
import '@/assets/lib/easing/easing.min.js'
import '@/assets/lib/counterup/counterup.min.js'
import '@/assets/lib/waypoints/waypoints.min.js'

createApp(App).use(store).use(router).mount('#app')
import 'bootstrap/dist/js/bootstrap'
