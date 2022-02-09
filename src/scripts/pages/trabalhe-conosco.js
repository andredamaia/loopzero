import Scroll from '../utils/scroll'
import anime from 'animejs'
import $ from 'jquery'

const pageurl = document.querySelector('body').id

if(pageurl == 'trabalhe-conosco'){
    const scroll = new Scroll()

    // gsap.ticker.add(() => { 
    //     gsap.to('h2', {
    //       y: -scroll.screenPosition/2,
    //       autoAlpha: scroll.screenPosition/500,
    //       ease: 'power2.out',
    //       duration: 1.6
    //     })
    // })

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
}