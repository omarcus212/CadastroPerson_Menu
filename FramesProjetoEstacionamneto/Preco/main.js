const getHistoricoDeVeiculos = async () => {
    const url = 'http://localhost/ezequiel/fastparking/api/'
    const options = {
        method: 'POST',
        body: JSON.stringify(url),
        headers: {
            'content-type' : 'application/json'
        }
    }
  
    const resposta = await fetch(`${url}preco`)

    const dados = await resposta.json()
  
    return dados

}



const abrirmodal = () =>{

    document.getElementById('modal-conteiner').classList.add('active');
   
}

const fecharmodel = () =>{
    Limparcampos()
    document.getElementById('modal-conteiner').classList.remove('active');  
}


/* //função para pegar dados do localstorage
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_preco')) ?? []

//função para colocar dados dentro do localstorage
const setLocalStrorage = (dbpreco) => localStorage.setItem('db_preco', JSON.stringify(dbpreco))


//CRUD - create
const CriarPreco = (preco) => {
   const dbpreco = getLocalStorage() 
    dbpreco.push(preco)
    setLocalStrorage(dbpreco)
}

//CRUD - read
const readPreco = () => getLocalStorage()

//CRUD -update 
const updatePreco = (index,preco) =>{
    const dbpreco = readPreco() 
    dbpreco[index] = preco
    setLocalStrorage(dbpreco)
}

//CRUD - delete
const deletePreco = (index) => {
    const dbpreco = readPreco()
    dbpreco.splice(index,1)
    setLocalStrorage(dbpreco)
}

//Interação com o layout */


const createCampos = (preco) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
    <td class="tblColunas destaque">${preco.veiculo.tipo}</td>
    <td class="tblColunas destaque">R$ ${preco.precos.primeiraHora}</td>
    <td class="tblColunas destaque">R$ ${preco.precos.demaisHoras}</td>
    <td class="tblColunas registros ">
        <div class="divbutton-excluir-editar">
        <button type="button" class="button green" id="editar">Editar</button>
        <button type="button" class="button red" id="delete">Excluir</button>
        </div>

    </td>
    `

    document.querySelector('#tblConsulta').appendChild(newRow)
}

/* const limparTabela = () =>{
    const rows = document.querySelectorAll('#tblConsulta > tr ')
    rows.forEach(row => row.parentNode.removeChild(row))

}
 */



const updateTable =  async () => {
    const dbveiculos = await getHistoricoDeVeiculos()
    dbveiculos.forEach(createCampos)
}




updateTable()



/* const CamposValidos = () => {
    return document.getElementById('form').reportValidity()
}

const Limparcampos = () => {
    const campos = document.querySelectorAll('.boardCar')
    campos.forEach(campo => campo.value = "")
}

const editPreco = (index) => {
    const precos = readPreco()[index]
    precos.index = index
    PreencherCampos(precos)
    abrirmodal()
}

const PreencherCampos = (preco) => {
    document.getElementById('typeCar').value = preco.veiculo
    document.getElementById('primeirahora').value = preco.primeirahora
    document.getElementById('demaishoras').value = preco.demaishoras
    document.getElementById('primeirahora').dataset.index = preco.index 
    
} */
/* 
const editDelete = (event) => {
    if(event.target.type == 'button'){
    const [action , index] = event.target.id.split('-')
    
    if(action == 'editar'){
        editPreco(index)
    }else{
        const Veiculo = readPreco()[index]
        const response = confirm(`Deseja Realmente Excluir o Preço do veiculo ${Veiculo.veiculo}`)
        if(response){
        deletePreco(index)
        updateTable()
        }
    }

    }
} */


const SavePreco  = () => {
    const form = document.getElementById('form');

const custmor = {
 

}
 

}




//Eventos 
document.getElementById('add').addEventListener('click', abrirmodal);
document.getElementById('titlle_x').addEventListener('click', fecharmodel);

document.getElementById('btnAdd').addEventListener('click' , SavePreco)

document.querySelector('#tblConsulta').addEventListener('click' , editDelete)