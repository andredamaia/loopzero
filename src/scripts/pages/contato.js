import $ from 'jquery'
import Swal from 'sweetalert2'

import Scroll from '../utils/scroll'

const page = document.querySelector('body')

if(page.id == 'contato'){
    const scroll = new Scroll()
    const arquivo = $('#arquivo')

    arquivo.on('change', () => {
        $('.file span').text('Selecionado')
    })
}

if(page.classList.length > 0){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: 'Mensagem enviada'
    })
}