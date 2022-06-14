
const getVagas = async () => {
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



const criarlist = async () =>{

    const setor = document.getElementById('setor');
    const list = document.getElementById('piso');
    const vaga = await getVagas();
    let apoio = '<option value=""selected>PISO:</option> ';
    
 


    vaga.map((item)=>{
          apoio += `
            <option value="${item.localizacao.piso}">${item.localizacao.piso}</option>
          `;
    });
 
  
     
    list.innerHTML = apoio;


  
   

    
   
   
 }
 
 
 criarlist();



 
const criarsetor = async () =>{

    const setor = document.getElementById('setor');
   
    const vaga = await getVagas();
    let apoio = '<option value=""selected> SETOR</option> ';
    
 


    vaga.map((item)=>{
          apoio += `
            <option value="${item.localizacao.piso}">${item.localizacao.setor}</option>
          `;
    });
 
  
     
    setor.innerHTML = apoio;


  

   
 }



 criarsetor()
 

  
const criarCorredor = async () =>{

    const setor = document.getElementById('corredor');
   
    const vaga = await getVagas();
    let apoio = '<option value=""selected>CORREDOR</option> ';
    
 
 console.log(vaga)

    vaga.map((item)=>{
          apoio += `
            <option value="${item.localizacao.corredor}">${item.localizacao.corredor}</option>
          `;
    });
 
  
     
    setor.innerHTML = apoio;


  

   
 }


 criarCorredor()


 const criarVeiculo = async () =>{

    const setor = document.getElementById('veiculo');
   
    const vaga = await getVagas();
    let apoio = '<option value=""selected> VEICULO:</option> ';
    
 
 console.log(vaga)

    vaga.map((item)=>{
          apoio += `
            <option value="${item.localizacao.veiculo}">${item.tipo}</option>
          `;
    });
 
  
     
    setor.innerHTML = apoio;


  

   
 }


 criarVeiculo()