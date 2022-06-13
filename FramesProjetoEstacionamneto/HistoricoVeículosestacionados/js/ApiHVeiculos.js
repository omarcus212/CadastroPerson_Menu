'use strict'


dados = [{ 
   id:1,
   nome:"ferrari"
}];

const getlocalstorid = () => JSON.parse(localStorage.getItem('dbtipoVeiculo'))?? []; 
const setlocalstorid = (dbhVeiculo) => localStorage.setItem("dbtipoVeiculo", JSON.stringify(dbhVeiculo));


const creatTipoVeiculos = (tipo) =>{
const dbhVeiculo = getlocalstorid();
dbhVeiculo.push(tipo);
setlocalstorid(dbhVeiculo);

}

const readTipo = () =>getlocalstorid();


const update = (index,dados) =>{
 
 const Veiculo = readTipo();
 Veiculo[index] = dados;
  setlocalstorid(Veiculo);
}


const deletar = (index) =>{ 
 const veiculo = readTipo();
 veiculo.splice(index,1);
 setlocalstorid(veiculo); 

}

