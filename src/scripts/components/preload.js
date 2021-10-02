import Preload from 'preload-it'
import ASScroll from '@ashthornton/asscroll'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);

export default class Preaload {
    constructor(options){
        this.container = options.domElement

        this.preload = Preload()
        this.preloadProgress = document.querySelector('.preload span')

        this.asscroll = new ASScroll({
            disableRaf: true
        })

        this.load()
    }

    load() {
        this.preload.fetch([
            '../boilerplate/dist/assets/images/share.jpg',
        ]).then(items => {
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

            gsap.fromTo(
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
                    delay: 1.5,
                    duration: .6
                }
            )

            this.asscroll.enable()

            gsap.ticker.add(this.asscroll.update);

            ScrollTrigger.defaults({
                scroller: this.asscroll.containerElement
            });

            ScrollTrigger.scrollerProxy(this.asscroll.containerElement, {
                scrollTop(value) {
                    if (arguments.length) {
                        this.asscroll.currentPos = value;
                        return;
                    }
                    return this.asscroll.currentPos;
                },
                getBoundingClientRect() {
                    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
                },
                fixedMarkers: true
            })

            this.asscroll.on("update", ScrollTrigger.update);
            ScrollTrigger.addEventListener("refresh", this.asscroll.resize);
            
            requestAnimationFrame(() => {
                this.asscroll.enable({
                    newScrollElements: document.querySelectorAll(".gsap-marker-start, .gsap-marker-end, [asscroll]")
                }); 
            });

            return this.asscroll;
        });
        
        this.preload.onprogress = event => {
            this.preloadProgress.textContent = event.progress + '%'
        }
    }
}

const tl = gsap.timeline({
    scrollTrigger: {
      trigger: 'footer',
      end: 'bottom top'
    },
});

tl.set('footer', {
    autoAlpha: 0,
    y: 30,
})
.fromTo(
    'footer',
    {
        autoAlpha: 0,
    },
    {
        autoAlpha: 1,
        y: 0,
        duration: .5,
    }
)
