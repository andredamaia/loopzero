import '../styles/index.scss'

import Load from './utils/load'
import Menu from './components/menu'

import './pages/home'
import './pages/contato'

new Load({ domElement: document.querySelector('.preload') })
new Menu({ domElement: document.querySelector('.menu') })