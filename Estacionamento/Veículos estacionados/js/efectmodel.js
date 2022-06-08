

const abrirmodal = () =>{

    document.getElementById('modalVeiculo').classList.add('active');
    document.getElementById('todamodel').classList.add('active');

}

const fecharmodal = () =>{
    document.getElementById('modalVeiculo').classList.remove('active');
    document.getElementById('todamodel').classList.remove('active');
}




document.getElementById('add').addEventListener('click', abrirmodal);
document.querySelector('.closemodal').addEventListener('click', fecharmodal);