const API_KEY = '355470a2a6d950a2170fec8769c33f35'

const cityElement = document.getElementById('city-input')
const searchBtnElement = document.getElementById('Search-btn')
const resultElement = document.getElementById('result-container')
const errorElement = document.getElementById('error')


async function data(city) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    try{
        const ans = await fetch(url)
        const ansJson = ans.json()
        return  ansJson
    }catch(error){
        throw error
    }finally{
        console.log('finally')
    }
    
}

async function UpWeatherInfo(){
    errorElement.textContent=''
    const City = cityElement.value
    if(!City){
        displayError('City name cannot be empty')
        return
    }
    try{
        const city_data = await data(City)
        if(city_data.cod === '404'){
            displayError('please enter a valid city name')
            return
        }
        console.log(city_data)
        resultElement.innerHTML=`
        <h2>  ${city_data.name},${city_data.sys.country}</h2>
        <p>Temperatue: ${city_data.main.temp}</p>
        <p>Weather: ${city_data.weather[0].description}
        <p>Humidity: ${city_data.main.humidity}%</p>
        <p>Wind Speed: ${city_data.wind.speed} m/s</p>
        `
        resultElement.classList.remove('hidden')
    }catch(error){
        displayError('Server error: something went wrong on our side')
    }finally{
        console.log('finally')
    }
}

function displayError(text){
    resultElement.textContent=''
    errorElement.textContent= text
    
}

searchBtnElement.addEventListener('click',UpWeatherInfo)
cityElement.addEventListener('keypress', event=>{
    if(event.key == 'Enter'){
        UpWeatherInfo()
    }
})


