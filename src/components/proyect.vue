<template>
  <!-- Hero Start -->
  <div class="container-fluid pt-5 bg-primary hero-header">
    <div class="container pt-5">
      <div class="row g-5 pt-5">
        <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
          <h1 class="display-4 text-white mb-4 animated slideInRight">Nuestros Proyectos</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center justify-content-lg-start mb-0">
              <li class="breadcrumb-item"><a class="text-white" href="#">Inicio</a></li>
              <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
              <li class="breadcrumb-item text-white active" aria-current="page">Nuestros Proyectos</li>
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
  <!-- Case Start -->
  <div class="container-fluid bg-light py-5">
    <div class="container py-5">
      <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 500px;">
        <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">Casos de Estudio</div>
        <h1 class="mb-4">Nuestros Casos de estudios</h1>
      </div>
      <div class="row g-4">
        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="case-item position-relative overflow-hidden rounded mb-2">
            <img class="img-fluid" src="@/assets/img/project-1.jpg" alt="">
            <a class="case-overlay text-decoration-none"
              href="https://www.amazon.es/Cybersecurity-All-Dummies-Joseph-Steinberg/dp/139415285X">
              <small>All-in-One For Dummies</small>

              <span class="btn btn-square btn-primary"><i class="fa fa-arrow-right"></i></span>
            </a>
          </div>
        </div>
        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
          <div class="case-item position-relative overflow-hidden rounded mb-2">
            <img class="img-fluid" src="@/assets/img/project-2.jpg" alt="">
            <a class="case-overlay text-decoration-none"
              href="https://www.amazon.com/Cybersecurity-Beginners-comprehensive-getting-cybersecurity/dp/B07S9H7T17">
              <small>Ciberseguridad: Guía para Principiantes</small>

              <span class="btn btn-square btn-primary"><i class="fa fa-arrow-right"></i></span>
            </a>
          </div>
        </div>
        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
          <div class="case-item position-relative overflow-hidden rounded mb-2">
            <img class="img-fluid" src="@/assets/img/project-3.jpg" alt="">
            <a class="case-overlay text-decoration-none"
              href="https://www.amazon.es/Seguridad-inform%C3%A1tica-Malwares-implementaci%C3%B3n-contramedidas/dp/2409042961">
              <small>Seguridad informática y Malwares</small>

              <span class="btn btn-square btn-primary"><i class="fa fa-arrow-right"></i></span>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class="container-fluid bg-light py-5">
    <div class="container py-5">
      <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 500px;">
        <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">Conoce</div>
        <h1 class="mb-4">Lo que realizamos</h1>
      </div>
      <div class="row g-4 ">
        <!-- Primer caso -->
        <div class="col-lg-4 wow fadeIn border border-primary" data-wow-delay="0.3s">
          <div class="case-item position-relative overflow-hidden rounded mb-2">
            <video class="img-fluid" src="@/assets/videos/v1.mp4" muted loop playsinline onmouseover="this.play()"
              onmouseout="this.pause()" @click="unmuteVideo($event)"></video>

          </div>
        </div>

        <!-- Segundo caso -->
        <div class="col-lg-4 wow fadeIn border border-primary" data-wow-delay="0.5s">
          <div class="case-item position-relative overflow-hidden rounded mb-2">
            <video class="img-fluid" src="@/assets/videos/v2.mp4" muted loop playsinline onmouseover="this.play()"
              onmouseout="this.pause()" @click="unmuteVideo($event)"></video>

          </div>
        </div>

        <!-- Tercer caso -->
        <div class="col-lg-4 wow fadeIn border border-primary" data-wow-delay="0.7s">
          <div class="case-item position-relative overflow-hidden rounded mb-2">
            <video class="img-fluid" src="@/assets/videos/v3.mp4" muted loop playsinline onmouseover="this.play()"
              onmouseout="this.pause()" @click="unmuteVideo($event)"></video>

          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-light py-5">
    <div class="container py-5">
      <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 500px;">

      </div>
      <div class="row g-4 ">
        <!-- Primer caso -->
        <div class="col-lg-4 wow fadeIn border border-primary" data-wow-delay="0.3s">
          <div class="case-item position-relative overflow-hidden rounded mb-2">
            <video class="img-fluid" src="@/assets/videos/v4.mp4" muted loop playsinline onmouseover="this.play()"
              onmouseout="this.pause()" @click="unmuteVideo($event)"></video>

          </div>
        </div>

        <!-- Segundo caso -->
        <div class="col-lg-4 wow fadeIn border border-primary" data-wow-delay="0.5s">
          <div class="case-item position-relative overflow-hidden rounded mb-2">
            <video class="img-fluid" src="@/assets/videos/v5.mp4" muted loop playsinline onmouseover="this.play()"
              onmouseout="this.pause()" @click="unmuteVideo($event)"></video>

          </div>
        </div>

        <!-- Tercer caso -->
        <div class="col-lg-4 wow fadeIn border border-primary" data-wow-delay="0.7s">
          <div class="case-item position-relative overflow-hidden rounded mb-2">
            <video class="img-fluid" src="@/assets/videos/v6.mp4" muted loop playsinline onmouseover="this.play()"
              onmouseout="this.pause()" @click="unmuteVideo($event)"></video>

          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Case End -->
  <!-- FAQs Start -->
  <div class="container-fluid py-5">
    <div class="container py-5">
      <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 500px;">
        <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">Popular FAQs</div>
        <h1 class="mb-4">Preguntas Frecuentes (FAQ)</h1>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="accordion" id="accordionFAQ1">
            <div class="accordion-item wow fadeIn" data-wow-delay="0.1s">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  ¿Qué servicios ofrece TAG-MLM en el ámbito de la ciberseguridad?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionFAQ1">
                <div class="accordion-body">
                  Ofrecemos una gama completa de servicios que incluyen auditorías de seguridad,
                  gestión de incidentes, monitoreo continuo, pruebas de penetración (pentesting),
                  consultoría para el cumplimiento normativo y protección de datos, seguridad en la
                  nube, y capacitación en ciberseguridad para el personal.
                </div>
              </div>
            </div>
            <div class="accordion-item wow fadeIn" data-wow-delay="0.2s">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  ¿Cómo puedo saber si mi empresa necesita una auditoría de seguridad?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionFAQ1">
                <div class="accordion-body">
                  Si tu empresa maneja datos sensibles, utiliza sistemas conectados a internet o debe
                  cumplir con normativas de seguridad, es esencial realizar auditorías regulares. Una
                  auditoría te ayudará a identificar vulnerabilidades antes de que se conviertan en un
                  problema mayor.
                </div>
              </div>
            </div>
            <div class="accordion-item wow fadeIn" data-wow-delay="0.3s">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  ¿Qué hago si mi empresa ya ha sido víctima de un ciberataque?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionFAQ1">
                <div class="accordion-body">
                  En TAG-MLM contamos con un equipo especializado en la gestión de incidentes y
                  respuesta rápida. Si has sido víctima de un ciberataque, actuamos de inmediato para
                  contener el daño, investigar el incidente y restaurar la operatividad de tu empresa.
                </div>
              </div>
            </div>
            <div class="accordion-item wow fadeIn" data-wow-delay="0.4s">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                  ¿Qué es una prueba de penetración (Pentesting) y por qué es importante?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                data-bs-parent="#accordionFAQ1">
                <div class="accordion-body">
                  El pentesting es una simulación controlada de un ciberataque para evaluar la
                  seguridad de tus sistemas. Es fundamental para identificar posibles vulnerabilidades
                  antes de que puedan ser explotadas por hackers y para mejorar las defensas de tu
                  infraestructura.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="accordion" id="accordionFAQ2">
            <div class="accordion-item wow fadeIn" data-wow-delay="0.5s">
              <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  ¿Cómo garantiza TAG-MLM el cumplimiento normativo en ciberseguridad?
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                data-bs-parent="#accordionFAQ2">
                <div class="accordion-body">
                  Asesoramos a las empresas para cumplir con normativas internacionales como GDPR e
                  ISO 27001, y trabajamos para asegurar que todos los procesos y sistemas estén
                  alineados con los requisitos legales vigentes en cada sector.
                </div>
              </div>
            </div>
            <div class="accordion-item wow fadeIn" data-wow-delay="0.6s">
              <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  ¿Qué tipo de capacitación en ciberseguridad ofrecen para el personal?
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
                data-bs-parent="#accordionFAQ2">
                <div class="accordion-body">
                  Ofrecemos programas de formación diseñados para educar a los empleados sobre las
                  mejores prácticas en seguridad informática. Esto incluye la identificación de
                  amenazas comunes, cómo evitar ataques de phishing, y la importancia de manejar de
                  manera segura la información confidencial.
                </div>
              </div>
            </div>
            <div class="accordion-item wow fadeIn" data-wow-delay="0.7s">
              <h2 class="accordion-header" id="headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                  ¿Cómo funciona el monitoreo continuo de amenazas?
                </button>
              </h2>
              <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven"
                data-bs-parent="#accordionFAQ2">
                <div class="accordion-body">
                  Implementamos sistemas avanzados que monitorean la red y los sistemas de tu empresa
                  en tiempo real. Esto nos permite detectar y reaccionar de manera inmediata ante
                  cualquier actividad sospechosa o amenaza de seguridad.
                </div>
              </div>
            </div>
            <div class="accordion-item wow fadeIn" data-wow-delay="0.8s">
              <h2 class="accordion-header" id="headingEight">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                  ¿Por qué es importante la seguridad en la nube?
                </button>
              </h2>
              <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight"
                data-bs-parent="#accordionFAQ2">
                <div class="accordion-body">
                  La seguridad en la nube es crucial para proteger los datos y aplicaciones alojados
                  en plataformas cloud. TAG-MLM se asegura de que tu infraestructura en la nube esté
                  debidamente protegida contra accesos no autorizados, ataques y fugas de información,
                  garantizando la continuidad de tu negocio.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- FAQs Start -->

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
            <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" v-model="email" type="text"
              placeholder="Enter Your Email" style="height: 48px;">
            <button type="button" @click="enviarCodigo"
              class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
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
  name: 'proyect',

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
