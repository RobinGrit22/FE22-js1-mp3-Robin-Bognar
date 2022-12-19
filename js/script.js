const btn = document.querySelector('button')
let empty = document.querySelector('main')


btn.addEventListener('click', (event) => {
    event.preventDefault()
    const languageInput = document.getElementById('userInput')
    const languageSearch = languageInput.value.toLowerCase();
    const url = `https://restcountries.com/v3.1/lang/${languageSearch}`


    fetch(url)
    .then( response=>{
        
        if(response.status >= 200 && response.status < 300)
            return response.json();
            else throw 'Funka inte, vänligen sök på ett språk';
    }).catch(function(error) {
        alert(error)
    })
         
    .then((data) => {
        empty.innerHTML = ''
        const popArray = [];
        let popContainer = [];
        
        data.forEach(element => {

            popContainer = document.createElement('div')
            empty.append(popContainer)

            const oficcialName = document.createElement('p')
            popContainer.append(oficcialName)
            oficcialName.innerHTML = 'Official name: ' + element.name.official

            const subregion = document.createElement('p')
            popContainer.append(subregion)
            subregion.innerHTML = 'Subregion: ' + element.subregion

            const capital = document.createElement('p')
            popContainer.append(capital)
            capital.innerText = 'Capital city: ' + element.capital

            const population = document.createElement('p')
            popContainer.append(population)
            population.innerText = 'Population: ' + element.population
            popArray.push(element.population)
            population.setAttribute('id', 'population');

            const imgFlag = document.createElement('img')
            popContainer.append(imgFlag)
            imgFlag.src = element.flags.png
            
         });

         const populationMatch = (Math.max(...popArray))
         const popTextArray = document.querySelectorAll('#population');

         for(let i = 0; i < popTextArray.length; i++){
              if(popTextArray[i].innerText == `Population: ${populationMatch}`){
                popTextArray[i].style.border = '2px solid green'
              }
         }  
    });
});
