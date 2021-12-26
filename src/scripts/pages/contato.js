import $ from 'jquery'

import Scroll from '../utils/scroll'

const pageurl = document.querySelector('body').id

if(pageurl == 'contato'){
    const scroll = new Scroll()
    const arquivo = $('#arquivo')

    arquivo.on('change', () => {
        $('.file span').text('Selecionado')
    })
}

