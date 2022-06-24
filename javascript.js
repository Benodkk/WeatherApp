const body = document.querySelector('body')

let form = document.createElement('form')
body.appendChild(form)

let search = document.createElement('input');
search.setAttribute('type', 'text');
search.setAttribute('name', 'search');
search.setAttribute('placeholder', 'Write the name of the city');
form.appendChild(search);

let submit = document.createElement('input')
submit.setAttribute('type', 'submit')
submit.setAttribute('value', 'SEARCH')
form.appendChild(submit)

let city 
let temperatureK 
let temperatureC 
let temepratureF
let weatherConditions
let wind
let visibility 


fetch(`https://api.openweathermap.org/data/2.5/weather?q=Warsaw&APPID=9c5a1dbf98aaef67ea4e5e683bb005a2`, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(temepratureK=response.main.temp)
        console.log(temperatureC = temepratureK - 273.15)
        console.log(temepratureF = temepratureK*9/5-459.67)
        console.log(weatherConditions=response.weather[0].main)
        console.log(wind=response.wind.speed)
        console.log(visibility=response.visibility)
    })
    .catch(function(){
        console.log("We couldn't find the city, try again.")
    })

submit.addEventListener('click', () => {
    event.preventDefault()
    let lookingFor=form.elements['search'].value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${lookingFor}&APPID=9c5a1dbf98aaef67ea4e5e683bb005a2`, {mode: 'cors'})
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            console.log(temepratureK=response.main.temp)
            console.log(temperatureC = temepratureK - 273.15)
            console.log(temepratureF = temepratureK*9/5-459.67)
            console.log(weatherConditions=response.weather[0].main)
            console.log(wind=response.wind.speed)
            console.log(visibility=response.visibility)
        })
        .catch(function(){
            console.log("We couldn't find the city, try again.")
        })
})


