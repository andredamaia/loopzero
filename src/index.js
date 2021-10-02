import './styles/styles.scss'

import Menu from './scripts/components/menu'
import Preload from './scripts/components/preload'

new Preload({ domElement: document.querySelector('.preload') })
new Menu({ domElement: document.querySelector('.menu') })