
const getHistoricoDeVeiculos = async () => {
    const url = 'http://localhost/ezequiel/fastparking/api/'
    const options = {
        method: 'POST',
        body: JSON.stringify(url),
        headers: {
            'content-type' : 'application/json'
        }
    }
  
    const resposta = await fetch(`${url}veiculo`)

    const dados = await resposta.json()

   return dados

}


export{getHistoricoDeVeiculos}