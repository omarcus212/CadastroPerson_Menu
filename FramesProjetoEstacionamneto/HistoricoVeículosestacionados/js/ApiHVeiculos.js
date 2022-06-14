'use strict'

import { abrirModal } from "./modelJS.js";

// const url = 'http://localhost/php/fastparking/api/veiculo/estacionados';
// const getlocalstorid = async (id="") => {
  


//    const reposes = await fetch(url);
   
//    const dados = await reposes.json();

//    return dados;
// }; 

// const setlocalstorid = (dbhVeiculo) => localStorage.setItem("dbtipoVeiculo", JSON.stringify(dbhVeiculo));


// const creatTipoVeiculos = (tipo) =>{
// const dbhVeiculo = getlocalstorid();
// dbhVeiculo.push(tipo);
// setlocalstorid(dbhVeiculo);

// }

// const readhistorico = () =>apivagas();


// const update = (index,dados) =>{
 
//  const Veiculo = readTipo();
//  Veiculo[index] = dados;
//   setlocalstorid(Veiculo);
// }


const deletar = (index) =>{ 
 const item = apivagas()[index];
 item.splice(index,1);
 

}


const apivagas = async() =>{
 
   const url = 'http://localhost/marcus/fastparking/api/veiculo/estacionados';

    const option = {
       method:'POST',
       body: JSON.stringify(url),
       headers:{
         'content-type':'application/json'
       }
    }

   const repose = await fetch(url);
   
   const dados = await repose.json();

   return dados;


}


/*colocando dados nos campost*/
const createCampos = (item,index) =>{
   const newcampos = document.createElement('tr');
   newcampos.innerHTML = `
   
   <td id="tblTitulo" >
   <td class="tblColunas destaque " >${item.veiculo.modelo}-${item.veiculo.cor}</td>
   <td class="tblColunas destaque ">${item.veiculo.tipo}</td>
   <td class="tblColunas destaque " >${item.veiculo.placa}</td>
   <td class="tblColunas destaque ">${item.vaga.sigla}</td>
   <td class="tblColunas destaque vagaCar">${item.entrada.horario}</td>
   <td class="tblColunas destaque img ">
           <input  type="image" src="img/more.png" id="editar-${index}">
      

   </td>
</td>
   `;
     
   document.getElementById('Consulta').appendChild(newcampos)
}


/*limpar as tabelas para não se repetirem*/
const clearTable = () =>{
   const rows = document.querySelectorAll('#Consulta > tr');
   rows.forEach(row => row.parentNode.removeChild(row))
}


const updatetabela = async () =>{
const dbVagas = await apivagas();
clearTable();
dbVagas.forEach(createCampos);

}

/*mostra na tela uptade*/
updatetabela();


/*preenchendo a modal*/
const preenchermodal = async(item)=>{
   const hist = await apivagas();
  document.getElementById('nome').value = hist[item].cliente.nome;
  document.getElementById('telefone').value = hist[item].cliente.telefone;
  document.getElementById('entrada').value = hist[item].entrada.horario;
  document.getElementById('modelo').value =hist[item].veiculo.modelo;
  document.getElementById('tipo').value = hist[item].veiculo.tipo;
  document.getElementById('placa').value = hist[item].veiculo.placa;
  document.getElementById('saida').value = hist[item].saida.horario;
}


/*trazendo o cliente a modal e editando*/
const editarH  = (index) =>{
     preenchermodal(index);
  
     abrirModal();
}

/*verificando onde foi clicado e se é editar ou deletar e atribuindo as funções*/
const editarExcluir = (event) =>{
    const type = event.target.type;
    if(type == 'image'){
      const [action,index] = event.target.id.split('-');
      if(action == 'editar'){
       
         editarH(index);  
      }else{
          const reponde = confirm(`Deseja realmente excluir?`);
          if(reponde){
            deletar(index);
            updatetabela();
          }
          
      }
        
    }
}

const buscarplaca = async(placa)=>{
   const url = `http://localhost/marcus/fastparking/api/veiculo/placa/${placa}`;

   const option = {
      method:'POST',
      body: JSON.stringify(url),
      headers:{
        'content-type':'application/json'
      }
   }

  const repose = await fetch(url);
  
  const dados = await repose.json();
   
   if(repose.ok){
      dados.forEach(creatPlaca);

   }else{
      alert('Não existe');
   }
   
}

const creatPlaca = (item) =>{
   console.log(item);
   const newcampos = document.createElement('tr');
   newcampos.innerHTML = `
   
   <td id="tblTitulo" >
   <td class="tblColunas destaque ">${item?.veiculo?.modelo}-${item.veiculo.cor}</td>
   <td class="tblColunas destaque ">${item?.veiculo?.tipo}</td>
   <td class="tblColunas destaque " >${item?.veiculo?.placa}</td>
   <td class="tblColunas destaque ">${item?.vaga?.sigla}</td>
   <td class="tblColunas destaque vagaCar">${item?.entrada?.horario}</td>
   <td class="tblColunas destaque img ">
           <input  type="image" src="img/more.png" id="editar">
      

   </td>
</td>
   `;
     
   document.getElementById('Consulta').replaceChildren(newcampos);
}

const filtraplaca = async(event) =>{

   if(event.key == 'Enter'){
      const placa = document.getElementById('filtplaca').value;
      if(placa != ""){
         buscarplaca(placa);
      }else{
         updatetabela();
      }
     
    
       
   
   }

   
}

document.querySelector('#Consulta').addEventListener('click', editarExcluir);
document.getElementById('filtplaca').addEventListener('keypress', filtraplaca);
