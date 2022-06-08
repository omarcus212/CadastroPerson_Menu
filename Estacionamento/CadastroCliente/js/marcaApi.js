

const marca_Carro = async () =>{

    const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas`;
    const response = await fetch(url);

    const marcaCarro = await response.json();

    
   return marcaCarro;


}

const criarlist = async() =>{
   const list = document.getElementById('lista-marca');
   const marca = await marca_Carro();
  
   list.innerHTML =`
   
   <option>
         ${marca.join("</option><option>")}
    </option>
   `;
    
}


criarlist();








// const loadMarca = async () =>{

//  const slect = document.getElementById('lista-marca');

//  const marca = await marca_Carro();

//  const option =  marca.map(criarlist);

//  slect.replaceChildren(...option);
 
// }

// loadMarca();