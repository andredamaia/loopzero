import gsap from 'gsap'
import $ from 'jquery'
import Swiper, { Navigation } from 'swiper'
import anime from 'animejs'

import Scroll from '../utils/scroll'

Swiper.use([Navigation]);

const pageurl = document.querySelector('body').id

if(pageurl == 'home'){
    const scroll = new Scroll()

    // gsap.ticker.add(() => { 
    //     gsap.to('h2', {
    //       y: -scroll.screenPosition/2,
    //       autoAlpha: scroll.screenPosition/500,
    //       ease: 'power2.out',
    //       duration: 1.6
    //     })
    // })

    // Sliders
    const sliderBanner = new Swiper('.slider-banner', {
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 5000,
        },

        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
    })

    const openVideo = document.querySelector('.open-video')
    const closeVideo = document.querySelector('.close-video')
    const layerVideo = document.querySelector('.layer-video')

    if(openVideo){
        openVideo.addEventListener('click', () => {
            gsap.to(layerVideo, {
            autoAlpha: 1,
            })
        })
    }

    closeVideo.addEventListener('click', () => {
        gsap.to(layerVideo, {
            autoAlpha: 0,
        })

        $('#video').attr('src', 'https://www.youtube.com/embed/kcgTW0735dI')
    })

    const menuButton = document.querySelector('.open-menu')
    const menuClose = document.querySelector('.close-menu')
    const menuListButton = document.querySelector('.mobile-menu-list')
    const tl = gsap.timeline();

    let checkMobile = false
    let block = false

    menuListButton.addEventListener('click', () => {
        tl.reverse();
        block = false
    })

    menuClose.addEventListener('click', () => {
        tl.reverse();
        block = false
    })

    menuButton.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(block === true){
        tl.reverse();
        block = false
    } else {
        const screenWidth = screen.width
    
        screenWidth <= 768 ? checkMobile = true : checkMobile = false

        if (tl.reversed()) {
        tl.play();
        block = true
        return
        } else {
        tl.set('.mobile-menu', { height: 0 })
        tl.set('.mobile-menu-header img', { y: -30, autoAlpha: 0 })
        tl.set('.mobile-menu-list li', { skewY: -3, y: 15 })

        tl.fromTo('.mobile-menu', {
            y: -400,
        }, {
            duration: .5,
            autoAlpha: 1,
            height:'100vh',
            ease: 'power4.Out',
            y: 0
        })

        tl.to('.mobile-menu-header img', {
            duration: .3,
            autoAlpha: 1,
            y: 0,
            delay: -.2,
            ease: 'power4.Out'
        })

        tl.to('.mobile-menu-list li', {
            duration: .4,
            autoAlpha: 1,
            skewY: 0,
            y: 0,
            stagger: .1,
            delay: -.1,
            ease: 'power4.Out'
        })

        block = true
        }
    }
    })


    var anos = document.querySelector('.numbers-anos');
    var empresas = document.querySelector('.numbers-empresas');
    var colaboradores = document.querySelector('.numbers-colaboradores');
    var clientes = document.querySelector('.numbers-clientes');

    var battery = {
        anos: '0',
        empresas: '0+',
        colaboradores: '0',
        clientes: '0'
    }

    window.addEventListener('scroll', (event) => {
        console.log($(window).scrollTop())
        if($(window).scrollTop() > $( ".numbers" ).offset().top - ($(window).height() / 2)){
            anime({
                targets: battery,
                anos: '48',
                empresas: '1500+',
                colaboradores: '30',
                clientes: '350',
                round: 1,
                easing: 'cubicBezier(.5, .05, .1, .3)',
                duration: 1750,
                update: function() {
                    anos.innerHTML = battery.anos;
                    empresas.innerHTML = battery.empresas;
                    colaboradores.innerHTML = battery.colaboradores;
                    clientes.innerHTML = battery.clientes;
                }
            })
        }
    })

    
    
    $('.box-question').on('click', function(){
      $('.question-body', this).slideToggle();
      $(this).toggleClass('active')

      return false;
    });
}