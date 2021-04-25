var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      //clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });

  var swiper = new Swiper('.swiper-container-lg', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      //clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    }
  });