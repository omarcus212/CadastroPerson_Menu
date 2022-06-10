

const dados =[  
    {
        "id":1,
        "tipo":"Carro"
     },
     {
        "id":2,
        "tipo":"Moto"
     },
     {
        "id":3,
        "tipo":"Caminhão"
     },
     
  
    
];
  


const criarTabela = () =>{
    
    const tabela = document.getElementById('tblConsulta');
    tabela.classList.add('#tblConsulta');

    let apoio = `<td class="tblColunas destaque"> <h3>Tipo de veiculo:</h3>  </td>
    <td class="tblColunas registros"> <h3>Ações</h3> </td>
     `;
      
     
     dados.map((item)=>{ 
      apoio += `
      <tr id="tblLinhas">
                      <td class="tblColunas destaque"> ${item.tipo}</td>                   
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