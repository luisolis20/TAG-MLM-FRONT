<template>
  <!-- Hero Start -->
  <div class="container-fluid pt-5 bg-primary hero-header mb-5">
    <div class="container pt-5">
      <div class="row g-5 pt-5">
        <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
          <div class="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">TAG-MLM</div>
          <h1 class="display-4 text-white mb-4 animated slideInRight">Asesoría en ciberseguridad</h1>
          <p class="text-white mb-4 animated slideInRight">Excelencia técnica y larga experiencia en
            ciberseguridad combinada con nuestras capacidades en servicios</p>
          <a href="" class="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight">TAG-MLM</a>
          <a href="contact.html"
            class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contáctanos</a>
        </div>
        <div class="col-lg-6 align-self-end text-center text-lg-end">
          <img class="img-fluid" src="@/assets/img/hero-img.png" alt="">
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
    <div class="container">
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


  <!-- Service Start -->
  <div class="container-fluid bg-light mt-5 py-5">
    <div class="container py-5">
      <div class="row g-5 align-items-center">
        <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
          <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">Nuestros Servicios</div>
          <h1 class="mb-4">Auditamos sus sistemas y los defendemos</h1>
          <p class="mb-4">TAG-MLM es uno de los principales proveedores de servicios de
            ciberseguridad. Un equipo técnico de especialistas del más alto nivel y soluciones de última
            generación para proveer servicios de auditoría, pentesting, gestión de vulnerabilidades y
            respuesta.</p>
          <router-link :to="{ path: '/services/'}" class="btn btn-primary rounded-pill px-4">Ver todos los servicios</router-link>
        </div>
        <div class="col-lg-7">
          <div class="row g-4">
            <div class="col-md-6">
              <div class="row g-4">
                <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div class="service-icon btn-square">
                      <i class="fas fa-desktop fa-2x"></i>
                    </div>
                    <h5 class="mb-3">Auditoría de Seguridad Informática</h5>
                    <p>Evaluamos la infraestructura tecnológica de tu empresa para identificar
                      vulnerabilidades y proponer mejoras que garanticen la seguridad de tus
                      sistemas y datos.
                    </p>
                  </div>
                </div>
                <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div class="service-icon btn-square">
                      <i class="fas fa-satellite-dish fa-2x"></i>
                    </div>
                    <h5 class="mb-3">Ciberinteligencia</h5>
                    <p>Descubrimos amenazas, apoyamos su negocio
                      Metodología propia de inteligencia de amenazas dirigida, alineada con los
                      estándares Tiber-EU, NIS2 y DORA para proveer información de alta calidad a
                      su estrategia de negocio. Prevención del fraude, con soluciones pioneras
                      contra el phishing y la piratería digital</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 pt-md-4">
              <div class="row g-4">
                <div class="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div class="service-icon btn-square">
                      <i class="fas fa-passport fa-2x"></i>
                    </div>
                    <h5 class="mb-3">Consultoría en Protección de Datos</h5>
                    <p>Ofrecemos asesoría especializada para proteger los datos sensibles de tu
                      organización y asegurar que se manejen de acuerdo con las mejores prácticas
                      de seguridad.</p>

                  </div>
                </div>
                <div class="col-12 wow fadeIn" data-wow-delay="0.7s">
                  <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div class="service-icon btn-square">
                      <i class="fas fa-user-lock fa-2x"></i>
                    </div>
                    <h5 class="mb-3">Seguridad en la Nube</h5>
                    <p>Ofrecemos servicios para proteger la infraestructura y los datos alojados en
                      plataformas cloud, asegurando su integridad y confidencialidad, sin
                      comprometer la flexibilidad y escalabilidad de los sistemas en la nube..</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Service End -->


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


  <!-- Case Start -->
  <div class="container-fluid bg-light py-5">
    <div class="container py-5">
      <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 500px;">
        <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">Casos de Estudio</div>
        <h1 class="mb-4">Nuestros Libros</h1>
      </div>
      <div class="row g-4">
        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
          <div class="case-item position-relative overflow-hidden rounded mb-2">
            <img class="img-fluid" src="@/assets/img/project-1.jpg" alt="">
            <a class="case-overlay text-decoration-none" href="https://www.amazon.es/Cybersecurity-All-Dummies-Joseph-Steinberg/dp/139415285X">
              <small>All-in-One For Dummies</small>

              <span class="btn btn-square btn-primary"><i class="fa fa-arrow-right"></i></span>
            </a>
          </div>
        </div>
        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
          <div class="case-item position-relative overflow-hidden rounded mb-2">
            <img class="img-fluid" src="@/assets/img/project-2.jpg" alt="">
            <a class="case-overlay text-decoration-none" href="https://www.amazon.com/Cybersecurity-Beginners-comprehensive-getting-cybersecurity/dp/B07S9H7T17">
              <small>Ciberseguridad: Guía para Principiantes</small>

              <span class="btn btn-square btn-primary"><i class="fa fa-arrow-right"></i></span>
            </a>
          </div>
        </div>
        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
          <div class="case-item position-relative overflow-hidden rounded mb-2">
            <img class="img-fluid" src="@/assets/img/project-3.jpg" alt="">
            <a class="case-overlay text-decoration-none" href="https://www.amazon.es/Seguridad-inform%C3%A1tica-Malwares-implementaci%C3%B3n-contramedidas/dp/2409042961">
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
</template>

<script>
import 'owl.carousel';
import script2 from '@/assets/js/main.js';
import script4 from "@/store/datas.js";
export default {
  mixins: [script2,script4],
  name: 'index',

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
