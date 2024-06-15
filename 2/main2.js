document.addEventListener("DOMContentLoaded",()=>{
    
    const url = 'https://cep.awesomeapi.com.br/json/'
    const form = document.querySelector('.form')
    const cep = parseInt(document.querySelector('.cep'))

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const buscarCep = async () =>{
            const getData = await fetch(url)
            const response = await getData.json()
            console.log(response)
            
            const container = document.createElement('p')
            const ibge = document.createElement('p')
            const ddd = document.createElement('p')

            container.innerHTML = `${response.address_type}: `$(response.address_name), `${response.district}, `${response.city} - ${response.state}`
            ibge.innerHTML = `Código IBGE do município: ${response.city_ibge}`
            ddd.innerHTML = `DDD: $(response.ddd)
            
            infos.appendChild(container)
            infos.appendChild(ibge)
            infos.appendChild(ddd)

        }
        buscarCep().then(()=>{
            mensagem.innerHTML = 'Busca realizado com sucesso.'
            mensagem.classList.add('sucesso')
        })catch(()=>{
            mensagem.innerHTML = 'Algo deu errado, favor verifique o CEP inserido'
            mensagem.classList.add('erro')
        })
        }
    })

    console.log(cep.value)
    
})