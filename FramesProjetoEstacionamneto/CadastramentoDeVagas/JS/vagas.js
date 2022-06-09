
const Vagas =() => {
   
}

const vagas = document.getElementById('vagasdisponiveis');

const vagasfor = () => {
    for(var contador = 0; contador < 20 ; contador++){
        vagas.innerHTML = `
        <div class="disponiveis"></div> 
        <div class="disponiveis"></div>
        <div class="disponiveis"></div>      
        `
        return vagas
    }
}

vagasfor();




const vagas = document.getElementById('vagasdisponiveis');

const Model = () => {
    for(var contador = 0; contador < 20 ; contador++){
        vagas.innerHTML = `
        <div class="disponiveis"></div> 
        <div class="disponiveis"></div>
        <div class="disponiveis"></div>      
        `
        return vagas
    }
}