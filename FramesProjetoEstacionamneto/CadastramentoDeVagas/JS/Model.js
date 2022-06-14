'use strict'
const abrirModal = () =>{
    document.getElementById('modal-conteiner').classList.add('active')

}

const fecharModal = () =>{
    document.getElementById('modal-conteiner').classList.remove('active')
}

document.getElementById('submit-adicionar').addEventListener('click' , abrirModal)

document.getElementById('imgfecharmodal').addEventListener('click' , fecharModal)



