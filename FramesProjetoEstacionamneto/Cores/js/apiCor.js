import { fecharModal,abrirModal } from "./Model.js";



const getlocalstorid = () => JSON.parse(localStorage.getItem('db'))?? []; 
const setlocalstorid = (db_cor) => localStorage.setItem("db", JSON.stringify(db_cor));






/*creat*/
const creatCor = (cor) =>{
 const db_cor = getlocalstorid();
 db_cor.push(cor);
 setlocalstorid(db_cor);


}
/*read*/
const readcor = () =>getlocalstorid();

/*update*/
const update = (index,dados) => {

    const dbcor = readcor();
     
    dbcor[index] = dados;

    setlocalstorid(dbcor);


}
/*deletar*/
const deletar = (index) =>{
    const dbcor = readcor();
     dbcor.splice(index,1);
     setlocalstorid(dbcor);

     
}






/*interação com o USER*/
const isValidFields = () =>{
 return document.getElementById('fomrCor').reportValidity();
}



const clearFields = () =>{
 const fildeclean =  document.getElementById('textNome');
  fildeclean.value = " "; 
  
}



const saveCor = () =>{
   if(isValidFields()){
            const cor = {
                nome:document.getElementById('textNome').value
            }

            creatCor(cor);
            updateCor();           
            fecharModal()
   }

}

const clearTable = () =>{
    const cores = document.querySelectorAll('#tblConsulta>tr');
    cores.forEach(cor =>cor.parentNode.removeChild(cor));
    
}

 

const criarTabela = async(corname) =>{
    const newcor = document.createElement('tr');
    const tabela = document.getElementById('tblConsulta');
    tabela.classList.add('#tblConsulta');
    
     newcor.innerHTML = 
   ` 
     <td class="tblColunas destaque"> ${corname.nome} </td>                   
     <td class="tblColunas registros">
     <input id="btn" type="image" src="img/editar.png" class="editar">
     <input id="btn" type="image" src="img/Vector.png" class="excluir"> 
    </td>
     `
     tabela.appendChild(newcor);
      
     
}
    
const updateCor = () =>{
    const dados = readcor();
    clearTable();
    dados.forEach(criarTabela);
 }
 updateCor();
    
/*editar PRT*/

const editar = (event)=>{
    console.log(event.target);
}







document.getElementById('add').addEventListener('click',saveCor);
document.querySelector('#btn').addEventListener('click', editar);





export{
    clearFields
}

