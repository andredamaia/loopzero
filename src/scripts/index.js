import '../styles/styles.scss'

import Menu from './components/menu'
import Preload from './components/preload'

new Preload({ domElement: document.querySelector('.preload') })
new Menu({ domElement: document.querySelector('.menu') })