const abrirModal = () =>{
    document.getElementById('modal-conteiner').classList.add('active')

}

const fecharModal = () =>{
    document.getElementById('modal-conteiner').classList.remove('active')

}



document.getElementById('add').addEventListener('click' , abrirModal)

document.getElementById('fechar').addEventListener('click' , fecharModal)


