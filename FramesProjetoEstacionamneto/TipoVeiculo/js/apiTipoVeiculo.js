
dados = [{ 
     id:1,
     nome:"ferrari"
}];

const getlocalstorid = () => JSON.parse(localStorage.getItem('dbtipoVeiculo'))?? []; 
const setlocalstorid = (dbtipoVeiculo) => localStorage.setItem("dbtipoVeiculo", JSON.stringify(dbtipoVeiculo));


const creatTipoVeiculos = (tipo) =>{
const dbTpVeiculo = getlocalstorid();
dbTpVeiculo.push(tipo);
setlocalstorid(dbTpVeiculo);

}

const readTipo = () =>getlocalstorid();


const update = (index,dados) =>{
   
   const dbtipo = readTipo();
   dbtipo[index] = dados;
    setlocalstorid(dbtipo);
}


const deletar = (index) =>{ 
   const dbtipo = readTipo();
   dbtipo.splice(index,1);
   setlocalstorid(dbtipo); 

}

