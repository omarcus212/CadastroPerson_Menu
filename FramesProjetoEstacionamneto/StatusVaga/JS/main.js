/*******************************************************************************************
* Objetivo: Arquivo responsável pelas model do arquivo e pela manipulação do banco local
* Autor: Ezequiel
* Data: 21/06/2022
* Versão: 1.0
*******************************************************************************************/


const getHistoricoDeVeiculos = async () => {
    const url = 'http://localhost/ezequiel/fastparking/api/'
    const options = {
        method: 'POST',
        body: JSON.stringify(url),
        headers: {
            'content-type' : 'application/json'
        }
    }
  
    const resposta = await fetch(`${url}vaga`)

    const dados = await resposta.json()
    
    return dados

}





const abrirModal = () =>{
    document.getElementById('modal-conteiner').classList.add('active')

}

const fecharModal = () =>{
    LimparCampos()
    document.getElementById('modal-conteiner').classList.remove('active')
}


/* //função para pegar dados do localstorage
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_status')) ?? []

//função para colocar dados dentro do localstorage
const setLocalStrorage = (dbcores) => localStorage.setItem('db_status', JSON.stringify(dbcores))


//CRUD - create
const CriarStatus = (client) => {
   const dbcliente = getLocalStorage() 
    dbcliente.push(client)
    setLocalStrorage(dbcliente)
}

//CRUD - read
const readStatus = () => getLocalStorage()

//CRUD -update 
const updateStatus = (index,cores) =>{
    const dbstatus = readStatus() 
    dbstatus[index] = cores
    setLocalStrorage(dbstatus)
}

//CRUD - delete
const deleteStatus = (index) => {
    const dbstatus = readStatus()
    dbstatus.splice(index,1)
    setLocalStrorage(dbstatus)
}

//Interação com o layout

const camposValidos = () => {
    return document.getElementById('form').reportValidity()
    
}

const LimparCampos = () => {
    const  pegarcampo = document.getElementById('model-field').value = ""
}


const saveStatus = () => {
   if(camposValidos()){
        const status = {
            nome: document.getElementById('model-field').value
        }
        const index = document.getElementById('model-field').dataset.index
        if(index == 'neew'){
        CriarStatus(status)
        updateTable()
        fecharModal()
        }else{
            updateStatus(index, status)
            updateTable()
            fecharModal()
        }
   }
} */

const criarLinha =  (status) => {
    const novaLinha = document.createElement('tr')
    novaLinha.innerHTML =`
    
    <td class="tblColunas destaque">${status.codigo}</td>                   
    <td class="tblColunas registros">
    
    <button type="button" class="button green" data-action="editar" id="edit-${status}">Editar</button>
    <button type="button" class="button red" data-action="delete" id="delete-${status}">Excluir</button>
                    
    </td> 
    `
    document.querySelector('#tblConsulta').appendChild(novaLinha)
}

const LimparTabela = () => {
    const linha = document.querySelectorAll('#tblConsulta > tr')
    linha.forEach(linhas => linhas.parentNode.removeChild(linhas))
      
}


const updateTable =  async () => {
    const dbveiculos = await getHistoricoDeVeiculos()
    
    dbveiculos.forEach(criarLinha)
}



const editStatus = (index) => {
    criarLinha(index)
    abrirModal()

}




updateTable()
//Eventos

document.getElementById('submit-adicionar').addEventListener('click', abrirModal)

document.getElementById('imgfecharmodal').addEventListener('click' , fecharModal)

/* document.querySelector('#teste > #tblConsulta').addEventListener('click' , editDelete) */






