import './style.css'

async function getWeatherAPI () {
    let place = prompt('Enter a city or place: ','Manila');
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=58f80b8f463640b3abe112340230604&q=${place}`)

    return response.json();
}

getWeatherAPI().then(json =>{
    console.log(json,json.location,json.current.feelslike_c);
})