'use strict'


const dados =[  
    {
        "id":1,
        "cor":"preto"
     },
     {
        "id":2,
        "cor":"prata"
     },
     {
        "id":3,
        "cor":"branco"
     },
     {
        "id":4,
        "cor":"vermelho"
     },
     {
        "id":5,
        "cor":"azul"
     }
    
];


   
const criarTabela = async() =>{

const tabela = document.getElementById('tblConsulta');
tabela.classList.add('#tblConsulta');

let apoio =`<td class="tblColunas destaque"> <h3>Cores</h3>  </td>
<td class="tblColunas registros"> <h3>Ações</h3> </td>`;
 
    const thisdados = dados;
     thisdados.map((item)=>{
        apoio += `
        <tr id="tblLinhas">
                        <td class="tblColunas destaque"> ${item.cor}</td>                   
                            <td class="tblColunas registros">
                            <img src="img/editar.png"  class="editar">
                            <img src="img/Vector.png"  class="editar">
                    
                    </td>
                    </tr>
               
        `;  
   });
  
   tabela.innerHTML = apoio;

}
criarTabela();