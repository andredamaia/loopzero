import ASScroll from '@ashthornton/asscroll'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Scroll {
    constructor(){
        this.screenPosition = 0

        this.scroll = this.scroll()
    }

    scroll() {
        const asscroll = new ASScroll({
            disableRaf: true
        });
    
        gsap.ticker.add(asscroll.update);
        gsap.ticker.add(() => { 
            // Maintain the scroll position synced
            this.screenPosition = asscroll.currentPos
        })
    
        ScrollTrigger.defaults({
            scroller: asscroll.containerElement
        });
    
        ScrollTrigger.scrollerProxy(asscroll.containerElement, {
            scrollTop(value) {
                if (arguments.length) {
                    asscroll.currentPos = value;
                    return;
                }
                return asscroll.currentPos;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
            },
            fixedMarkers: true
        });
    
        asscroll.on("update", ScrollTrigger.update);
        ScrollTrigger.addEventListener("refresh", asscroll.resize);
        
        requestAnimationFrame(() => {
            asscroll.enable({
                newScrollElements: document.querySelectorAll(".gsap-marker-start, .gsap-marker-end, [asscroll]")
            }); 
        });

        return asscroll;
    }
}