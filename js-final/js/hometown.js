const requestURL = 'https://skeet1269.github.io/business.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const business = jsonObject["business"];

    const cards = [];

    for (let i = 0; i < business.length; i++ ) {
        if (i == 0 || i == 2 || i == 3) {
            let card = document.createElement('section');
            let data = document.createElement('div');
            let h2 = document.createElement('h2');
            let motto = document.createElement('h3');
            let Phone # = document.createElement('p');
            let Address = document.createElement('p');
            let townImage = document.createElement('img');

            data.className = 'data';
            
            h2.textContent = business[i].name;
            motto.textContent = business[i].motto;
            Phone.textContent = 'Phone #: ' + business[i].yearFounded;
            Address.textContent = 'Population: ' + business[i].currentPopulation;
            

            if (i == 6) {
                townImage.setAttribute('src', '../lesson9/images/bridge.jpg')
                townImage.setAttribute('alt', 'Image of ' + business[i].name)
                card.setAttribute('id', 'preston')
              }

              if (i == 2) {
                townImage.setAttribute('src', '../lesson9/images/fishweb.jpg')
                townImage.setAttribute('alt', 'Image of ' + business[i].name)
                card.setAttribute('id', 'fish')
              }

            if (i == 0) {
              townImage.setAttribute('src', '../lesson9/images/sodaweb.jpg')
              townImage.setAttribute('alt', 'Image of ' + business[i].name)
              card.setAttribute('id', 'soda')
            } 
           
            
            data.append(h2);
            data.append(motto);
            data.append(Phone);
            data.append(Address);
            card.append(townImage);  
            card.append(data);  
        
            cards.push(card);
  }}
  const result = [cards[2], cards[0], cards[1]];
  result.forEach(card => document.querySelector('div.cards').append(card))
});