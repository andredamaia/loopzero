import gsap from 'gsap'

export default class Menu {
    constructor(options){
        this.menu = options.domElement

        this.tl = gsap.timeline();

        this.openMenu = document.querySelector('.open-menu')
        this.closeMenu = document.querySelector('.close-menu')
        
        this.menuLinks = document.querySelector('.menu-links')

        this.checkMobile = false
        this.block = false

        this.open()
        this.close()
        this.links()
    }

    open() {
        this.openMenu.addEventListener('click', (e) => {
            e.preventDefault()
            
            if(this.block === true){
                this.tl.reverse();
                this.block = false
            } else {
                const screenWidth = screen.width
            
                screenWidth <= 768 ? this.checkMobile = true : this.checkMobile = false

                if (this.tl.reversed()) {
                    this.tl.play();
                    this.block = true
                    return
                } else {
                    this.tl.set('.menu', { height: 0 })
                    this.tl.set('.menu-header *', { y: -30, autoAlpha: 0 })
                    this.tl.set('.menu-links li', { skewY: -3, y: 15 })

                    this.tl.fromTo('.menu', {
                        y: -400,
                    }, {
                        duration: .5,
                        autoAlpha: 1,
                        height:'100vh',
                        ease: 'power4.Out',
                        y: 0
                    })

                    this.tl.to('.menu-header *', {
                        duration: .3,
                        autoAlpha: 1,
                        y: 0,
                        delay: -.2,
                        ease: 'power4.Out'
                    })

                    this.tl.to('.menu-links li', {
                        duration: .4,
                        autoAlpha: 1,
                        skewY: 0,
                        y: 0,
                        stagger: .1,
                        delay: -.1,
                        ease: 'power4.Out'
                    })

                    this.block = true
                }
            }
        })
    }

    close() {
        this.closeMenu.addEventListener('click', () => {
            this.tl.reverse();
            this.block = false
        })
    }

    links() {
        this.menuLinks.addEventListener('click', () => {
            this.tl.reverse();
            this.block = false
        })
    }
}