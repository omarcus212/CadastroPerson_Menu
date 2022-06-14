/*importando as funcoes exportadas*/

import { limparCampoModal } from "./apiTipoVeiculo.js";


const abrirModal = () =>{
    document.getElementById('modal-conteiner').classList.add('active')

}

const fecharModal = () =>{
    document.getElementById('modal-conteiner').classList.remove('active');
    limparCampoModal();
}

document.getElementById('submit-adicionar').addEventListener('click' , abrirModal);
document.getElementById('imgFechar').addEventListener('click' , fecharModal);


export{
    fecharModal,
    abrirModal
}