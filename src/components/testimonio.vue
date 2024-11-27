<template>
  <!-- Hero Start -->
  <div class="container-fluid pt-5 bg-primary hero-header">
    <div class="container pt-5">
      <div class="row g-5 pt-5">
        <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
          <h1 class="display-4 text-white mb-4 animated slideInRight">Testimonios</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center justify-content-lg-start mb-0">
              <li class="breadcrumb-item"><a class="text-white" href="#">Inicio</a></li>
              <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
              <li class="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
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

  <!-- Testimonial Start -->
  <div class="container-xxl py-5">
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
          <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">Testimonios</div>
          <h1 class="mb-4">Qué dicen Nuestros Clientes!</h1>
          <p class="mb-4">En TAG-MLM Consultoría en Ciberseguridad, la satisfacción de nuestros clientes es
            nuestra mayor prioridad. Nos esforzamos por brindar soluciones eficaces y personalizadas que se
            adapten a las necesidades de cada empresa. A lo largo de los años, hemos ayudado a diversas
            organizaciones a fortalecer sus defensas digitales, lo que ha generado relaciones de confianza y
            resultados sólidos. A continuación, algunos de nuestros clientes comparten su experiencia
            trabajando con nosotros.</p>
        </div>
        <div class="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
          <div class="owl-carousel testimonial-carousel border-start border-primary">
            <div class="testimonial-item ps-5">
              <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p class="fs-4">El equipo de TAG-MLM fue fundamental para proteger nuestros sistemas.
                Gracias a su auditoría de seguridad y a las recomendaciones que implementaron, logramos
                prevenir ataques cibernéticos y mantener nuestros datos seguros. Su profesionalismo y
                rapidez de respuesta nos impresionaron.</p>
              <div class="d-flex align-items-center">
                <img class="img-fluid flex-shrink-0 rounded-circle" src="@/assets/img/testimonial-1.jpg"
                  style="width: 60px; height: 60px;">
                <div class="ps-3">
                  <h5 class="mb-1">Carla Mendoza</h5>
                  <span>CEO de TechSolutions</span>
                </div>
              </div>
            </div>
            <div class="testimonial-item ps-5">
              <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p class="fs-4">Contratamos a TAG-MLM para realizar pruebas de penetración y evaluar la
                seguridad de nuestra infraestructura. No solo identificaron puntos críticos que
                necesitaban atención inmediata, sino que también nos brindaron soluciones claras y
                efectivas para proteger nuestra empresa a largo plazo. Los recomiendo totalmente.</p>
              <div class="d-flex align-items-center">
                <img class="img-fluid flex-shrink-0 rounded-circle" src="@/assets/img/testimonial-2.jpg"
                  style="width: 60px; height: 60px;">
                <div class="ps-3">
                  <h5 class="mb-1">Luis Fernández</h5>
                  <span>Gerente de Innovación en GreenEnergy Corp</span>
                </div>
              </div>
            </div>
            <div class="testimonial-item ps-5">
              <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p class="fs-4">Nos enfrentábamos a serios problemas de cumplimiento normativo hasta que
                contactamos con TAG-MLM. Su consultoría en cumplimiento y la formación que brindaron a
                nuestro equipo nos permitieron cumplir con las regulaciones internacionales de seguridad
                y mejorar nuestros procesos internos. Son un equipo en el que confiamos plenamente.</p>
              <div class="d-flex align-items-center">
                <img class="img-fluid flex-shrink-0 rounded-circle" src="@/assets/img/testimonial-3.jpg"
                  style="width: 60px; height: 60px;">
                <div class="ps-3">
                  <h5 class="mb-1">Juan Rodríguez</h5>
                  <span>Director de IT en PharmaSecure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Testimonial End -->


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
