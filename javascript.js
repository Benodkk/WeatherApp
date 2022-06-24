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

let city = document.createElement('div')
body.appendChild(city)
city.classList.add('city')


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
temperatureK.classList.add('oneTemperature')

let temperatureC = document.createElement('div')
temperatureTypes.appendChild(temperatureC)
temperatureC.classList.add('oneTemperature')

let temperatureF = document.createElement('div')
temperatureTypes.appendChild(temperatureF)
temperatureF.classList.add('oneTemperature')


let weatherConditions = document.createElement('div')
body.appendChild(weatherConditions)
weatherConditions.classList.add('weatherConditions')

let wind = document.createElement('div')
body.appendChild(wind)
wind.classList.add('wind')


let visibilityContainer = document.createElement('div')
body.appendChild(visibilityContainer)
visibilityContainer.classList.add('container')

let visibility = document.createElement('div')
visibilityContainer.appendChild(visibility)
visibility.textContent='Visibility:'
visibility.classList.add('leftPart')

let visibilityDescription = document.createElement('div')
visibility.appendChild(visibilityDescription)
visibilityDescription.classList.add('smallContainer')

let visibilityOpinion = document.createElement('div')
visibilityDescription.appendChild(visibilityOpinion)
visibilityOpinion.classList.add('oneVisibility')

let visibilityMeters = document.createElement('div')
visibilityDescription.appendChild(visibilityMeters)
visibilityMeters.classList.add('oneVisibility')


fetch(`https://api.openweathermap.org/data/2.5/weather?q=Warsaw&APPID=9c5a1dbf98aaef67ea4e5e683bb005a2`, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        city.textContent="Warsaw"
        temperatureK.textContent = Math.round(response.main.temp)+'°K'
        temperatureC.textContent = Math.round(response.main.temp - 273.15)+'°C'
        temperatureF.textContent = Math.round(response.main.temp*9/5-459.67)+'°F'
        weatherConditions.textContent = 'Weather conditions: '+response.weather[0].main
        wind.textContent = 'Wind: '+response.wind.speed+'m/s'
        visibility=response.visibility
        console.log(visibility)
        if (visibility>500){
            visibilityOpinion.textContent="Good"
        }
        else if (visiblity<=500 && visiblity>200){
            visibilityOpinion.textContent="Limited"
        }
        else if (visiblity<=200 && visiblity>100){
            visibilityOpinion.textContent="Bad"
        }
        else if (visiblity<=100){
            visibilityOpinion.textContent="Very bad"
        }
        if (visibility>1000){
            visibilityMeters.textContent=">1000m"
        }
        else { visibilityMeters.textContent=visibility}
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
            temperatureK.textContent = Math.round(response.main.temp)+'°K'
            temperatureC.textContent = Math.round(response.main.temp - 273.15)+'°C'
            temperatureF.textContent = Math.round(response.main.temp*9/5-459.67)+'°F'
            weatherConditions.textContent = 'Weather conditions: '+response.weather[0].main
            wind.textContent = 'Wind: '+response.wind.speed+'m/s'
            visibility=response.visibility
            console.log(visibility)
            if (visibility>500){
                visibilityOpinion.textContent="Good"
            }
            else if (visiblity<=500 && visiblity>200){
                visibilityOpinion.textContent="Limited"
            }
            else if (visiblity<=200 && visiblity>100){
                visibilityOpinion.textContent="Bad"
            }
            else if (visiblity<=100){
                visibilityOpinion.textContent="Very bad"
            }
            if (visibility>1000){
                visibilityMeters.textContent=">1000m"
            }
            else { visibilityMeters.textContent=visibility}
        })
        .catch(function(){
            console.log("We couldn't find the city, try again.")
        })
})

