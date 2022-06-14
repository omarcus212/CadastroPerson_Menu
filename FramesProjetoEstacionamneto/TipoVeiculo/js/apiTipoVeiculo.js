'use strct'
import { fecharModal,abrirModal } from "./Model.js";


const getlocalstorid = () => JSON.parse(localStorage.getItem('dbtipoVeiculo'))?? []; 
const setlocalstorid = (dbtipoVeiculo) => localStorage.setItem("dbtipoVeiculo", JSON.stringify(dbtipoVeiculo));





const creatTipoVeiculos = (tipo) =>{
const dbTpVeiculo = getlocalstorid();
dbTpVeiculo.push(tipo);
setlocalstorid(dbTpVeiculo);

}

const readTipo = () =>getlocalstorid();


const update = (index,dados) =>{
   
   const dbtipo = readTipo();
   dbtipo[index] = dados;
    setlocalstorid(dbtipo);
}


const deletar = (index) =>{ 
   const dbtipo = readTipo();
   dbtipo.splice(index,1);
   setlocalstorid(dbtipo); 

}


/*interação com user*/

/*validando campos */
const isValid = () =>{
    return document.getElementById('formTipoV').reportValidity();

}


/*limpar campos digitados*/
const limparCampoModal = () =>{
    const campoModal = document.getElementById('txtNome');
    campoModal.value = " ";
}





document.getElementById('add').addEventListener('click',salvaTipo);
document.querySelector('#tblConsulta').addEventListener('click', editarExcluir);/*pegando info das trs para saber quais conteudos foram clidados (nesse caso so preciso da img = button)*/
/*exportando as funcaoes para usar em outros lugar do projeto*/
export{
  limparCampoModal
}