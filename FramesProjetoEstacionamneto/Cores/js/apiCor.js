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
 return document.getElementById('fomrCor').reportValidity(); /*vefiricando campo*/
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
                
            const index = document.getElementById('textNome').dataset.index;

            if(index == 'new'){
                creatCor(cor);
                updateCores();           
                fecharModal()
            }else{
                update(index,cor);
                updateCores();
                fecharModal();
            }
          
   }

}

const clearTable = () =>{
    const cores = document.querySelectorAll('#tblConsulta>tr');
    cores.forEach(cor =>cor.parentNode.removeChild(cor));
    
}

 

const criarTabela = async(corname,index) =>{
    const newcor = document.createElement('tr');
    const tabela = document.getElementById('tblConsulta');
    tabela.classList.add('#tblConsulta');
    
     newcor.innerHTML = 
   ` 
     <td class="tblColunas destaque"> ${corname.nome} </td>                   
     <td class="tblColunas registros">
     <input id="btn" data-action="editar-${index}" type="image" src="img/editar.png" class="editar">
     <input id="btn" data-action="excluir-${index}" type="image" src="img/Vector.png" class="excluir"> 
    </td>
     `
     tabela.appendChild(newcor);
      
     
}
    
const updateCores = () =>{
    const dados = readcor();
    clearTable();
    dados.forEach(criarTabela);
    
 }
 updateCores();
    
/*editar PRT*/
const preenchercor = (cor) =>{
document.getElementById('textNome').value = cor.nome;
document.getElementById('textNome').dataset.index = cor.index;

}


const editarCor = (index) =>{
    const cor = readcor()[index];
    cor.index = index;
    preenchercor(cor);  
    abrirModal();
}

const editarDeletar = (event)=>{
    if(event.target.type == 'image'){
       
        const [action, index] = event.target.dataset.action.split('-');
        if(action == 'editar'){
            editarCor(index);
        }else{
            const acor = readcor()[index];
            const response = confirm(`Deseja excluir a cor ${acor.nome} ?`);
             if(response){
                deletar(index);
                updateCores(); 
            }

        }
        
    }
    
}







document.getElementById('add').addEventListener('click',saveCor);
document.querySelector('#tblConsulta').addEventListener('click', editarDeletar);





export{
    clearFields
}

