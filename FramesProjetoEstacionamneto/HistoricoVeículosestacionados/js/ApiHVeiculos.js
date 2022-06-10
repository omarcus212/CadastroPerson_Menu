'use strict'


const dados =[  
    {
        "id":1,
        "carro":"x9",
        "cor":"prata",
        "tipo":"carro",
        "placa":"xht-258",
        "entrada":"29/08/02 19:20:23"
     },
     {
        "id":2,
        "carro":"Ferrari",
        "cor":"Dourado",
        "tipo":"carro",
        "placa":"xot-648",
        "entrada":"29/08/02 20:20:23"
     },
     {
        "id":3,
        "carro":"Celta",
        "cor":"prata",
        "tipo":"carro",
        "placa":"cct-225",
        "entrada":"29/08/02 12:20:20"
     },
     {
        "id":4,
        "carro":"Porsh",
        "cor":"preta",
        "tipo":"carro",
        "placa":"ccc-222",
        "entrada":"29/08/02 18:22:26"
     },
     {
        "id":5,
        "carro":"fan-125",
        "cor":"vermelho",
        "tipo":"Moto",
        "placa":"fan-125",
        "entrada":"29/08/02 13:20:00"
     }
     
    
];


const criarTabela = async () =>{

    const tabela = document.getElementById('tblConsulta');
    tabela.classList.add('#tblConsulta');

    let apoio = ` <td id="tblTitulo" colspan="6">
    <td class="tblColunas destaque corModelo" > Modelo / Cor </td>
    <td class="tblColunas destaque tipocar"> Tipo </td>
    <td class="tblColunas destaque placaCar" > Placa </td>
    <td class="tblColunas destaque vagaCar"> Entrada </td>
    <td class="tblColunas destaque acaoC"> Ações</td></td>`;

    dados.map((item) =>{ 
    apoio+=`
    
    <tr>
    <td id="tblTitulo" colspan="6">
        <td class="tblColunas destaque ">${item.carro}/${item.cor}</td>
        <td class="tblColunas destaque ">${item.tipo}</td>
        <td class="tblColunas destaque " >${item.placa}</td>
        <td class="tblColunas destaque ">${item.entrada}</td>
        <td class="tblColunas destaque img ">
                <img src="img/more.png" alt="">
                <img src="img/Vector.png" alt="">

        </td>
    </td>
</tr>
    `;
    
});
  
tabela.innerHTML = apoio;


}

criarTabela();