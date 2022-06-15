import { fecharModal,abrirModal } from "./Model.js";




const buscarcolor = async()=>{
    const url = `http://localhost/vivi/fastparkingmain/fastparkingmain/api/cor`;
 
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
 
 buscarcolor();
  
 
const deletarcolor = async(id)=>{
  const url = `https://testeleonid.herokuapp.com/dadoscor`;

  const option = {
     method:'DELETE',
   
  }

  const reponse = await fetch(`${url}/${codigoid}`,option);

  
}

