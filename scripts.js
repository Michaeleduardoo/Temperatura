

let key = "f8e92003f5a3ab04f18d02d1928c6b06"

const putScreen= (dado) =>{

    document.querySelector(".city").innerHTML = "Tempo em " + dado.name
    document.querySelector(".temp").innerHTML = Math.floor( dado.main.temp) + "°C"
    document.querySelector(".clouds").innerHTML = dado.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dado.weather[0].icon + '.png'
    document.querySelector(".umidade").innerHTML = "Umidade: " + dado.main.humidity + '%'

}

async function  searchCity(cityh)  {

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityh 
     + "&appid=" + key + "&lang=pt_br" + "&units=metric")
    .then( result =>  result.json())

    putScreen(dados)
   
    console.log(dados)
}


const clickedBhutan = ()=>{

    let city = document.querySelector(".search").value 

    searchCity(city)
    
    
}