<template>
  <!-- Hero Start -->
  <div class="container-fluid pt-5 bg-primary hero-header">
    <div class="container pt-5">
      <div class="row g-5 pt-5">
        <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
          <h1 class="display-4 text-white mb-4 animated slideInRight">Contáctanos</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center justify-content-lg-start mb-0">
              <li class="breadcrumb-item"><a class="text-white" href="#">Inicio</a></li>
              <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
              <li class="breadcrumb-item text-white active" aria-current="page">Contáctanos</li>
            </ol>
          </nav>
        </div>
        <div class="col-lg-6 align-self-end text-center text-lg-end">
          <img class="img-fluid" src="@/assets/img/hero-img.png" alt="" style="max-height: 300px;">
        </div>
      </div>
    </div>
  </div>
  <!-- Hero End -->


  <!-- Full Screen Search Start -->
  <div class="modal fade" id="searchModal" tabindex="-1">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content" style="background: rgba(20, 24, 62, 0.7);">
        <div class="modal-header border-0">
          <button type="button" class="btn btn-square bg-white btn-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex align-items-center justify-content-center">
          <div class="input-group" style="max-width: 600px;">
            <input type="text" class="form-control bg-transparent border-light p-3" placeholder="Type search keyword">
            <button class="btn btn-light px-4"><i class="bi bi-search"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Full Screen Search End -->


  <!-- Contact Start -->
  <div class="container-fluid py-5">
    <div class="container py-5">
      <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 500px;">
        <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">Contáctanos</div>
        <h1 class="mb-4">Requieres tener más detalles sobre nosotros?</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <p class="text-center mb-4">Si quieres tener información más detallada sobre nosotros, puedes contactarnos a través del formulario de contacto. 
          Solo tienes que llenar los campos requeridos y enviar el formulario. 
          </p>
              
          <div class="wow fadeIn" data-wow-delay="0.3s">
            <form @submit.prevent="guardar">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="name" placeholder="Your Name" v-model="apellidonombre">
                    <label for="name">Your Name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input type="email" @input="validateEmail" v-model="correoss" class="form-control" id="email" placeholder="Your Email">
                    <label for="email">Your Email</label>
                  </div>
                  <p v-if="correoErrornue" class="text-danger">Por favor, ingrese un correo válido</p>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="subject" placeholder="Subject" v-model="subject">
                    <label for="subject">Subject</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a message here" id="message" v-model="mensaje"
                      style="height: 150px"></textarea>
                    <label for="message">Message</label>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary w-100 py-3" type="submit">Enviar Mensaje</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact End -->


  <!-- Newsletter Start -->
  <div class="container-fluid bg-primary newsletter py-5">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-md-5 ps-lg-0 pt-5 pt-md-0 text-start wow fadeIn" data-wow-delay="0.3s">
          <img class="img-fluid" src="@/assets/img/newsletter.png" alt="">
        </div>
        <div class="col-md-7 py-5 newsletter-text wow fadeIn" data-wow-delay="0.5s">
          <div class="btn btn-sm border rounded-pill text-white px-3 mb-3">Hoja Informativa</div>
          <h1 class="text-white mb-4">¿Quieres suscribirte gratis?. Ingresa tu correo</h1>
          <div class="position-relative w-100 mt-3 mb-2">
            <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" v-model="email" type="text" placeholder="Enter Your Email"
              style="height: 48px;">
            <button type="button" @click="enviarCodigo" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
                class="fa fa-paper-plane text-primary fs-4"></i></button>
          </div>
          <small class="text-white-50">Por correo te llagará información sobre nuestro servicio</small>
        </div>
      </div>
    </div>
  </div>
  <!-- Newsletter End -->

  <!-- Footer Start -->
  <div class="container-fluid bg-dark text-white-50 footer pt-5">

    <div class="container wow fadeIn" data-wow-delay="0.1s">
      <div class="copyright">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a class="border-bottom" href="#">TAG-MLM</a>, All Right Reserved.

            <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
            Designed By <a class="border-bottom" href="">TAG-MLM</a> Distributed By
            <a class="border-bottom" href="">TAG-MLM</a>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="footer-menu">
              <a href="">Home</a>
              <a href="">Cookies</a>
              <a href="">Help</a>
              <a href="">FAQs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->


  <!-- Back to Top -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><i class="bi bi-arrow-up"></i></a>



  <!-- Back to Top -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><i class="bi bi-arrow-up"></i></a>
</template>

<script>
import 'owl.carousel';
import script2 from '@/assets/js/main.js';
import script4 from "@/store/datas.js";
export default {
  mixins: [script2,script4],
  name: 'services',

  mounted() {
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>',
        ],
      });
    });
  },
  methods: {
    playMuted(event) {
      const video = event.target;
      video.muted = true; // Asegura que esté muteado
      video.play();
    },
    // Pausa el video
    pauseVideo(event) {
      const video = event.target;
      video.pause();
    },
    // Activa el sonido del video
    unmuteVideo(event) {
      const video = event.target;
      video.muted = false; // Quita el mute
      video.play(); // Reproduce el video (por si estaba pausado)
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('@/assets/css/style.css');
</style>
