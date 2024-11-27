import $ from "jquery";
import store from "@/store";
import WOW from "@/assets/lib/wow/wow.min.js";
import "waypoints/lib/jquery.waypoints.min.js";
import counterUp from "counterup2";
import "owl.carousel";
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // Spinner
    var spinner = function () {
      setTimeout(function () {
        if ($("#spinner").length > 0) {
          $("#spinner").removeClass("show");
        }
      }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    

    // Sticky Navbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".sticky-top").addClass("bg-primary shadow-sm").css("top", "0px");
      } else {
        $(".sticky-top")
          .removeClass("bg-primary shadow-sm")
          .css("top", "-150px");
      }
    });

    // CounterUp functionality
    this.$nextTick(() => {
        document.querySelectorAll('[data-toggle="counter-up"]').forEach((el) => {
          counterUp(el, {
            duration: 2000,
            delay: 10,
          });
        });
      });

    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });
    $(".back-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });

    // Owl Carousel initialization
    /*this.$nextTick(() => {
        $(".testimonial-carousel").owlCarousel({
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
      });*/
  },
};
