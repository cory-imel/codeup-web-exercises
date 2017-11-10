{
    "use strict";

    let htmlOutput = "";

    swCharacterSearch = (name) => {
        fetch(`https://swapi.co/api/people/?search=${name}`)
            .then(response => response.json())
            .then(data => data.results[0].homeworld)
            .then(homeworld => homeWorldSearch(homeworld))
            .catch(error => console.log(error));
        htmlOutput += `<h1>Name: ${name}</h1>`;
    };

    homeWorldSearch = (homeworld) => {
        let homeWorldName = "";
        fetch(homeworld)
            .then(response => response.json())
            .then(data => {
                homeWorldName = data.name;
                htmlOutput += `<h1>Home World: ${homeWorldName}</h1>`
                getFilmNames(data.films)})
            .catch(error => console.log(error));

    };

    getFilmNames = (filmURLs) => {
        let filmNames = [];
        let i = 0;
        const titleLoop = new Promise((resolve, reject) => {
            for (const filmURL of filmURLs ){
                fetch(filmURL)
                    .then(response => response.json())
                    .then(data => filmNames[filmNames.length] = data.title)
                    .then(() => i++)
                    .then(() => {
                        if (i === filmURLs.length){
                        resolve(filmNames);
                        }
                    })
                    .catch(error => reject(error));
            }
        });
        titleLoop.then(names => {
            htmlOutput += `<h1>Films:</h1>`;
            htmlOutput += `<ul>`;
            for (let name of names){
                htmlOutput += `<li>${name}</li>`;
            }
            htmlOutput += `</ul>`;
            console.log(htmlOutput);
            document.getElementById('results').innerHTML = htmlOutput;
        })
    };


    swCharacterSearch('leia');
}