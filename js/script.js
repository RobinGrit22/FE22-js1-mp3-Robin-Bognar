const btn = document.querySelector('button')
let empty = document.querySelector('div')
const error = document.querySelector('#error-message')

btn.addEventListener('click', (event) => {
    event.preventDefault()
    error.innerHTML = ''

    const languageInput = document.getElementById('userInput')
    const languageSearch = languageInput.value
    const url = `https://restcountries.com/v3.1/lang/${languageSearch}`


    fetch(url)
    .then( response=>{
        console.log(response);
        if(response.status >= 200 && response.status < 300){
            return response.json()
        }
        else {
          error.innerText = 'det gick inte'
        }

    })

     
    .then((data) => {
        empty.innerHTML = ''
        console.log(data)
        data.forEach(element => {
        

            const oficcialName = document.createElement('p')
            empty.append(oficcialName)
            oficcialName.innerHTML = 'Official name: ' + element.name.official

            const subregion = document.createElement('p')
            empty.append(subregion)
            subregion.innerHTML = 'Subregion: ' + element.subregion

            const capital = document.createElement('p')
            empty.append(capital)
            capital.innerText = 'Capital city: ' + element.capital

            const population = document.createElement('p')
            
            empty.append(population)
            population.innerText = 'Population: ' + element.population

            const imgFlag = document.createElement('img')
            empty.append(imgFlag)
            imgFlag.src = element.flags.png

        
        });
    })

});
