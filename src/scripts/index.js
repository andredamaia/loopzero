import '../styles/index.scss'

import Load from './utils/load'
// import Menu from './components/menu'

import './pages/home'
import './pages/contato'
import './pages/blog'
import './pages/empresa'
import './pages/post'
import './pages/servicos'
import './pages/trabalhe-conosco'

new Load({ domElement: document.querySelector('.preload') })
// new Menu({ domElement: document.querySelector('.menu') })