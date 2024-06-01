const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // loopedSlides: 1,
    slidesPerView: 3,
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    spaceBetween: 10,
    centeredSlides: false,


    // auto play option
    autoplay: {
      delay: 3000,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hide: true,
    },
  });
  