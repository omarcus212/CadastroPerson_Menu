

const abrirmodal = () =>{

    
    document.getElementById('modal-conteiner').classList.add('active');
  
    
}

const fecharmodel = () =>{

    document.getElementById('modal-conteiner').classList.remove('active');
  
    
}


document.getElementById('add').addEventListener('click', abrirmodal);
document.getElementById('titlle_x').addEventListener('click', fecharmodel);