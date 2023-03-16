import Preload from 'preload-it'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Load {
    constructor(options){
        this.container = options.domElement

        this.preload = Preload()
        this.preloadProgress = document.querySelector('.preload span')

        this.randomY = gsap.utils.random(30, 60)
        this.randomDuration = gsap.utils.random(0.5, 1.5)
        this.randomStagger = gsap.utils.random(0.1, 0.4)

        this.load()
    }

    load() {
        this.preload.fetch([
            '../public/images/favicon.png'
        ]).then(() => {
            // Animation executed when loading finish
            const enterAnimantion = gsap.timeline({ delay: 1 })
        
            enterAnimantion.to('.preload', {
                duration: .5,
                autoAlpha: 0,
                ease: 'power3.inOut'
            })
            enterAnimantion.to('.preload span', {
                duration: .8,
                autoAlpha: 0,
                skewY: 6,
                y: -20,
                delay: -.8,
                ease: 'power3.inOut'
            })
            enterAnimantion.fromTo(
                '.main *',
                {
                    autoAlpha: 0,
                    y: 30
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    ease: "power2.out",
                    stagger: .05,
                    duration: .6
                }
            )
            
            // General animation
            document.querySelectorAll("footer").forEach((text) => {
                const tl = gsap.timeline({
                  scrollTrigger: {
                    trigger: text,
                    end: "+=60%",
                  },
                });
            
                tl.set(text, {
                  autoAlpha: 0,
                  y: this.randomY,
                }).fromTo(
                  text,
                  {
                    autoAlpha: 0,
                  },
                  {
                    autoAlpha: 1,
                    duration: 1.8,
                    y: 0,
                    duration: this.randomDuration,
                    ease: "power2.out",
                  }
                );
            });
        })
        
        this.preload.onprogress = event => {
            this.preloadProgress.textContent = event.progress + '%'
        }
    }
}