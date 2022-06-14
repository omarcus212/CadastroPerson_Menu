


const abrirmodal = () =>{

   document.getElementById('containerModel_entrada').classList.add('active');


}


const fecharmodal = () =>{

    document.getElementById('containerModel_entrada').classList.remove('active');
 
 
 }
 



 document.getElementById('cadatra').addEventListener('click', abrirmodal);
document.getElementById('imgmodel').addEventListener('click', fecharmodal);