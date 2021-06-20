const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject["towns"];

    const cards = [];

    for (let i = 0; i < towns.length; i++ ) {
        if (i == 0 || i == 2 || i == 6) {
            let card = document.createElement('section');
            let data = document.createElement('div');
            let h2 = document.createElement('h2');
            let motto = document.createElement('h3');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let townImage = document.createElement('img');

            data.className = 'data';
            
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Population: ' + towns[i].currentPopulation;
            rainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;

            if (i == 6) {
                townImage.setAttribute('src', '../lesson9/images/bridge.jpg')
                townImage.setAttribute('alt', 'Image of ' + towns[i].name)
                card.setAttribute('id', 'preston')
              }

              if (i == 2) {
                townImage.setAttribute('src', '../lesson9/images/fishweb.jpg')
                townImage.setAttribute('alt', 'Image of ' + towns[i].name)
                card.setAttribute('id', 'fish')
              }

            if (i == 0) {
              townImage.setAttribute('src', '../lesson9/images/sodaweb.jpg')
              townImage.setAttribute('alt', 'Image of ' + towns[i].name)
              card.setAttribute('id', 'soda')
            } 
           
            
            data.append(h2);
            data.append(motto);
            data.append(yearFounded);
            data.append(population);
            data.append(rainfall);   
            card.append(townImage);  
            card.append(data);  
        
            cards.push(card);
  }}
  const result = [cards[2], cards[0], cards[1]];
  result.forEach(card => document.querySelector('div.cards').append(card))
});