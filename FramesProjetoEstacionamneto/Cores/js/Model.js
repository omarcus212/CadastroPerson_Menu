
const abrirModal = () =>{
    document.getElementById('modal-conteiner').classList.add('active')

}

const fecharModal = () =>{
    document.getElementById('modal-conteiner').classList.remove('active')
    
}


export{
    abrirModal,
    fecharModal
}

document.getElementById('submit-adicionar').addEventListener('click' , abrirModal)

document.getElementById('imgFechar').addEventListener('click' , fecharModal)