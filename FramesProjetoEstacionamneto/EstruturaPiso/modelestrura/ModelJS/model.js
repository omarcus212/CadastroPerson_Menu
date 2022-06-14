'use strict'

/*******************************************************************************************
* Objetivo: Arquivo responsável pelas models do arquivo e pela manipulação do banco local
* Autor: Ezequiel
* Data: 21/06/2022
* Versão: 1.0
*******************************************************************************************/



/**************************************  PARTE DAS MODELS ********************************************/

//Modal CORREDOR!

const abrirModalCorredor = () =>{
    document.getElementById('modalcorredor').classList.add('active')
}

const fecharModalCorredor = () =>{
    document.getElementById('modalcorredor').classList.remove('active')

}


//Modal PISO !

const abrirModalPiso = () =>{
    document.getElementById('modalpreco').classList.add('active')
}

const fecharModalPiso = () =>{
    LimparCamposPiso()
    document.getElementById('modalpreco').classList.remove('active')

}


//Modal SETOR !
const abrirModalSetor = () =>{
    document.getElementById('modal-conteiner').classList.add('active')
}

const fecharModalSetor = () =>{
     LimparCamposSetor() 
    document.getElementById('modal-conteiner').classList.remove('active')

}


const OpenModalCorrespondente = () => {
    var select = document.getElementById("filtrarModel");
    var opcaoValor = select.options[select.selectedIndex].value;
   

    if(opcaoValor == 'selecioneumitem'){
        confirm('Selecione uma modal antes de tentar Adicionar um elemento')
    }else{
        if(opcaoValor == 'modelcorredor'){
            abrirModalCorredor()
        }else if(opcaoValor == 'modelsetor'){
            abrirModalSetor()
        }
        else if(opcaoValor == 'modelpiso'){
            abrirModalPiso()
        }
    }
    
        
}


/**************************************  CRUD PISO ********************************************/


//função para pegar dados do localstorage
const getLocalStoragePiso = () => JSON.parse(localStorage.getItem('db_piso')) ?? []

//função para colocar dados dentro do localstorage
const setLocalStroragePiso = (dbestrutura) => localStorage.setItem('db_piso', JSON.stringify(dbestrutura))


//CRUD - create
const CriarEstrutura = (estrutura) => {
   const dbestrutura = getLocalStoragePiso() 
    dbestrutura.push(estrutura)
    setLocalStroragePiso(dbestrutura)
}

//CRUD - read
const readEstrutura = () => getLocalStoragePiso()

//CRUD -update 
const updateEstrutura = (index,estrutura) =>{
    const dbestrutura = readEstrutura() 
    dbestrutura[index] = estrutura
    setLocalStroragePiso(dbestrutura)
}

//CRUD - delete
const deleteEstrutura = (index) => {
    const dbestrutura = readEstrutura()
    dbestrutura.splice(index,1)
    setLocalStroragePiso(dbestrutura)
}




/**************************************  MANIPULÇÃO CRUD ESTRUTURA PISO ********************************************/


const CamposValidosPiso = () => {
    var select = document.getElementById('selectPiso');
    var opcaoValor = select.options[select.selectedIndex].value;
    if(opcaoValor == 'selecioneumitem'){
        confirm('Selecione um Tipo Antes de Adicionar')
    }else{
    return document.getElementById('form').reportValidity()
    }
}


const LimparCamposPiso = () => {
    const campos = document.querySelectorAll('.typeCarPiso')
    campos.forEach(campo => campo.value = "" );
}

const SaveEstruturaPiso = () => {
    if(CamposValidosPiso()){
        const estrutura = {
        nomepiso: document.getElementById('typetexpiso').value,
        tipo: document.getElementById('selectPiso').value
        }
        const index = document.getElementById('typetexpiso').dataset.index
        if(index == 'new'){
        CriarEstrutura(estrutura)
        updateTableEstrutura()
        fecharModalPiso()
        }else{
           updateEstrutura(index, estrutura)
           updateTableEstrutura()
           fecharModalPiso()
        }

        
    }

    
}

const createEstruturaPiso = (estrutura , index) => {
    const newestrutura = document.createElement('tr')
    newestrutura.innerHTML = `
    <tr id="tblLinhasPiso">
    <td class="tblColunas destaque">${estrutura.nomepiso}</td>
    <td class="tblColunas destaque">${estrutura.tipo}</td>
    <td class="tblColunas registros">
    <button type="button" class="button green" id="editar-${index}">Editar</button>
    <button type="button" class="button red" id="delete-${index}">Excluir</button>
    </td> 
    </tr>
    `
    document.getElementById('Consulta').appendChild(newestrutura)
}





const PreencherCamposPiso = (client) => {
    document.getElementById('typetexpiso').value = client.nomepiso
    document.getElementById('selectPiso').value = client.tipo
    document.getElementById('typetexpiso').dataset.index = client.index
}

const editEstruturaPiso = (index) => {
    const cliente = readEstrutura()[index]
    cliente.index = index
    PreencherCamposPiso(cliente)
    abrirModalPiso()

}


const editDeletePiso = (event) => {
    if(event.target.type){

        const [action, index] = event.target.id.split('-')

        if(action == "editar"){
          editEstruturaPiso(index)
        }else if(action == "delete"){
            const piso = readEstrutura()[index]
            const response = confirm(`Deseja realmente excluir esse ${piso.tipo} ?`)
           if(response){ 
          deleteEstrutura(index)
          updateTableEstrutura()
           }else{
            updateTableEstrutura()
           }
        }
    }
}





/**************************************  CRUD SETOR ********************************************/


//função para pegar dados do localstorage
const getLocalStorageSetor = () => JSON.parse(localStorage.getItem('db_setor')) ?? []

//função para colocar dados dentro do localstorage
const setLocalStrorageSetor = (dbestruturaSetor) => localStorage.setItem('db_setor', JSON.stringify(dbestruturaSetor))


//CRUD - create
const CriarEstruturaSetor = (estrutura) => {
   const dbestruturaSetor = getLocalStorageSetor() 
    dbestruturaSetor.push(estrutura)
    setLocalStrorageSetor(dbestruturaSetor)
}

//CRUD - read
const readEstruturaSetor = () => getLocalStorageSetor()

//CRUD -update 
const updateEstruturaSetor = (index,estrutura) =>{
    const dbestruturaSetor = readEstruturaSetor() 
    dbestruturaSetor[index] = estrutura 
    setLocalStrorageSetor(dbestruturaSetor)
}

//CRUD - delete
const deleteEstruturaSetor = (index) => {
    const dbestruturaSetor = readEstruturaSetor()
    dbestruturaSetor.splice(index,1)
    setLocalStrorageSetor(dbestruturaSetor)
}


/**************************************  MANIPULÇÃO CRUD ESTRUTURA SETOR ********************************************/

const CamposValidosSetor = () => {
    var selectsetor = document.getElementById('tiposetor');
    var opcaoValorsetor = selectsetor.options[selectsetor.selectedIndex].value;
    var selectpiso = document.getElementById('pisosetor');
    var opcaoValorpiso = selectpiso.options[selectpiso.selectedIndex].value;
    const caixanome = document.getElementById('typetexsetor').value
    if(caixanome == '' || opcaoValorsetor == 'selecioneumitem' || opcaoValorpiso == 'selecioneumitem'){
        if(caixanome == ''){
            confirm('Preencha o nome !')
        }else if(opcaoValorsetor == 'selecioneumitem'){
            confirm('Selecione um TIPO Antes de Adicionar')
        }else if(opcaoValorpiso == 'selecioneumitem'){
            confirm('Selecione um PISO Antes de Adicionar')
        }
    }else{
        return true
    }
  
}
const LimparCamposSetor = () => {
    const campossetor = document.querySelectorAll('.typeCarSetor')
    campossetor.forEach(campo => campo.value = "" );
}


const SaveEstruturaSetor = () => {
    if(CamposValidosSetor()){
        const client = {
            setor: document.getElementById('typetexsetor').value,
            piso: document.getElementById('pisosetor').value,
            tipo: document.getElementById('tiposetor').value
        }
        const index = document.getElementById('typetexsetor').dataset.index
        if(index == 'newsetor'){
            CriarEstruturaSetor(client)
            updateTableEstrutura()
            fecharModalSetor()
        }else{
            updateEstruturaSetor(index , client)
            updateTableEstrutura()
            fecharModalSetor()
        }
       
    }
}

const createEstruturaSetor = (client , index) => {
     const novosetor = document.createElement('tr')
     novosetor.innerHTML = `
     
     <td class="tblColunas destaque">${client.setor}</td>
     <td class="tblColunas destaque">${client.tipo}</td>
     <td class="tblColunas registros">
     <button type="button" class="button green" id="editarsetor-${index}">Editar</button>
     <button type="button" class="button red" id="deletarsetor-${index}">Excluir</button>
     </td> 
    
     
     `
     document.getElementById('Consulta').appendChild(novosetor)
}

const limparTabelaPiso = () => {
    const linhas = document.querySelectorAll('#Consulta > tr')
    linhas.forEach(linha => linha.parentNode.removeChild(linha))
}



const updateTableEstrutura = () =>{
    const dbestruturasetor = readEstruturaSetor()
    limparTabelaPiso()
    dbestruturasetor.forEach(createEstruturaSetor)
    const dbestrutura = readEstrutura()
    dbestrutura.forEach(createEstruturaPiso)
    
}

const PreencherCamposSetor = (setores) => {
    document.getElementById('typetexsetor').value = setores.setor
    document.getElementById('tiposetor').value = setores.tipo
    document.getElementById('pisosetor').value = setores.piso
    document.getElementById('typetexsetor').dataset.index = setores.index
}

const editEstruturaSetor = (index) => {
    const client = readEstruturaSetor()[index]
    client.index = index
    PreencherCamposSetor(client)
    abrirModalSetor()
}

const editDeleteSetor = (evento) => {
    if(evento.target.type == 'button'){
        const [action , index] = evento.target.id.split('-')
      if(action == 'editarsetor'){
        editEstruturaSetor(index)
      }else if (action == 'deletarsetor'){
        const dbestrutura = readEstruturaSetor()[index]
        const response = confirm(`Tem certeza que deseja excluir esse ${dbestrutura.tipo} ? `)
        if(response){
        deleteEstruturaSetor(index)
        updateTableEstrutura()
        }
      }
    }
}

updateTableEstrutura()

 
/**************************************  EVENTOS MODAL ********************************************/

document.getElementById('add').addEventListener('click' , OpenModalCorrespondente)
document.getElementById('fecharpiso').addEventListener('click' , fecharModalPiso)
document.getElementById('fecharsetor').addEventListener('click' , fecharModalSetor)
document.getElementById('fecharcorredor').addEventListener('click' , fecharModalCorredor)

/**************************************  EVENTOS CRUD GLOBAL ********************************************/

document.getElementById('btnAddPiso').addEventListener('click', SaveEstruturaPiso)

document.querySelector('#Consulta').addEventListener('click', editDeletePiso)

document.getElementById('btnAddsetor').addEventListener('click' , SaveEstruturaSetor)

document.querySelector('#Consulta').addEventListener('click', editDeleteSetor)



