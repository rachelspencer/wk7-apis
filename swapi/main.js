const residentsBtn = document.querySelector('button');

residentsBtn.addEventListener('click', () => {
    //console.log('button clicked');

    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
        .then(response => {
            //const [planet] = [{ name: 'Alderaan'}]
            const planet = response.data.results[0];
            for (i = 0; i < planet.residents.length; i++){
                //console.log(planet.residents[i])
                axios.get(planet.residents[i])
                    .then(response => {
                        //console.log(response)
                        const body = document.querySelector('body')
                        const newH2 = document.createElement('h2');
                        newH2.textContent = response.data.name;
                        body.appendChild(newH2);
                    })
            }
        })
        .catch(error => {console.log(error)
       
    })
});