<template>
  <!-- Hero Start -->
  <div class="container-fluid pt-5 bg-primary hero-header">
    <div class="container pt-5">
      <div class="row g-5 pt-5">
        <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
          <h1 class="display-4 text-white mb-4 animated slideInRight">Sobre Nosotros</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center justify-content-lg-start mb-0">
              <li class="breadcrumb-item"><a class="text-white" href="#">Inicio</a></li>
              <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
              <li class="breadcrumb-item text-white active" aria-current="page">Sobre Nosotros</li>
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


  <!-- About Start -->
  <div class="container-fluid py-5">
    <div class="container py-5">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div class="about-img">
            <img class="img-fluid" src="@/assets/img/about-img.jpg">
          </div>
        </div>
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">Sobre Nosotros</div>
          <h1 class="mb-4">Protegiendo Tu Futuro Digital</h1>
          <p class="mb-4">En TAG-MLM Consultoría en Ciberseguridad, nos dedicamos a proteger tu empresa de las
            crecientes amenazas del mundo digital. Nuestro equipo de expertos se especializa en soluciones
            de ciberseguridad personalizadas que no solo salvaguardan tus datos críticos, sino que también
            garantizan el cumplimiento de los estándares de seguridad a nivel global. </p>
          <p class="mb-4">Desde la detección y
            respuesta ante amenazas hasta la conformidad regulatoria, trabajamos de la mano con empresas de
            diversas industrias para crear entornos digitales resilientes, seguros y confiables. Permítenos
            ayudarte a construir un futuro más seguro para tu negocio.</p>
          <div class="row g-3">
            <div class="col-sm-6">
              <h6 class="mb-3"><i class="fa fa-check text-primary me-2"></i>Award Winning</h6>
              <h6 class="mb-0"><i class="fa fa-check text-primary me-2"></i>Personal especializado</h6>
            </div>
            <div class="col-sm-6">
              <h6 class="mb-3"><i class="fa fa-check text-primary me-2"></i>Soporte 24/7</h6>
              <h6 class="mb-0"><i class="fa fa-check text-primary me-2"></i>Fair Prices</h6>
            </div>
          </div>
          <div class="d-flex align-items-center mt-4">
            <a class="btn btn-outline-primary btn-square me-3"
              href="https://www.facebook.com/share/15SecrXnGG/?mibextid=LQQJ4d"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-outline-primary btn-square me-3" href="https://www.instagram.com/auditoria.ciberseguridad_?igsh=bHAwdGVjdjZpZmNw&utm_source=qr"><i class="fab fa-instagram"></i></a>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->


  <!-- Feature Start -->
  <div class="container-fluid bg-primary feature pt-5">
    <div class="container pt-5">
      <div class="row g-5">
        <div class="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn" data-wow-delay="0.3s">
          <div class="btn btn-sm border rounded-pill text-white px-3 mb-3">¿Por Qué Elegirnos?</div>
          <h1 class="text-white mb-4">Somos los mejores en ciberseguridad</h1>
          <p class="text-light mb-4">En TAG-MLM Consultoría en Ciberseguridad, nos destacamos por ofrecer
            soluciones personalizadas y efectivas que se adaptan a las necesidades específicas de cada
            cliente. Contamos con un equipo de expertos altamente capacitados que utilizan las últimas
            tecnologías y metodologías en ciberseguridad. Nuestro enfoque está orientado a la prevención de
            amenazas, la rápida respuesta ante incidentes y el cumplimiento normativo, asegurando que tu
            empresa esté siempre protegida. Nos comprometemos a brindar un servicio confiable, confidencial
            y de alta calidad, ayudando a construir un entorno digital seguro para tu crecimiento
            empresarial.</p>

          <div class="row g-4 pt-3">
            <div class="col-sm-6">
              <div class="d-flex rounded p-3" style="background: rgba(256, 256, 256, 0.1);">
                <i class="fa fa-users fa-3x text-white"></i>
                <div class="ms-3">
                  <h2 class="text-white mb-0" data-toggle="counter-up">9999</h2>
                  <p class="text-white mb-0">Clientes Felices</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="d-flex rounded p-3" style="background: rgba(256, 256, 256, 0.1);">
                <i class="fa fa-check fa-3x text-white"></i>
                <div class="ms-3">
                  <h2 class="text-white mb-0" data-toggle="counter-up">9999</h2>
                  <p class="text-white mb-0">Projectos Completos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 align-self-end text-center text-md-end wow fadeIn" data-wow-delay="0.5s">
          <img class="img-fluid" src="@/assets/img/feature.png" alt="">
        </div>
      </div>
    </div>
  </div>
  <!-- Feature End -->


  <!-- Team Start -->
  <div class="container-fluid bg-light py-5">
    <div class="container py-5">
      <div class="row g-5 align-items-center">
        <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
          <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">Nuestro Equipo</div>
          <h1 class="mb-4"> Equipo altamente capacitado y especializado</h1>
          <p class="mb-4">En TAG-MLM Consultoría en Ciberseguridad, contamos con un equipo altamente
            capacitado y especializado en todas las áreas de la seguridad informática. Nuestros expertos
            combinan años de experiencia en el sector con un enfoque proactivo para anticipar y mitigar
            amenazas cibernéticas. Cada miembro de nuestro equipo está comprometido con brindar soluciones
            innovadoras y personalizadas, asegurando que nuestros clientes reciban la protección y el
            soporte necesario para mantener sus activos digitales seguros. La pasión por la ciberseguridad y
            el compromiso con la excelencia nos impulsan a estar siempre a la vanguardia tecnológica.</p>

        </div>
        <div class="col-lg-7">
          <div class="row g-6">
            <div class="col-md-6">
              <div class="row g-6">
                <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div class="team-item bg-white text-center rounded p-4 pt-0">
                    <img class="img-fluid rounded-circle p-4"
                      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png" alt="">
                    <h5 class="mb-0">Michelle Quinto</h5>
                    <small>Director(a) de Ciberseguridad</small>
                    <div class="d-flex justify-content-center mt-3">
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-twitter"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-instagram"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div class="team-item bg-white text-center rounded p-4 pt-0">
                    <img class="img-fluid rounded-circle p-4"
                      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png" alt="">
                    <h5 class="mb-0">Nathaly Trejo</h5>
                    <small>Analista de Seguridad Informática</small>
                    <div class="d-flex justify-content-center mt-3">
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-twitter"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-instagram"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <div class="col-md-6 pt-md-4">
              <div class="row g-6">
                <div class="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div class="team-item bg-white text-center rounded p-4 pt-0">
                    <img class="img-fluid rounded-circle p-4"
                      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png" alt="">
                    <h5 class="mb-0">Anni Giler</h5>
                    <small>Ingeniero de Seguridad en Redes</small>
                    <div class="d-flex justify-content-center mt-3">
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-twitter"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-instagram"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 wow fadeIn" data-wow-delay="0.7s">
                  <div class="team-item bg-white text-center rounded p-4 pt-0">
                    <img class="img-fluid rounded-circle p-4"
                      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png" alt="">
                    <h5 class="mb-0">Jania García</h5>
                    <small>Consultor en Cumplimiento Normativo</small>
                    <div class="d-flex justify-content-center mt-3">
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-twitter"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-instagram"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <div class="col-md-6">
              <div class="row g-6">
                <div class="col-12 wow fadeIn" data-wow-delay="0.7s">
                  <div class="team-item bg-white text-center rounded p-4 pt-0">
                    <img class="img-fluid rounded-circle p-4"
                      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png" alt="">
                    <h5 class="mb-0">Cristina Acosta</h5>
                    <small>Especialista en Pruebas de Penetración (Pentesting)</small>
                    <div class="d-flex justify-content-center mt-3">
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-twitter"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-instagram"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>


              </div>
            </div>

            <div class="col-md-6 pt-md-4">
              <div class="row g-6">
                <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div class="team-item bg-white text-center rounded p-4 pt-0">
                    <img class="img-fluid rounded-circle p-4"
                      src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                      alt="">
                    <h5 class="mb-0">Luis Montaño</h5>
                    <small>Analista de Seguridad Informática</small>
                    <div class="d-flex justify-content-center mt-3">
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-twitter"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-instagram"></i></a>
                      <a class="btn btn-square btn-primary m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Team End -->


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
  name: 'about',

  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('@/assets/css/style.css');
</style>
