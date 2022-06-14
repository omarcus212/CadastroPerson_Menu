/*******************************************************************************************
* Objetivo: Arquivo responsável pelas model do arquivo e pela manipulação do banco local
* Autor: Ezequiel
* Data: 21/06/2022
* Versão: 1.0
*******************************************************************************************/


import {getHistoricoDeVeiculos} from './Consumo.js'


const abrirModalSaida = () => {
    document.getElementById('containerModel_saida').classList.add('active');
}

const fecharmodalTicket = () => {
    document.getElementById('containerModel_saida').classList.remove('active');
}

const abrirmodal = () =>{
    document.getElementById('modalVeiculo').classList.add('active');
    document.getElementById('todamodel').classList.add('active');

}

const fecharmodalButton = () =>{
    limparCampos()
    document.getElementById('modalVeiculo').classList.remove('active');
    document.getElementById('todamodel').classList.remove('active');
}


const fecharmodal = () =>{
    limparCampos()
    document.getElementById('modalVeiculo').classList.remove('active');
    document.getElementById('todamodel').classList.remove('active');
    abrirModalSaida()

}




/******************************************************** MANIPULAÇÃO API *********************************************************/

const limparCampos = () => {
    const campos = document.querySelectorAll('.modal-field')
    campos.forEach(campo => campo.value = "" )
}


const createCampos = (item) => {
    const newcampos = document.createElement('tr')
    newcampos.innerHTML = `
    
    <td id="tblTitulo">
        <td class="tblColunas destaque corModelo ">${item.veiculo.modelo}</td>
        <td class="tblColunas destaque tipocar ">${item.veiculo.tipo}</td>
        <td class="tblColunas destaque placaCar">${item.veiculo.placa}</td>
        <td class="tblColunas destaque vagaCar">${item.vaga.sigla}</td>
        <td class="tblColunas destaque acaoC">
            <button type="button" class="button green"  id="detalhes-${item.id}">Detalhes</button>
                           
        </td> 
    </td>
    
    `
    document.getElementById('Consulta').appendChild(newcampos)
}





const ClearTable = () => {
    const rows = document.querySelectorAll('#Consulta > tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}





 const preencherCamposModalRegistro = async (item) => {
    const APIestrutura = await getHistoricoDeVeiculos()
    document.getElementById('nome').value = APIestrutura[item].cliente.nome
    document.getElementById('telefone').value = APIestrutura[item].cliente.telefone
    document.getElementById('modelo').value = APIestrutura[item].veiculo.modelo
    document.getElementById('tipo').value = APIestrutura[item].veiculo.tipo
    document.getElementById('placa').value = APIestrutura[item].veiculo.placa
    document.getElementById('entrada').value = APIestrutura[item].entrada.horario
    document.getElementById('vaga').value = APIestrutura[item].vaga.codigo
} 

const preencherCamposModalTicket = async (item) => {
    const APIestrutura = await getHistoricoDeVeiculos()
    document.getElementById('nometicket').value = APIestrutura[item].cliente.nome
    document.getElementById('telefoneticket').value = APIestrutura[item].cliente.telefone
    document.getElementById('Fabricanteticket').value = APIestrutura[item].veiculo.fabricante
    document.getElementById('modeloticket').value = APIestrutura[item].veiculo.modelo
    document.getElementById('tipoticket').value = APIestrutura[item].veiculo.tipo
    document.getElementById('placaticket').value = APIestrutura[item].veiculo.placa
    document.getElementById('codigoticket').value = APIestrutura[item].vaga.codigo
    document.getElementById('entradaticket').value = APIestrutura[item].entrada.horario
    document.getElementById('vagaticket').value = APIestrutura[item].vaga.codigo
}

const Estrutura = (index) => {
    preencherCamposModalRegistro(index)
    preencherCamposModalTicket(index)
    abrirmodal()
} 
 


 const editDelete = (event) => {
    if(event.target.type == 'button'){
        
        const [action, index] = event.target.id.split('-')

        if(action == 'detalhes'){
            console.log(action , index)
            Estrutura(index) 
        }

    }
} 





/******************************************************** FILTRAGEM *********************************************************/




const buscarTipo = async(placa)=>{
    

   const url = `http://localhost/ezequiel/fastparking/api/veiculo/tipo/${placa}`;

   const option = {
      method:'POST',
      body: JSON.stringify(url),
      headers:{
        'content-type':'application/json'
      }
   }

  const repose = await fetch(url);
  
  const dados = await repose.json();
 
  dados.forEach(createCamposFiltro)

}




const createCamposFiltro = (item) => {
    const newcampos = document.createElement('tr')
    newcampos.innerHTML = `
    
    <td id="tblTitulo">
        <td class="tblColunas destaque corModelo ">${item.veiculo.modelo}</td>
        <td class="tblColunas destaque tipocar ">${item.veiculo.tipo}</td>
        <td class="tblColunas destaque placaCar">${item.veiculo.placa}</td>
        <td class="tblColunas destaque vagaCar">${item.vaga.sigla}</td>
        <td class="tblColunas destaque acaoC">
            <button type="button" class="button green" id="detalhes">Detalhes</button>
                           
        </td> 
    </td>
    
    `
    document.getElementById('Consulta').appendChildren(newcampos)

}


const OpenModalCorrespondente = async () => {
    var select = document.getElementById("filtrarVeiculo");
    var opcaoValor = select.options[select.selectedIndex].value;

    
    if(opcaoValor == '8'){
        console.log(opcaoValor)
        buscarTipo(opcaoValor)   
       
    }else if(opcaoValor == '7'){
        buscarTipo(opcaoValor)
            
    }
        else if(opcaoValor == 'van'){
          
        }
}  


    const updateTable =  async () => {
        const dbveiculos = await getHistoricoDeVeiculos()
        dbveiculos.forEach(createCampos)
    }
    
    updateTable()


//Eventos

document.getElementById('closemodal').addEventListener('click', fecharmodalButton);
document.getElementById('registrarsaida').addEventListener('click', fecharmodal);
document.getElementById('fecharticket').addEventListener('click', fecharmodalTicket);
document.getElementById('filtrarVeiculo').addEventListener('change', OpenModalCorrespondente)



/* document.getElementById('registrarsaida').addEventListener('click' , SaveVeiculo) */

document.querySelector('#Consulta').addEventListener('click' , editDelete)


