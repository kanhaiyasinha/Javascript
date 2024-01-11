let cityName = "Pune"

function getweatherInfo(cityName){
    let url = `http://api.weatherapi.com/v1/current.json?key=a136b7865abc4560900160926232309&q=${cityName}&aqi=no`
    console.log(url);
    const response = fetch(url);
    console.log(response);
}

getweatherInfo('Mumbai');
