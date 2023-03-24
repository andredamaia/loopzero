import gsap from 'gsap'
import Swiper from 'swiper';
import $ from 'jquery';
import Inputmask from 'inputmask'

import Scroll from '../utils/scroll'

const pageurl = document.querySelector('body').id

if(pageurl == 'artigo-interna'){
    const scroll = new Scroll()

    // gsap.ticker.add(() => { 
    //     gsap.to('h2', {
    //       y: -scroll.screenPosition/2,
    //       autoAlpha: scroll.screenPosition/500,
    //       ease: 'power2.out',
    //       duration: 1.6
    //     })
    // })

    gsap.ticker.add(() => { 
      if(scroll.screenPosition > 150){
          $('header').addClass('active')
      } else {
          $('header').removeClass('active')
      }
    })

    const swiperArtigos = new Swiper('.swiper-artigos', {
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 60,
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 25,
        },
        822: {
          slidesPerView: 'auto',
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    $('.toggle-header').on('click', function(){
      $(this).parent().toggleClass('active');

      window.dispatchEvent(new Event('resize'))
    });

    $(".back-to-top").on('click', function () {
      $("html, body").animate({scrollTop: 0}, 1000);
    });

    $('.button-scroll').on('click', function(){
       
      const scroll = $(this).data('scroll')
      const position = $('#' + scroll).offset().top

      $("body,html").animate(
      {
          scrollTop : position
      }, 600);
  })

  Inputmask({"mask": "(99) 99999-9999"}).mask('#phone')

  const swiperNoticeGallery = new Swiper('.swiper-notice-gallery', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      822: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
})
}