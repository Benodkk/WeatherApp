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
submit.classList.add('submitBtn')
form.appendChild(submit)

let title = document.createElement('div')
body.appendChild(title)
title.classList.add('title')

let city = document.createElement('div')
title.appendChild(city)
city.classList.add('city')

let weatherImg = document.createElement('img')
title.appendChild(weatherImg)
weatherImg.classList.add('weatherImg')


let temperatureContainer = document.createElement('div')
body.appendChild(temperatureContainer)
temperatureContainer.classList.add('container')

let temperature = document.createElement('div')
temperatureContainer.appendChild(temperature)
temperature.textContent='Temperature:'
temperature.classList.add('leftPart')

let temperatureTypes = document.createElement('div')
temperatureContainer.appendChild(temperatureTypes)
temperatureTypes.classList.add('smallContainer')

let temperatureK = document.createElement('div')
temperatureTypes.appendChild(temperatureK)
temperatureK.classList.add('one')

let temperatureC = document.createElement('div')
temperatureTypes.appendChild(temperatureC)
temperatureC.classList.add('one')

let temperatureF = document.createElement('div')
temperatureTypes.appendChild(temperatureF)
temperatureF.classList.add('one')


let weatherConditionsContainer = document.createElement('div')
body.appendChild(weatherConditionsContainer)
weatherConditionsContainer.classList.add('container')

let weatherConditions = document.createElement('div')
weatherConditionsContainer.appendChild(weatherConditions)
weatherConditions.classList.add('weatherConditions')
weatherConditions.textContent='Weather conditions:'

let weatherDescription = document.createElement('div')
weatherConditionsContainer.appendChild(weatherDescription)
weatherDescription.classList.add('smallContainer')

let weather
let weatherType = document.createElement('div')
weatherDescription.appendChild(weatherType)
weatherType.classList.add('one')


let windContainer = document.createElement('div')
body.appendChild(windContainer)
windContainer.classList.add('container')

let wind = document.createElement('div')
windContainer.appendChild(wind)
wind.classList.add('wind')
wind.textContent='Wind:'

let windSpeed = document.createElement('div')
windContainer.appendChild(windSpeed)
windSpeed.classList.add('one')


let visibilityContainer = document.createElement('div')
body.appendChild(visibilityContainer)
visibilityContainer.classList.add('container')

let visibilityValue
let visibility = document.createElement('div')
visibilityContainer.appendChild(visibility)
visibility.textContent='Visibility:'
visibility.classList.add('leftPart')

let visibilityDescription = document.createElement('div')
visibilityContainer.appendChild(visibilityDescription)
visibilityDescription.classList.add('smallContainer')

let visibilityOpinion = document.createElement('div')
visibilityDescription.appendChild(visibilityOpinion)
visibilityOpinion.classList.add('one')

let visibilityMeters = document.createElement('div')
visibilityDescription.appendChild(visibilityMeters)
visibilityMeters.classList.add('one')


fetch(`https://api.openweathermap.org/data/2.5/weather?q=Warsaw&APPID=9c5a1dbf98aaef67ea4e5e683bb005a2`, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        city.textContent="Warsaw"
        temperatureK.textContent = Math.round(response.main.temp)+'°K'
        temperatureC.textContent = Math.round(response.main.temp - 273.15)+'°C'
        temperatureF.textContent = Math.round(response.main.temp*9/5-459.67)+'°F'
        weather = response.weather[0].main
        weatherType.textContent = weather
        if (weather='Clear'){
            weatherImg.src = "./01d@2x.png"
        }
        else if (weather='Clouds'){
            weatherImg.src = "./04d@2x.png"
        }
        else if (weather='Drizzle'){
            weatherImg.src = "./09d@2x.png"
        }
        else if (weather='Rain'){
            weatherImg.src = "./10d@2x.png"
        }
        else if (weather='Thunderstorm'){
            weatherImg.src = "./11d@2x.png"
        }
        else if (weather='Snow '){
            weatherImg.src = "./13d@2x.png"
        }
        else if (weather =='Mist' || weather == 'Smoke' || weather =='Haze' || weather == 'Dust' || weather == 'Fog' || weather == 'Sand' || weather == 'Dust' || weather == 'Ash' || weather == 'Squall' || weather == 'Tornado'){
            weatherImg.src = "./50d@2x.png"
        }
        windSpeed.textContent =response.wind.speed+'m/s'
        visibilityValue=response.visibility
        if (visibilityValue>500){
            visibilityOpinion.textContent="Good"
        }
        else if (visiblityValue<=500 && visiblityValue>200){
            visibilityOpinion.textContent="Limited"
        }
        else if (visiblityValue<=200 && visiblityValue>100){
            visibilityOpinion.textContent="Bad"
        }
        else if (visiblityValue<=100){
            visibilityOpinion.textContent="Very bad"
        }
        if (visibilityValue>1000){
            visibilityMeters.textContent=">1000m"
        }
        else { visibilityMeters.textContent=visibilityValue}
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
            city.textContent=lookingFor
            temperature.textContent='Temperature:'
            temperatureK.textContent = Math.round(response.main.temp)+'°K'
            temperatureC.textContent = Math.round(response.main.temp - 273.15)+'°C'
            temperatureF.textContent = Math.round(response.main.temp*9/5-459.67)+'°F'
            weatherConditions.textContent='Weather conditions:'
            weather = response.weather[0].main
            weatherType.textContent = weather
            if (weather=='Clear'){
                weatherImg.src = "./01d@2x.png"
            }
            else if (weather=='Clouds'){
                weatherImg.src = "./04d@2x.png"
            }
            else if (weather=='Drizzle'){
                weatherImg.src = "./09d@2x.png"
            }
            else if (weather=='Rain'){
                weatherImg.src = "./10d@2x.png"
            }
            else if (weather=='Thunderstorm'){
                weatherImg.src = "./11d@2x.png"
            }
            else if (weather=='Snow '){
                weatherImg.src = "./13d@2x.png"
            }
            else if (weather =='Mist' || weather == 'Smoke' || weather =='Haze' || weather == 'Dust' || weather == 'Fog' || weather == 'Sand' || weather == 'Dust' || weather == 'Ash' || weather == 'Squall' || weather == 'Tornado'){
                weatherImg.src = "./50d@2x.png"
            }
            wind.textContent='Wind:'
            windSpeed.textContent =response.wind.speed+'m/s'
            visibilityValue=response.visibility
            visibility.textContent='Visiblity:'
            if (visibilityValue>500){
                visibilityOpinion.textContent="Good"
            }
            else if (visiblityValue<=500 && visiblityValue>200){
                visibilityOpinion.textContent="Limited"
            }
            else if (visiblityValue<=200 && visiblityValue>100){
                visibilityOpinion.textContent="Bad"
            }
            else if (visiblityValue<=100){
                visibilityOpinion.textContent="Very bad"
            }
            if (visibilityValue>1000){
                visibilityMeters.textContent=">1000m"
            }
            else { visibilityMeters.textContent=visibilityValue}
        })
        .catch(function(){
            city.textContent="Try again"
            temperature.textContent=''
            temperatureK.textContent=''
            temperatureC.textContent=''
            temperatureF.textContent=''
            weatherConditions.textContent=''
            weatherType.textContent=''
            weatherImg.src=''
            wind.textContent=''
            windSpeed.textContent=''
            visibility.textContent=''
            visibilityOpinion.textContent=''
            visibilityMeters.textContent=''
        })
})

