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
 

document.getElementById('lista-marca').addEventListener('change', criarlist_Modelo);




