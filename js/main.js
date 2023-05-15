var swiper = new Swiper(".sec1Swiper", {
    slidesPerView: 1.3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },


    breakpoints: {

      1024: {
        slidesPerView: 3.3,
        spaceBetween: 30
      },

      640: {
        slidesPerView: 2.3,
        spaceBetween: 30
      }

    },

  });
// sec1

var swiper = new Swiper(".sec3Swiper", {
    slidesPerView: 1.3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },


    breakpoints: {

      1024: {
        slidesPerView: 3.3,
        spaceBetween: 30
      },

      640: {
        slidesPerView: 2.3,
        spaceBetween: 30
      }

    },

  });
// sec3
var swiper = new Swiper(".sec4Swiper", {
  slidesPerView: 2.5,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


});

