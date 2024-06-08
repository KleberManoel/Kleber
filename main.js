
window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        
    
        const getWeather = async () => {
            const getData = await fetch(`https://api.weatherapi.com/v1/current.json?key=64930df30e9240b6be3214240242205&q=${latitude},${longitude}&lang=pt`)

            const res = await getData.json()

            const condicaoContainer = document.querySelector('.condicao')
            const localAtualContainer = document.querySelector('local-atual')
            
            console.log(res.current.condition.text) //Condição
            console.log(res.location.name) //Cidade
            console.log(res.current.temp_c) //Temperatura
            console.log(res.current.feelslike_c) //SEnsação térmica
            console.log(res.current.condition.wind_kph) //Velocidade do vento 
            
            const icone = document.createElement('img')
            const condicao = document.createElement('span')
            const cidade = document.createElement('span')
            const temperatura = document.createElement('span')
            const sensTerm = document.createElement('span')
            const velVento = document.createElement('span')

            condicao.innerHTML=res.current.condition.text
            icone.setAttribute('src','https:'+res.current.condition.icon)
            cidade.innerHTML = res.location.name
            cidade.className = 'cidade'
            temperatura.innerHTML = res.current.temp_c + 'Cº'
            temperatura.className = 'temperatura'
            sensTerm.innerHTML = res.current.feelslike_c + 'Cº'
            velVento.innerHTML = res.current.wind_kph + 'kh'
            velVento.style.fontSize = '32px'
        

            condicaoContainer.appendChild(icone)
            condicaoContainer.appendChild(temperatura)
            condicaoContainer.appendChild(condicao)
            condicaoContainer.appendChild(velVento)
            condicaoContainer.appendChild(cidade)
            condicaoContainer.appendChild(sensTerm)

            localAtualContainer.appendChild(cidade)
            localAtualContainer>appendChild(sensTerm)
            localAtualContainer.appendChild(velVento)



        }
        
    })
})







