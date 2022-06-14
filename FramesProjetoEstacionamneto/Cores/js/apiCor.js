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






const buscarcolor = async()=>{
    const url = `https://testeleonid.herokuapp.com/dadoscor`;
 
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

 
const deletarcolor = async(id)=>{
  const url = `https://testeleonid.herokuapp.com/dadoscor`;

  const option = {
     method:'DELETE',
   
  }

  const reponse = await fetch(`${url}/${codigoid}`,option);

  
}
const url = `https://testeleonid.herokuapp.com/dadoscor`;
const creatcorlor = async (client) =>{
  const option ={
      method : 'POST',
      body: JSON.stringify(client),
      headers:{
          'content-type':'application/json'
      }
  }

  const reponse = await fetch(url,option);
  console.log(reponse.ok);
}


const uptadecor = async(client) => {
  const option ={
      method : 'PUT',
      body: JSON.stringify(client),
      headers:{
          'content-type':'application/json'
      }
  }
  const response = await fetch (`${url}/${client.id}`, option);
  console.log('UPDATE', response.ok);

}



 const creatcor  = async(item) =>{
     const a = await buscarcolor();
    console.log(item);
    const newcampos = document.createElement('tr');
    newcampos.innerHTML = `
    
    <td id="tblTitulo" >
    <td class="tblColunas destaque ">${item.nome}</td>
    <td class="tblColunas destaque img ">
            <input  type="image" src="img/more.png" id="editar">
            <input  type="image" src="img/Vector.png" id="excluir">
       
 
    </td>
 </td>
    `;
      
    document.getElementById('Consulta').appendChild(newcampos);
 }
 

 const updatetabela = async () =>{
    const dbVagas = await buscarcolor();
    console.log(dbVagas);
    dbVagas.forEach(creatcor);
    
}
    
/*mostra na tela uptade*/
updatetabela();
    
const saveCor = ()=>{
  const nome = document.getElementById('textNome');
  creatcorlor(nome);
}

const editarcor = () =>{
 abrirModal();

 document.getElementById()


}


const editarcordelet = (evet) =>{
   const [action,index] = event.target.id.split('-');
    if(evet.target.type = 'image'){
           if(action == 'editar'){
                 
           }
    }

}

document.getElementById('Consulta').addEventListener('click', editarcordelet);
document.getElementById('add').addEventListener('click', saveCor)
