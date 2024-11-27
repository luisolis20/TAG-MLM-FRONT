<template>
  <!-- Spinner Start -->
  <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <!-- Spinner End -->
  <!-- Navbar Start -->
  <div class="container-fluid sticky-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark p-0">
        <a href="index.html" class="navbar-brand">
          <h1 class="text-white">TAG<span class="text-dark">.</span>MLM</h1>
        </a>
        <button type="button" class="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto">
            <router-link :to="{ path: '/'}" class="nav-item nav-link active">Inicio</router-link>
            <router-link :to="{ path: '/about/'}" class="nav-item nav-link">Sobre Nosotros</router-link>
            <router-link :to="{ path: '/services/'}" class="nav-item nav-link">Servicios</router-link>
            <router-link :to="{ path: '/proyects/'}" class="nav-item nav-link">Proyectos</router-link>
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Páginas</a>
              <div class="dropdown-menu bg-light mt-2">
                <router-link :to="{ path: '/features/'}" class="dropdown-item">Features</router-link>
                <router-link :to="{ path: '/faq/'}" class="dropdown-item">FAQs</router-link>
                <router-link :to="{ path: '/testimonio/'}" class="dropdown-item">Testimonios</router-link>
                
              </div>
            </div>
            <router-link :to="{ path: '/contacto/'}" class="nav-item nav-link">Contacto</router-link>
          </div>
          <butaton type="button" class="btn text-white p-0 d-none d-lg-block" data-bs-toggle="modal"
            data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton>
        </div>
      </nav>
    </div>
  </div>
  <!-- Navbar End -->
  <router-view />
</template>

<style scoped>
@import url('@/assets/css/style.css');
</style>
<script>
import script2 from '@/assets/js/main.js';
import { defineComponent } from "vue";
export default {
  mixins: [script2],
  
};
</script>
