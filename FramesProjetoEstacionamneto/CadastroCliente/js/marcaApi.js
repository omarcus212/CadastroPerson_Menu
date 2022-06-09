'use strich'

const marca_Carro = async () =>{

    const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas`;
    const response = await fetch(url);

    const marcaCarro = await response.json();
        
    return marcaCarro;

}

const marca_Moto = async () =>{
   const url = `https://parallelum.com.br/fipe/api/v1/motos/marcas`;
   const response = await fetch(url);

   const marcaMoto = await response.json();
       
   return marcaMoto;

}

const marca_Caminhao = async () =>{
   const url = `https://parallelum.com.br/fipe/api/v1/caminhoes/marcas`;
   const response = await fetch(url);

   const marcaCaminhao = await response.json();

   return marcaCaminhao
  

}

const criarlist = async() =>{


   const list = document.getElementById('lista-marca');
   const marca = await marca_Carro();
   const marcaMoto = await marca_Moto();
   const marcaCaminhao = await marca_Caminhao();
   let apoio = '<option value=""selected> selecione:</option> ';


   marca.map((item)=>{
         apoio += `
           <option value="${item.codigo}">${item.nome}</option>
         `;
   });

   marcaMoto.map((item)=>{
      apoio += `
        <option  value="${item.codigo}">${item.nome}</option>
      `;
   });
     
   marcaCaminhao.map((dados)=>{
    
   apoio+= `
     
    <option value="${dados.codigo}">${dados.nome}</option>
   
   `;
    
  
   });
 
    
   list.innerHTML = apoio;
  
}


criarlist();






/*modelos Veiculo*/


const modelo_Veiculos = async(idMarcaCarro) =>{
   
   const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${idMarcaCarro}/modelos`;
    
    const response = await fetch(url);

    const modelosCarro = await response.json();

     return modelosCarro.modelos;


}

// const modelo_VeiculosMoto = async(idMarcaMoto) =>{
   
//    const url = `https://parallelum.com.br/fipe/api/v1/moto/marcas/${idMarcaMoto}/modelos`;
    
//     const response = await fetch(url);

//     const modelosCarro = await response.json();

//      return modelosCarro.modelos;


// }



 const criarlist_Modelo = async() =>{
   
   let idmodelo = document.getElementById('lista-marca').value;

   const list = document.getElementById('lista-modelos');
   const modelosCarro = await modelo_Veiculos(idmodelo);
   let apoio = '<option value=""selected> selecione:</option>';
   
   modelosCarro.map((item) =>{
         
   apoio+=`
         <option value="${item.codigo}">${item.nome}</option>
       `;
   });
   

    list.innerHTML = apoio;
    

 }
 
//  const valuesDados = () =>{



//  }


const criarEntradacheck = (dados) =>{

   const cardCheck = document.createElement('div');
   cardCheck.classList.add('.content');

   cardCheck.innerHTML = `
   
   <h1>Fast parking</h1>
                                 
   <p>Nome: ${dados.nome}</p>
  
    <p>Placa:${dados.placa} </p> 
     
    <span>
       <p>Fabricante : ${dados.Fab} </p>

       
       <p>Tipo: </p>
      
       <p>Modelo:  </p> 

       <p>Cor : </p> 

       
       
       
    </span>
    
  
   <div class="vagamodal_entrada">
       <h2>VAGA:</h2>
       <p>Piso: 1
           Setor: B
           Corredor: C
           Número: 32
       </p>
   </div>
   <p id="Entrada_model">Entrada - 19/15/2022 - 12:30:20
   </p>
   
   `;



}

// document.getElementById('lista-marca').addEventListener('click', valuesDados);


document.getElementById('lista-marca').addEventListener('change', criarlist_Modelo);




